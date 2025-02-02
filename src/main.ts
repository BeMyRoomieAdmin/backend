import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Establecer el prefijo de la API
  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      // El validador quitará al objeto validado cualquier propiedad que no utilice ningún decorador de validación
      whitelist: true,
      // En lugar de eliminar las propiedades no incluidas en la lista blanca, el validador arrojará un error
      forbidNonWhitelisted: true,
      // Transforma automáticamente objetos en una llamada para que sean objetos tipados según sus clases DTO
      transform: true,
      transformOptions: {
        // El transformador de clase intentará la conversión según el tipo reflejado de TS
        enableImplicitConversion: true,
      },
    }),
  );

  // Elimina la cabecera X-Powered-By de las respuestas
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.removeHeader('X-Powered-By');
    next();
  });

  await app.listen(process.env.PORT ?? 3000);
  Logger.log(`Server running on port ${process.env.PORT}`, 'NestApplication');
}

bootstrap();
