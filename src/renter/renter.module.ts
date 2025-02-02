import { Module } from '@nestjs/common';
import { RenterService } from './renter.service';
import { RenterController } from './renter.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Renter, RenterSchema } from './entities/renter.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Renter.name, schema: RenterSchema }]),
  ],
  controllers: [RenterController],
  providers: [RenterService],
})
export class RenterModule {}
