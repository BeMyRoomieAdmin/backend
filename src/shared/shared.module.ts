import { Module } from '@nestjs/common';
import { SeedController } from './services/seed.controller';
import { SeedService } from './services/seed.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Owner, OwnerSchema } from 'src/owner/entities/owner.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Owner.name, schema: OwnerSchema }]),
  ],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SharedModule {}
