import { Module } from '@nestjs/common';
import { RealStateService } from './real-state.service';
import { RealStateController } from './real-state.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RealState, RealStateSchema } from './entities/real-state.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RealState.name, schema: RealStateSchema },
    ]),
  ],
  controllers: [RealStateController],
  providers: [RealStateService],
})
export class RealStateModule {}
