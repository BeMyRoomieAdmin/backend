import { Transform } from 'class-transformer';
import { IsString, Length, MinLength } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @MinLength(1)
  @Transform(({ value }) => (value as string).toLowerCase().trim())
  country: string;

  @IsString()
  @MinLength(1)
  @Transform(({ value }) => (value as string).toLowerCase().trim())
  comunity: string;

  @IsString()
  @MinLength(1)
  @Transform(({ value }) => (value as string).toLowerCase().trim())
  province: string;

  @IsString()
  @MinLength(1)
  @Transform(({ value }) => (value as string).toLowerCase().trim())
  city: string;

  @IsString()
  @Length(5)
  @Transform(({ value }) => (value as string).toLowerCase().trim())
  postalCode: string;

  @IsString()
  @MinLength(1)
  @Transform(({ value }) => (value as string).toLowerCase().trim())
  street: string;
}
