import { PartialType } from '@nestjs/mapped-types';
import { CreateHirerDto } from './create-hirer.dto';

export class UpdateHirerDto extends PartialType(CreateHirerDto) {}
