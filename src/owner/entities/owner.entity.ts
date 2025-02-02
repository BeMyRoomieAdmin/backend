import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Owner extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  dni: string;
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
