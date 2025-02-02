import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';

@Injectable()
export class OwnerService {
  create(createOwnerDto: CreateOwnerDto) {
    console.log(createOwnerDto);
    return 'This action adds a new owner';
  }

  findAll() {
    return `This action returns all owner`;
  }

  findOne(id: number) {
    return `This action returns a #${id} owner`;
  }

  update(id: number, updateOwnerDto: UpdateOwnerDto) {
    console.log(updateOwnerDto);
    return `This action updates a #${id} owner`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
