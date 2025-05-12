import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { BcryptService } from 'src/shared/services/bcrypt.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly bcryptService: BcryptService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const hashedPassword = await this.bcryptService.encryptPassword(
        createUserDto.password,
      );

      const createdUser = new this.userModel({
        ...createUserDto,
        password: hashedPassword,
      });

      await createdUser.save();

      return createdUser;
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (error.code === 11000) {
        throw new BadRequestException('User already exists');
      } else {
        console.error('Error creating user:', error);
        throw new InternalServerErrorException('Internal server error');
      }
    }
  }

  async createMany(createUserDto: CreateUserDto[]): Promise<User[]> {
    const createdUsers = await this.userModel.insertMany(createUserDto);
    return createdUsers;
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: string): Promise<User | null> {
    return await this.userModel.findById(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async removeAll() {
    await this.userModel.deleteMany({});
    return {
      message: 'All users removed successfully',
    };
  }

  async removeRoom(id: string, user: User) {
    try {
      user.rooms = user.rooms.filter((room) => room.toString() !== id);

      await user.save();

      return user;
    } catch (error) {
      console.error('Error removing room:', error);
      throw new InternalServerErrorException('Internal server error');
    }
  }
}
