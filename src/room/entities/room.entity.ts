import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Bed } from 'src/utils/enums/bed.enum';
import { Closet } from 'src/utils/enums/closet.enum';

@Schema({ timestamps: true })
export class Room extends Document {
  @Prop({ type: String, required: true, enum: Bed, default: Bed.NONE })
  bed: Bed;

  @Prop({ type: String, required: true, enum: Closet, default: Closet.NONE })
  closet: Closet;

  @Prop({ required: true })
  windows: number;

  @Prop({ required: true })
  area: number;

  @Prop({ required: true })
  desk: boolean;

  @Prop({ required: true })
  bathroom: boolean;

  @Prop({ required: true })
  heating: boolean;

  @Prop({ required: true })
  airConditioning: boolean;

  @Prop({ required: true })
  spare: boolean;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
