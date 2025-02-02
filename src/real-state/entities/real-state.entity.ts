import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class RealState extends Document {
  @Prop({ required: true })
  companyName: string;

  @Prop({ required: true })
  cif: string;
}

export const RealStateSchema = SchemaFactory.createForClass(RealState);
