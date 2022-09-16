import { Module } from '@nestjs/common';
import { ExperienceController } from './infra/controllers/experience.controller';
import { TrackedErrorController } from './infra/controllers/trackedError.controller';
import { ExperienceService } from './use-cases/experience.service';
import { TrackedErrorService } from './use-cases/trackedError.service';
import { InMemoryTrackedErrorRepository } from './infra/repositories/inMemoryTrackedRepository';
import dependencyMap from './dependencyMap';

@Module({
  imports: [],
  controllers: [ExperienceController, TrackedErrorController],
  providers: [
    ExperienceService,
    TrackedErrorService,
    {
      provide: dependencyMap.TRACKED_ERROR_REPOSITORY,
      useValue: new InMemoryTrackedErrorRepository(),
    },
  ],
})
export class AppModule {}
