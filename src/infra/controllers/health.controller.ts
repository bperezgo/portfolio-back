import { Controller, Get } from '@nestjs/common';

@Controller('/health')
export class HealthController {
  @Get()
  async check() {
    return {
      data: {
        message: 'the server is up and running',
      },
    };
  }
}
