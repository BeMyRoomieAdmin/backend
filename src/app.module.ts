import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { ConfigurationModule } from './config/configuration.module';

@Module({
  imports: [
    ConfigurationModule,
    // MongooseModule.forRoot(process.env.MONGODB_URI!, {
    //   dbName: 'be-my-roomie',
    // }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
