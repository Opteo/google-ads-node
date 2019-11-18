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
  meta?: {
    is_mutation?: boolean;
    elapsed_ms?: number;
  };
}

export class Logger {
  private request!: RequestLog | undefined;
  private options: LogOptions;
  private start_ts!: Date | undefined;
  private end_ts!: Date | undefined;

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

  public setRequestIsMutation() {
    this.request!.meta!.is_mutation = true;
  }

  public setStartTs() {
    this.start_ts = new Date();
  }

  public setEndTs() {
    this.end_ts = new Date();
  }

  public calculateElapsedMs() {
    if (!this.end_ts || !this.start_ts) {
      return;
    }
    // @ts-ignore This is okay
    const ms = this.end_ts - this.start_ts;
    this.request!.meta!.elapsed_ms = ms;
  }

  public log(): void {
    let output = "";
    this.calculateElapsedMs();

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
    const default_meta = {
      is_mutation: false,
      elapsed_ms: undefined,
    };
    this.request = {
      request: { method: undefined, headers: undefined, body: undefined },
      response: { headers: undefined, body: undefined, status: undefined },
      meta: default_meta,
    };
    this.start_ts = undefined;
    this.end_ts = undefined;
  }
}
