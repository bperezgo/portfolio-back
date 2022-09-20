import { Request, Response, NextFunction } from 'express';
import { MetadataLogger } from '../logger/metadata-logger';

export function metadataMiddleware(loggerClient: MetadataLogger) {
  return function (req: Request, res: Response, next: NextFunction) {
    // TODO: take the values from the request
    loggerClient.addMetadata({ meta: 'meta' });
    next();
  };
}
