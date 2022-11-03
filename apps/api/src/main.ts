import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from '@/app.module';
import * as cookieParser from 'cookie-parser';
import * as passport from 'passport';
import * as session from 'express-session';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser(process.env.APP_SECRET));
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  // app.enableCors({
  //   origin: process.env.ALLOWED_ORIGINS?.split(/\s*,\s*/) ?? '*',
  //   credentials: true,
  //   exposedHeaders: ['Authorization'],
  // });

  /* Swagger */
  const config = new DocumentBuilder()
    .setTitle('Blog API')
    .setVersion('1.0.0')
    .setDescription('An API for Blog Application')
    .setContact('Edward Fernandez', 'https://www.wardvisual.me/', '')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.APP_PORT);
}

bootstrap();
