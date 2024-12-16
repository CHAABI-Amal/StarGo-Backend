import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3001; // Utiliser un autre port
  app.enableCors(); // Enable Cross-Origin Resource Sharing
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
