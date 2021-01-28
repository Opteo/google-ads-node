FROM golang:latest

ENV BAZEL_VERSION=4.0.0
ARG GOOGLE_ADS_VERSION

# Install dependencies
RUN apt-get update -y
RUN apt-get install git wget pkg-config zip g++ zlib1g-dev unzip python -y
RUN apt-get install \
    python3 \
    python3-distutils \
    python3-apt -y

# Download Bazel
RUN go get github.com/bazelbuild/bazelisk

# Clone the googleapis repo
RUN git clone https://github.com/googleapis/googleapis.git

WORKDIR /go/googleapis

# Compile protocol buffers
RUN bazelisk build //google/ads/googleads/${GOOGLE_ADS_VERSION}:googleads-nodejs

RUN echo "compiled ${GOOGLE_ADS_VERSION} protos"
