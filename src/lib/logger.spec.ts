import { Logger, RequestLog } from "./logger";

test("new logger with default options", () => {
  const logger = new Logger({});
  expect(logger).toBeInstanceOf(Logger);
  // @ts-ignore We can access options in the tests
  expect(logger.options).toEqual({
    output: "stderr",
    verbosity: "info",
    callback: undefined,
  });
});

test("new logger with custom options", () => {
  const cb = (msg: any) => {
    console.log(msg);
  };
  const logger = new Logger({
    output: "stdout",
    verbosity: "debug",
    callback: cb,
  });
  // @ts-ignore We can access options in the tests
  expect(logger.options).toEqual({
    output: "stdout",
    verbosity: "debug",
    callback: cb,
  });
});

test("log message can be constructed via set methods", async done => {
  const mockMessage: RequestLog = {
    request: {
      method: "testMethod/Function",
      headers: { key: "value" },
      body: { query: "SELECT campaign.id FROM campaign" },
    },
    response: {
      headers: { key: "value" },
      body: { results: [1, 2, 3] },
      status: { code: 1 },
    },
    meta: {
      is_mutation: true,
      elapsed_ms: 500,
    },
  };

  const logger = new Logger({
    output: "none",
    verbosity: "info",
    callback(message) {
      //   expect(message).toEqual(mockMessage);
      expect(message.request).toEqual(mockMessage.request);
      expect(message.response).toEqual(mockMessage.response);
      expect(message.meta!.is_mutation).toEqual(true);
      expect(message.meta!.elapsed_ms).toBeGreaterThanOrEqual(mockMessage.meta!.elapsed_ms!);
      done();
    },
  });

  // Request
  logger.setRequestMethod(mockMessage.request!.method!);
  logger.setRequestHeaders(mockMessage.request!.headers);
  logger.setRequestBody(mockMessage.request!.body);

  // Response
  logger.setResponseHeaders(mockMessage.response!.headers);
  logger.setResponseBody(mockMessage.response!.body);
  logger.setResponseStatus(mockMessage.response!.status);

  // Meta
  logger.setRequestIsMutation();
  logger.setStartTs();
  await new Promise(resolve => {
    setTimeout(() => {
      logger.setEndTs();
      resolve();
    }, 500);
  });

  logger.log();
});

test("log message is reset after logging", () => {
  const logger = new Logger({
    output: "none",
    callback(message) {
      expect(message.request!.method).toEqual(undefined);
    },
  });
  logger.setRequestMethod("testMethod/Function");
  // @ts-ignore Accessing private method for test
  logger.resetLog();
  logger.log();
});

test("logger can construct message at different verbosity levels", () => {
  const logger = new Logger({});

  // @ts-ignore Accessing private method for test
  const debugMsg = logger.getDebugMessage();
  // @ts-ignore Accessing private method for test
  const infoMsg = logger.getInfoMessage();
  // @ts-ignore Accessing private method for test
  const warningMsg = logger.getWarningMessage();

  expect(debugMsg.trim()).toEqual(
    JSON.stringify({
      request: undefined,
    })
  );
  expect(infoMsg.trim()).toEqual(
    JSON.stringify({ request: {}, response: {}, meta: { is_mutation: false } })
  );
  expect(warningMsg.trim()).toEqual(JSON.stringify({ response: undefined }));
});

test("logger can outpout to stdout", () => {
  const stdoutLogger = new Logger({
    output: "stdout",
    verbosity: "debug",
  });

  // Intercept stdout
  // Based on https://medium.com/@gajus/capturing-stdout-stderr-in-node-js-using-domain-module-3c86f5b1536d
  let stdoutOutput = "";
  const originalStdoutWrite = process.stdout.write.bind(process.stdout);

  // @ts-ignore We don't care about these types
  process.stdout.write = (chunk, encoding, callback) => {
    if (typeof chunk === "string") {
      stdoutOutput += chunk;
    }
    return originalStdoutWrite(chunk, encoding, callback);
  };

  stdoutLogger.setRequestMethod("testMethod/Function");
  stdoutLogger.log();

  process.stdout.write = originalStdoutWrite;

  expect(stdoutOutput.trim()).toEqual(JSON.stringify({ method: "testMethod/Function" }));
});

test("logger can output to stderr", () => {
  const stdoutLogger = new Logger({
    output: "stderr",
    verbosity: "debug",
  });

  // Intercept stderr
  let stderrOutput = "";
  const originalStderrWrite = process.stderr.write.bind(process.stderr);

  // @ts-ignore We don't care about these types
  process.stderr.write = (chunk, encoding, callback) => {
    if (typeof chunk === "string") {
      stderrOutput += chunk;
    }
    return originalStderrWrite(chunk, encoding, callback);
  };

  stdoutLogger.setRequestMethod("testMethod/Function");
  stdoutLogger.log();

  process.stderr.write = originalStderrWrite;

  expect(stderrOutput.trim()).toEqual(JSON.stringify({ method: "testMethod/Function" }));
});
