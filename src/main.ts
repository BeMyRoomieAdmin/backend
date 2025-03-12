import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Habilita CORS para todas las rutas de la aplicación con el origen configurado
  app.enableCors();

  // --- Prefijo Global 'api' ---
  app.setGlobalPrefix('api'); // Añade el prefijo 'api' a todas las rutas

  // --- Configuración de GlobalPipes ---
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina propiedades extrañas en DTOs
      forbidNonWhitelisted: true, // Lanza error si se reciben propiedades no permitidas
      transform: true, // Transforma payloads a los tipos definidos en DTOs
      transformOptions: {
        enableImplicitConversion: true, // Habilita la conversión implícita de tipos
      },
    }),
  );

  // --- Configuración de Helmet para seguridad HTTP ---
  app.use(helmet());

  // --- Eliminar el header X-Powered-By por seguridad ---
  app.disable('x-powered-by');

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(`Server running on port ${process.env.PORT}`, 'NestApplication');
}

bootstrap();
