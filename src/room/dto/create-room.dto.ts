import { IsBoolean, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateRoomDto {
  @IsNotEmpty()
  @IsBoolean()
  bed: boolean;

  @IsNotEmpty()
  @IsBoolean()
  closet: boolean;

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
  bath: boolean;

  @IsNotEmpty()
  @IsBoolean()
  heating: boolean;

  @IsNotEmpty()
  @IsBoolean()
  airConditioning: boolean;
}
