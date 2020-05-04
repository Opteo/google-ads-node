FROM namely/protoc-all

RUN apk update && apk add bash git nodejs nodejs-npm

WORKDIR /usr/local/gads/

# Override entry CMD so we can run a custom script
ENTRYPOINT [""]

RUN apk update && apk add --no-cache libc6-compat
RUN ln -s /lib/libc.musl-x86_64.so.1 /lib/ld-linux-x86-64.so.2

# Install Node dependencies
RUN npm install -g ts-protoc-gen \
    grpc-ts-protoc-gen \ 
    grpc-tools \
    protobufjs \
    uglify-js \
    prettier

# Install local Node dependencies
COPY ./package.json ./package.json
RUN npm install

# Copy compile scripts
COPY ./scripts ./scripts
COPY ./.prettierrc.js ./.prettierrc.js

RUN chmod a+x ./scripts/compile.sh

CMD sh ./scripts/compile.sh