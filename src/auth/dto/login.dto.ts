import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { PASSWORD_REGEX } from 'src/utils/regex/password.regex';

export class LoginDto {
  @IsEmail()
  @Transform(({ value }: { value: string }) => value.toLowerCase().trim())
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(PASSWORD_REGEX, {
    message:
      'Password must have an uppercase, a lowercase, and a number character',
  })
  password: string;
}
