import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { ConfigurationModule } from './config/configuration.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ConfigurationModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
