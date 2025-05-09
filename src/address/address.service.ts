/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel(Address.name)
    private readonly addressModel: Model<Address>,
  ) {}

  async create(createAddressDto: CreateAddressDto) {
    try {
      const createdAddress = new this.addressModel(createAddressDto);

      return await createdAddress.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException('Address already exists');
      } else {
        console.error('Error creating address:', error);
        throw new InternalServerErrorException('Internal server error');
      }
    }
  }

  async findAll() {
    return await this.addressModel.find();
  }

  async findOne(id: string) {
    return await this.addressModel.findById(id);
  }

  update(id: string, updateAddressDto: UpdateAddressDto) {
    try {
      return this.addressModel.findByIdAndUpdate(id, updateAddressDto, {
        new: true,
      });
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException('Address already exists');
      } else {
        console.error('Error updating address:', error);
        throw new InternalServerErrorException('Internal server error');
      }
    }
  }

  remove(id: string) {
    try {
      return this.addressModel.findByIdAndDelete(id);
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException('Address already exists');
      } else {
        console.error('Error deleting address:', error);
        throw new InternalServerErrorException('Internal server error');
      }
    }
  }
}
