import { Controller, Get } from '@nestjs/common';
import { ExperienceService } from 'src/use-cases/experience.service';
import { Experience } from '../../domain/experience';

@Controller('/experiences')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Get()
  async findAll(): Promise<{ data: Experience[] }> {
    const experiences = await this.experienceService.findAll();
    return {
      data: experiences,
    };
  }
}
