import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Type, TypeSchema } from './type.schema';
import { Apartment } from 'src/apartment/entities/apartment.entity';

@Schema({ timestamps: true })
export class Hirer extends Document {
  @Prop({
    type: TypeSchema,
    required: true,
  })
  type: Type;

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Apartment',
  })
  apartment: Apartment[];

  @Prop({ required: true })
  phone: number;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const HirerSchema = SchemaFactory.createForClass(Hirer);
