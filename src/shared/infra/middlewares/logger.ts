import { LoggerService } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export function loggerMiddleware(loggerClient: LoggerService) {
  return function (req: Request, res: Response, next: NextFunction) {
    // TODO: How to log query and params??
    loggerClient.log(req.body);
    next();
  };
}
