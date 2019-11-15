export interface LogOptions {
  output?: "stderr" | "stdout" | "none"; // "stderr"
  verbosity?: "debug" | "info" | "warning"; // "info"
  callback?: (message: RequestLog) => void;
}

export interface RequestLog {
  request?: {
    method?: string;
    headers?: any;
    body?: any;
  };
  response?: {
    headers?: any;
    body?: any;
    status?: any;
  };
}

export class Logger {
  private request!: RequestLog | undefined;
  private options: LogOptions;

  constructor(options: LogOptions) {
    this.options = {
      output: options.output || "stderr",
      verbosity: options.verbosity || "info",
      callback: options.callback || undefined,
    };
    this.resetLog();
  }

  public setRequestMethod(method: string) {
    this.request!.request!.method = method;
  }

  public setRequestHeaders(headers: any) {
    this.request!.request!.headers = headers;
  }

  public setRequestBody(body: any) {
    this.request!.request!.body = body;
  }

  public setResponseHeaders(headers: any) {
    this.request!.response!.headers = headers;
  }

  public setResponseBody(body: any) {
    this.request!.response!.body = body;
  }

  public setResponseStatus(status: any) {
    this.request!.response!.status = status;
  }

  public log(): void {
    let output = "";

    if (this.options.verbosity === "warning") {
      output = this.getWarningMessage();
    } else if (this.options.verbosity === "debug") {
      output = this.getDebugMessage();
    } else {
      output = this.getInfoMessage();
    }

    if (this.options.output === "stdout") {
      process.stdout.write(output);
    }
    if (this.options.output === "stderr") {
      process.stderr.write(output);
    }

    if (this.options.callback) {
      this.options.callback(this.request as RequestLog);
    }

    this.resetLog();
  }

  private getDebugMessage(): string {
    return `\n${JSON.stringify(this.request!.request)}\n`;
  }

  private getInfoMessage(): string {
    return `\n${JSON.stringify(this.request)}\n`;
  }

  private getWarningMessage(): string {
    return `\n${JSON.stringify(this.request!.response)}\n`;
  }

  private resetLog() {
    this.request = {
      request: { method: undefined, headers: undefined, body: undefined },
      response: { headers: undefined, body: undefined, status: undefined },
    };
  }
}
