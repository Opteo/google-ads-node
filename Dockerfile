ARG GOOGLE_ADS_VERSION

# Build stage for compiling the protocol buffers using bazel
FROM golang:latest AS protos

ENV BAZEL_VERSION=4.0.0
ARG GOOGLE_ADS_VERSION

# Install dependencies
RUN apt update --allow-releaseinfo-change
RUN apt-get update -y
RUN apt-get install git wget pkg-config zip g++ zlib1g-dev unzip python-is-python3 software-properties-common default-jre -y
RUN apt-get install \
    python3 \
    python3-distutils \
    python3-apt -y

# Download Bazel
RUN go install github.com/bazelbuild/bazelisk@latest

# Clone the googleapis repo
RUN git clone https://github.com/googleapis/googleapis.git

WORKDIR /go/googleapis

# Compile protocol buffers (outputs to /root/.cache/bazel/_bazel_root/406d0d5cbc9dcef756f86d53a7b98449/execroot/com_google_googleapis/bazel-out/aarch64-fastbuild/bin/google/ads/googleads/v16/googleads-nodejs.tar.gz)
RUN bazelisk build //google/ads/googleads/${GOOGLE_ADS_VERSION}:googleads-nodejs

# Get the path to the complied bazel output and set it to a file. Result is /root/.cache/bazel/_bazel_root/406d0d5cbc9dcef756f86d53a7b98449/execroot/com_google_googleapis/bazel-out/aarch64-fastbuild/bin
RUN bazelisk info bazel-bin > /tmp/bazel-bin-path

# Copy the compiled bazel output to a new location, to be used in next stage
RUN cp -r $(cat /tmp/bazel-bin-path) /tmp/bazel-bin-copy

# Build stage for extracting the compiled nodejs gapic client and performing any custom changes
FROM node:latest

# Copy the compiled bazel output from the previous stage
COPY --from=protos /tmp/bazel-bin-copy /tmp/bazel-bin-copy 

ARG GOOGLE_ADS_VERSION

RUN mkdir /package

WORKDIR /package

COPY --from=protos /tmp/bazel-bin-copy/google/ads/googleads/${GOOGLE_ADS_VERSION}/googleads-nodejs.tar.gz /package

RUN tar -xvzf googleads-nodejs.tar.gz -C .

RUN cd googleads-nodejs && \
    npm uninstall google-gax && \
    npm install google-gax && \
    rm -rf test/ system-test/

# horrible hack but no easy way to resolve this
# requires preventing request parameters being compiled to snakeCase
# in this dependency: https://github.com/googleapis/gapic-generator-typescript/blob/master/templates/typescript_gapic/src/%24version/%24service_client.ts.njk
# i will personally buy a beer to whoever can solve this, good luck.
RUN sed -i 's/request.keywordPlan/request.keyword_plan/' googleads-nodejs/src/${GOOGLE_ADS_VERSION}/*.ts && \
    sed -i 's/request.campaignExperiment/request.campaign_experiment/' googleads-nodejs/src/${GOOGLE_ADS_VERSION}/*.ts && \
    sed -i 's/request.campaignDraft/request.campaign_draft/' googleads-nodejs/src/${GOOGLE_ADS_VERSION}/*.ts && \
    sed -i 's/request.resourceName/request.resource_name/' googleads-nodejs/src/${GOOGLE_ADS_VERSION}/*.ts && \
    sed -i 's/request.customerId/request.customer_id/' googleads-nodejs/src/${GOOGLE_ADS_VERSION}/*.ts && \
    sed -i 's/request.adGroupAd/request.ad_group_ad/' googleads-nodejs/src/${GOOGLE_ADS_VERSION}/*.ts
