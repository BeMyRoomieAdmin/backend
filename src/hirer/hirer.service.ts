import { Injectable } from '@nestjs/common';
import { CreateHirerDto } from './dto/create-hirer.dto';
import { UpdateHirerDto } from './dto/update-hirer.dto';

@Injectable()
export class HirerService {
  create(createHirerDto: CreateHirerDto) {
    console.log(createHirerDto);
    return 'This action adds a new hirer';
  }

  findAll() {
    return `This action returns all hirer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hirer`;
  }

  update(id: number, updateHirerDto: UpdateHirerDto) {
    console.log(updateHirerDto);
    return `This action updates a #${id} hirer`;
  }

  remove(id: number) {
    return `This action removes a #${id} hirer`;
  }
}
