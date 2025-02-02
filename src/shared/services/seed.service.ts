import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Owner } from 'src/owner/entities/owner.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Owner.name)
    private readonly ownerModel: Model<Owner>,
  ) {}

  async seedDatabase() {
    // Se eliminan todos los documentos existentes
    await this.ownerModel.deleteMany({});

    // Se insertan datos ficticios
    const owners = [
      { companyName: 'Compañía de Jero', dni: '15424102A' },
      { companyName: 'Compañía de Mavi', dni: '29007524Q' },
    ];

    await this.ownerModel.insertMany(owners);

    console.log('Propietarios insertados');
  }
}
