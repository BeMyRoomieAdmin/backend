import { Module } from '@nestjs/common';
import { HirerService } from './hirer.service';
import { HirerController } from './hirer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Hirer, HirerSchema } from './entities/hirer.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hirer.name, schema: HirerSchema }]),
  ],
  controllers: [HirerController],
  providers: [HirerService],
})
export class HirerModule {}
