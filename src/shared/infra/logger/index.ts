import { LoggerService } from '@nestjs/common';
import * as winston from 'winston';

const enum levels {
  error = 'error',
  warn = 'warn',
  info = 'info',
  http = 'http',
  verbose = 'verbose',
  debug = 'debug',
  silly = 'silly',
}

export class Logger implements LoggerService {
  private client: winston.Logger;
  constructor() {
    this.client = winston.createLogger({
      level: levels.debug,
      format: winston.format.json(),
      transports: [new winston.transports.Console()],
    });

    if (process.env.NODE_ENV !== 'production') {
      this.client.add(
        new winston.transports.Console({
          format: winston.format.simple(),
        }),
      );
    }
  }

  private datetime(): string {
    return new Date().toISOString();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  log(message: any, ...optionalParams: any[]): void {
    this.client.log(levels.info, { message, timestamp: this.datetime() });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error(message: any, ...optionalParams: any[]): void {
    this.client.log(levels.error, { message, timestamp: this.datetime() });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  warn(message: any, ...optionalParams: any[]) {
    this.client.log(levels.warn, { message, timestamp: this.datetime() });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  debug?(message: any, ...optionalParams: any[]) {
    this.client.log(levels.debug, { message, timestamp: new Date() });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  verbose?(message: any, ...optionalParams: any[]) {
    this.client.log(levels.verbose, { message });
  }
}
