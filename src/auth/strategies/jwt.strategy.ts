import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, JwtFromRequestFunction, Strategy } from 'passport-jwt';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User.name) private readonly userRepository: Model<User>,
    configService: ConfigService,
  ) {
    const secret: string | undefined = configService.get<string>('JWT_SECRET');
    if (!secret) {
      throw new Error('JWT_SECRET is not defined');
    }

    const jwtExtractor: JwtFromRequestFunction =
      ExtractJwt.fromAuthHeaderAsBearerToken();
    if (typeof jwtExtractor !== 'function') {
      throw new Error('Invalid JWT extractor');
    }

    super({
      secretOrKey: secret,
      jwtFromRequest: jwtExtractor,
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { id } = payload;

    if (id === undefined) throw new UnauthorizedException('Invalid token');

    const user = await this.userRepository.findById(id);

    if (!user) throw new UnauthorizedException('Invalid token');
    if (!user.isActive && !user.activationCode)
      throw new UnauthorizedException('Inactive user');
    if (user.isDeleted) throw new UnauthorizedException('Deleted user');

    return user;
  }
}
