import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Room extends Document {
  _id: Types.ObjectId;

  @Prop({
    required: true,
  })
  bed: boolean;

  @Prop({
    required: true,
  })
  closet: boolean;

  @Prop({
    required: true,
  })
  windows: number;

  @Prop({
    required: true,
  })
  area: number;

  @Prop({
    required: true,
  })
  desk: boolean;

  @Prop({
    required: true,
  })
  bath: boolean;

  @Prop({
    required: true,
  })
  heating: boolean;

  @Prop({
    required: true,
  })
  airConditioning: boolean;

  @Prop({
    required: true,
    default: true,
  })
  free: boolean;

  @Prop({
    required: true,
  })
  price: number;

  @Prop({
    required: true,
    default: 'https://picsum.photos/200/300',
  })
  image: string;
}

export const RoomSchema = SchemaFactory.createForClass(Room);

// Definir índices después de crear el esquema
RoomSchema.index({ free: 1 });
RoomSchema.index({ area: 1 });
RoomSchema.index({ windows: 1 });
RoomSchema.index({ bed: 1, bath: 1, free: 1 });
RoomSchema.index({ closet: 1, desk: 1 });
RoomSchema.index({ heating: 1, airConditioning: 1 });
