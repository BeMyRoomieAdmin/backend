import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Address } from 'src/address/entities/address.entity';

@Schema({ timestamps: true })
export class Renter extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  phone: number;

  @Prop({ required: true })
  dni: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
    required: true,
  })
  address: Address;
}

export const RenterSchema = SchemaFactory.createForClass(Renter);
