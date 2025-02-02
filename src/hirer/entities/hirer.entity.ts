import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Type, TypeSchema } from './type.schema';

@Schema({ timestamps: true })
export class Hirer extends Document {
  @Prop({
    type: TypeSchema,
    required: true,
  })
  type: Type;

  @Prop({ required: true })
  phone: number;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const HirerSchema = SchemaFactory.createForClass(Hirer);
