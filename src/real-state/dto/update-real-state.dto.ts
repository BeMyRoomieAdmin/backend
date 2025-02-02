import { PartialType } from '@nestjs/mapped-types';
import { CreateRealStateDto } from './create-real-state.dto';

export class UpdateRealStateDto extends PartialType(CreateRealStateDto) {}
