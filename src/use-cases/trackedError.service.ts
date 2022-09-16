import { Inject, Injectable } from '@nestjs/common';
import { TrackedErrorRepository } from '../domain/trackedErrorRepository';
import { TrackedError } from '../domain/trackedError';
import dependencyMap from 'src/dependencyMap';

@Injectable()
export class TrackedErrorService {
  constructor(
    @Inject(dependencyMap.TRACKED_ERROR_REPOSITORY)
    private trackedErrorRepository: TrackedErrorRepository,
  ) {}

  save(
    name: string,
    message: string,
    stack: string,
    componentStack: string,
  ): Promise<void> {
    const trackedError = new TrackedError(name, message, stack, componentStack);
    return this.trackedErrorRepository.save(trackedError);
  }
}
