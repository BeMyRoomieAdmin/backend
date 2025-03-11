import { Module } from '@nestjs/common';
import { RenterService } from './renter.service';
import { RenterController } from './renter.controller';

@Module({
  controllers: [RenterController],
  providers: [RenterService],
})
export class RenterModule {}
