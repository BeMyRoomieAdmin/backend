import { Module } from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { ApartmentController } from './apartment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Apartment, ApartmentSchema } from './entities/apartment.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Apartment.name, schema: ApartmentSchema },
    ]),
  ],
  controllers: [ApartmentController],
  providers: [ApartmentService],
})
export class ApartmentModule {}
