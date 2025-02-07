import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JoiValidationSchema } from './joi.validation.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      validationSchema: JoiValidationSchema,
      isGlobal: true,
    }),
  ],
})
export class ConfigurationModule {}
