import { Injectable } from '@nestjs/common';
import { CreateRenterDto } from './dto/create-renter.dto';
import { UpdateRenterDto } from './dto/update-renter.dto';

@Injectable()
export class RenterService {
  create(createRenterDto: CreateRenterDto) {
    console.log(createRenterDto);
    return 'This action adds a new renter';
  }

  findAll() {
    return `This action returns all renter`;
  }

  findOne(id: number) {
    return `This action returns a #${id} renter`;
  }

  update(id: number, updateRenterDto: UpdateRenterDto) {
    console.log(updateRenterDto);
    return `This action updates a #${id} renter`;
  }

  remove(id: number) {
    return `This action removes a #${id} renter`;
  }
}
