import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Permito CORS por testing
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
