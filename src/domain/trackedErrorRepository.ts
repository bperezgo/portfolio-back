import { TrackedError } from './trackedError';

export interface TrackedErrorRepository {
  save(error: TrackedError): Promise<void>;
}
