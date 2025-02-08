import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, MongooseError } from 'mongoose';
import { Tenant } from './entities/tenant.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class TenantService {
  constructor(
    @InjectModel(Tenant.name)
    private readonly tenantModel: Model<Tenant>,
  ) {}

  async create(createUserDto: CreateTenantDto, user: User): Promise<Tenant> {
    if (!user) {
      throw new BadRequestException('User is required to create a Tenant.');
    }

    const tenantData = {
      ...createUserDto,
      userId: user._id,
    };

    const createdTenant = new this.tenantModel(tenantData);

    try {
      return await createdTenant.save();
    } catch (error) {
      const mongoError = error as MongooseError & {
        code?: number;
        keyPattern?: { [key: string]: number };
      };

      if (mongoError.code === 11000 && mongoError.keyPattern?.dni) {
        throw new BadRequestException('DNI already exists.');
      }

      throw error;
    }
  }

  findAll() {
    return `This action returns all tenant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tenant`;
  }

  update(id: number, updateTenantDto: UpdateTenantDto) {
    console.log(updateTenantDto);
    return `This action updates a #${id} tenant`;
  }

  remove(id: number) {
    return `This action removes a #${id} tenant`;
  }
}
