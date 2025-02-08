import { Module } from '@nestjs/common';
import { BcryptService } from './services/bcrypt.service';

@Module({
  controllers: [],
  providers: [BcryptService],
  exports: [BcryptService],
})
export class SharedModule {}
