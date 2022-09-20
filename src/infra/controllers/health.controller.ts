import { Controller, Get, Logger } from '@nestjs/common';

@Controller('/health')
export class HealthController {
  private readonly logger = new Logger();
  @Get()
  async check() {
    this.logger.log('health check controller called');
    return {
      data: {
        message: 'the server is up and running',
      },
    };
  }
}
