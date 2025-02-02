import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsMobilePhone,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { regexEnum } from 'src/utils/regex.enum';

export class CreateRenterDto {
  @IsString()
  @MinLength(1)
  @Transform(({ value }) => (value as string).toLowerCase().trim())
  name: string;

  @IsEmail()
  @Transform(({ value }) => (value as string).toLowerCase().trim())
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(new RegExp(regexEnum.PASSWORD_PATTERN), {
    message:
      'Password must have an uppercase letter, a lowercase letter, and a number',
  })
  password: string;

  @IsMobilePhone()
  phone: number;

  @IsString()
  @Transform(({ value }) => (value as string).toLowerCase().trim())
  @Matches(new RegExp(regexEnum.DNI_PATTERN))
  dni: string;
}
