import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { Logger } from './shared/infra/logger';
import { loggerMiddleware } from './shared/infra/middlewares/logger';
import { metadataMiddleware } from './shared/infra/middlewares/metadata';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule, {
    logger,
  });
  app.setGlobalPrefix('/api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.use(loggerMiddleware(logger));
  app.use(metadataMiddleware(logger));
  await app.listen(3001);
}
bootstrap();
