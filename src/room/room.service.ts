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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
    return await this.roomModel.find().select('image free area price -_id');
  }

  findOne(id: number) {
    return `This action returns a #${id} room`;
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    console.log(updateRoomDto);

    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
