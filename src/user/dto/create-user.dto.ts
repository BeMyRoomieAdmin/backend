import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  readonly password: string;

  @IsNotEmpty()
  @IsEmail()
  @Transform(({ value }: { value: string }) => value.toLowerCase().trim())
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }: { value: string }) => value.toLowerCase().trim())
  readonly firstName: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }: { value: string }) => value.toLowerCase().trim())
  readonly lastName: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }: { value: string }) => value.toLowerCase().trim())
  readonly secondLastName?: string;

  @IsOptional()
  @IsString()
  readonly phoneNumber?: string;
}
