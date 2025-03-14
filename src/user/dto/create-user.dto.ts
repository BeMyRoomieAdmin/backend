import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { PASSWORD_REGEX } from 'src/utils/regex/password.regex';

export class CreateUserDto {
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(PASSWORD_REGEX, {
    message:
      'Password must have an uppercase, a lowercase, and a number character',
  })
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
