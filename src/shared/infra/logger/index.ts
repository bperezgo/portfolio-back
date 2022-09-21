import { LoggerService } from '@nestjs/common';
import * as winston from 'winston';
import { MetadataLogger } from './metadata-logger';

const enum levels {
  error = 'error',
  warn = 'warn',
  info = 'info',
  http = 'http',
  verbose = 'verbose',
  debug = 'debug',
  silly = 'silly',
}

export class Logger implements LoggerService, MetadataLogger {
  private client: winston.Logger;
  private metadata: { [Key: string]: string };
  constructor() {
    this.client = winston.createLogger({
      level: levels.debug,
      format: winston.format.json(),
      transports: [new winston.transports.Console()],
    });
  }

  private datetime(): string {
    return new Date().toISOString();
  }

  addMetadata(metadata: { [Key: string]: string }): void {
    this.metadata = metadata;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  log(message: unknown, ...optionalParams: any[]): void {
    if (typeof message === 'string') {
      this.client.log(levels.info, { message, timestamp: this.datetime() });
    } else {
      this.client.log(levels.info, {
        data: message,
        timestamp: this.datetime(),
        metadata: this.metadata,
      });
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error(message: unknown, ...optionalParams: any[]): void {
    this.client.log(levels.error, { message, timestamp: this.datetime() });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  warn(message: unknown, ...optionalParams: any[]) {
    this.client.log(levels.warn, { message, timestamp: this.datetime() });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  debug?(message: unknown, ...optionalParams: any[]) {
    this.client.log(levels.debug, { message, timestamp: new Date() });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  verbose?(message: unknown, ...optionalParams: any[]) {
    this.client.log(levels.verbose, { message });
  }
}
