import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Address } from 'src/address/entities/address.entity';
import { Room } from 'src/room/entities/room.entity';

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

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Room',
  })
  rooms?: Room[];
}

export const RenterSchema = SchemaFactory.createForClass(Renter);
