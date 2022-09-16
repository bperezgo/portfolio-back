import { TrackedError } from '../../domain/trackedError';
import { TrackedErrorRepository } from '../../domain/trackedErrorRepository';

// TODO: Save this values in a dynamo db
export class InMemoryTrackedErrorRepository implements TrackedErrorRepository {
  private errors: TrackedError[];
  constructor() {
    this.errors = [];
  }
  async save(error: TrackedError): Promise<void> {
    this.errors.push(error);
    console.log('[INFO] Errors:', this.errors);
  }
}
