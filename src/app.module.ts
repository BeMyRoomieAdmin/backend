import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { RenterModule } from './renter/renter.module';
import { AddressModule } from './address/address.module';
import { RoomModule } from './room/room.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que las variables de entorno estén disponibles en toda la app
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI!, {
      dbName: 'be-my-roomie',
    }),
    RenterModule,
    AddressModule,
    RoomModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
