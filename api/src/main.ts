import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from '@/app.module';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  /* Swagger */
  const config = new DocumentBuilder()
    .setTitle('Blog API')
    .setVersion('1.0.0')
    .setDescription('An API for Blog Application')
    .setContact('Edward Fernandez', 'https://www.wardvisual.me/', '')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  /* Listening to PORT 3000.. */
  await app.listen(3000);
}

bootstrap();
