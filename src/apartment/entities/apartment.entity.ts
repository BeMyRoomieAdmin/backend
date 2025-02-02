import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Address } from 'src/address/entities/address.entity';
import { Owner } from 'src/owner/entities/owner.entity';
import { Room } from 'src/room/entities/room.entity';
import { Emissions } from 'src/utils/enums/emissions.enum';
import { Energy } from 'src/utils/enums/energy.enum';
import { Orientation } from 'src/utils/enums/orientation.enum';

@Schema({ timestamps: true })
export class Apartment extends Document {
  @Prop({ required: true })
  rooms: Room[];

  @Prop({ required: true })
  address: Address;

  @Prop({ required: true })
  owner: Owner;

  @Prop({ type: String, required: true, enum: Orientation })
  orientation: string;

  @Prop({ type: String, required: true, enum: Energy })
  energy: string;

  @Prop({ type: String, required: true, enum: Emissions })
  emissions: string;

  @Prop({ required: true })
  bathrooms: number;

  @Prop({ required: true })
  floor: number;

  @Prop({ required: true })
  area: number;

  @Prop({ required: true })
  elevator: boolean;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  images: string[];
}

export const ApartmentSchema = SchemaFactory.createForClass(Apartment);
