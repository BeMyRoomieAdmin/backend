import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { ConfigurationModule } from './config/configuration.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [ConfigurationModule, DatabaseModule, UserModule, SharedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
