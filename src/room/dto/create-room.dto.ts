import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { Bed } from 'src/utils/enums/bed.enum';
import { Closet } from 'src/utils/enums/closet.enum';

export class CreateRoomDto {
  @IsNotEmpty()
  @IsString()
  bed: Bed;

  @IsNotEmpty()
  @IsString()
  closet: Closet;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  windows: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  area: number;

  @IsNotEmpty()
  @IsBoolean()
  desk: boolean;

  @IsNotEmpty()
  @IsBoolean()
  bathroom: boolean;

  @IsNotEmpty()
  @IsBoolean()
  heating: boolean;

  @IsNotEmpty()
  @IsBoolean()
  airConditioning: boolean;

  @IsNotEmpty()
  @IsBoolean()
  spare: boolean;
}
