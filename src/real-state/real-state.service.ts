import { Injectable } from '@nestjs/common';
import { CreateRealStateDto } from './dto/create-real-state.dto';
import { UpdateRealStateDto } from './dto/update-real-state.dto';

@Injectable()
export class RealStateService {
  create(createRealStateDto: CreateRealStateDto) {
    console.log(createRealStateDto);
    return 'This action adds a new realState';
  }

  findAll() {
    return `This action returns all realState`;
  }

  findOne(id: number) {
    return `This action returns a #${id} realState`;
  }

  update(id: number, updateRealStateDto: UpdateRealStateDto) {
    console.log(updateRealStateDto);
    return `This action updates a #${id} realState`;
  }

  remove(id: number) {
    return `This action removes a #${id} realState`;
  }
}
