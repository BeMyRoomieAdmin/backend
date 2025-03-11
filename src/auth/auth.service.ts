import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/user/entities/user.entity';
import { Model } from 'mongoose';
import { BcryptService } from 'src/shared/services/bcrypt.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly userService: UserService,
    private readonly bcryptService: BcryptService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    await this.userService.create(registerDto);
  }

  async login(loginDto: LoginDto) {
    const user = await this.userModel.findOne({
      email: loginDto.email,
    });

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const validPassword = await this.bcryptService.comparePassword(
      loginDto.password,
      user.password,
    );

    if (!validPassword) throw new UnauthorizedException('Invalid credentials');

    try {
      const token = this.jwtService.sign({ id: user._id });

      return {
        user: {
          _id: user._id,
          firstName: user.firstName,
          email: user.email,
          role: user.role,
        },
        token,
      };
    } catch (error) {
      console.error(error);

      throw new InternalServerErrorException('Error login user');
    }
  }

  async checkToken(user: User) {
    await user.populate('role');

    try {
      const token = this.jwtService.sign({ id: user._id });

      return {
        user: {
          _id: user._id,
          firsName: user.firstName,
          email: user.email,
          role: user.role,
        },
        token,
      };
    } catch (error) {
      console.error(error);

      throw new InternalServerErrorException('Error checking token');
    }
  }
}
