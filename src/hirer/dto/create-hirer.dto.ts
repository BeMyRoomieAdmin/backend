import {
  IsArray,
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Type } from '../entities/type.schema';
import { Transform } from 'class-transformer';
import { regexEnum } from 'src/utils/regex.enum';

export class CreateHirerDto {
  @IsNotEmpty()
  @IsMongoId()
  type: Type;

  @IsNotEmpty()
  @IsArray()
  @IsMongoId({ each: true })
  apartment: string[];

  @IsNotEmpty()
  @IsPhoneNumber()
  phone: number;

  @IsNotEmpty()
  @IsEmail()
  @Transform(({ value }) => (value as string).toLowerCase().trim())
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(new RegExp(regexEnum.PASSWORD_PATTERN), {
    message:
      'Password must have an uppercase letter, a lowercase letter, and a number',
  })
  password: string;
}
