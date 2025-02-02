import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsIn,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateApartmentDto {
  @IsNotEmpty()
  @IsArray()
  @IsMongoId({ each: true })
  @ArrayMinSize(1)
  rooms: string[];

  @IsNotEmpty()
  @IsMongoId()
  address: string;

  @IsNotEmpty()
  @IsMongoId()
  owner: string;

  @IsNotEmpty()
  @IsIn(['north', 'south', 'east', 'west'])
  orientation: string;

  @IsNotEmpty()
  @IsIn(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
  energy: string;

  @IsNotEmpty()
  @IsIn(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
  emissions: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  bathrooms: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  floor: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  area: number;

  @IsNotEmpty()
  @IsBoolean()
  elevator: boolean;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  images: string[];
}
