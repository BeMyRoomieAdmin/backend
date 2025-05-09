import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { ConfigurationModule } from './config/configuration.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { TenantModule } from './tenant/tenant.module';
import { AuthModule } from './auth/auth.module';
import { RoomModule } from './room/room.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    UserModule,
    SharedModule,
    TenantModule,
    AuthModule,
    RoomModule,
    AddressModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
