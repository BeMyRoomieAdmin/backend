import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, Length } from 'class-validator';
import { IsDni } from 'src/utils/decorators/is-dni.decorator';

export class CreateOwnerDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => (value as string).toLowerCase().trim())
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(9, 9)
  @IsDni()
  @Transform(({ value }) => (value as string).toLowerCase().trim())
  dni: string;
}
