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
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class RoomService {
  constructor(
    @InjectModel(Room.name)
    private readonly roomModel: Model<Room>,
    private readonly userService: UserService,
  ) {}

  async create(createRoomDto: CreateRoomDto, user: User) {
    try {
      const existingUser = await this.userService.findOne(user._id.toString());

      const newRoom = new this.roomModel(createRoomDto);

      const createdRoom = await newRoom.save();

      existingUser!.rooms.push(createdRoom._id);

      await existingUser!.save();

      return createdRoom;
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

  findMyRooms(user: User) {
    try {
      const rooms = user.rooms;

      return this.roomModel
        .find({ _id: { $in: rooms } })
        .select('image area price _id');
    } catch (error) {
      console.error('Error finding rooms:', error);
      throw new InternalServerErrorException('Internal server error');
    }
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

  async remove(id: string, user: User) {
    try {
      await this.userService.removeRoom(id, user);

      await this.roomModel.findByIdAndDelete(id);

      return;
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
