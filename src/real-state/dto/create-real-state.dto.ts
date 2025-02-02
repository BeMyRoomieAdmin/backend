import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { regexEnum } from 'src/utils/regex.enum';

export class CreateRealStateDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => (value as string).toLowerCase().trim())
  companyName: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => (value as string).toLowerCase().trim())
  @Matches(new RegExp(regexEnum.DNI_PATTERN))
  cif: string;
}
