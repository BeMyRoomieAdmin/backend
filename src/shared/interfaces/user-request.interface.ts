import { Request } from 'express';
import { User } from '../../user/entities/user.entity';

export interface UserRequest extends Request {
  user: User;
}
