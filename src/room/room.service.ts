/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomService {
  constructor(
    @InjectModel(Room.name)
    private readonly roomModel: Model<Room>,
  ) {}

  async create(createRoomDto: CreateRoomDto) {
    try {
      const createdRoom = new this.roomModel(createRoomDto);

      return await createdRoom.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException('Room already exists');
      } else {
        console.error('Error creating room:', error);
        throw new InternalServerErrorException('Internal server error');
      }
    }
  }

  async findAll() {
    return await this.roomModel.find();
  }

  async findAllHome() {
    return await this.roomModel.find().select('image free area price _id');
  }

  async findOne(id: string) {
    return await this.roomModel.findById(id);
  }

  update(id: string, updateRoomDto: UpdateRoomDto) {
    try {
      return this.roomModel.findByIdAndUpdate(id, updateRoomDto, {
        new: true,
      });
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException('Room already exists');
      } else {
        console.error('Error updating room:', error);
        throw new InternalServerErrorException('Internal server error');
      }
    }
  }

  remove(id: string) {
    try {
      return this.roomModel.findByIdAndDelete(id);
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException('Room already exists');
      } else {
        console.error('Error deleting room:', error);
        throw new InternalServerErrorException('Internal server error');
      }
    }
  }
}
