import { Controller, Post, Body } from '@nestjs/common';
import { TrackedErrorService } from 'src/use-cases/trackedError.service';
import { ErrorDTO } from '../dto/error.dto';

@Controller('/errors')
export class TrackedErrorController {
  constructor(private readonly trackedErrorService: TrackedErrorService) {}

  @Post()
  saveErrorFromFront(@Body() body: ErrorDTO) {
    console.log('[INFO] handling the request', body);
    const { componentStack, message, name, stack } = body;
    return this.trackedErrorService.save(name, message, stack, componentStack);
  }
}
