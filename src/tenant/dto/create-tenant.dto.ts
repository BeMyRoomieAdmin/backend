import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { IsDni } from 'src/utils/decorators/is-dni.decorator';

export class CreateTenantDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }: { value: string }) => value.toLowerCase().trim())
  @IsDni()
  readonly dni: string;
}
