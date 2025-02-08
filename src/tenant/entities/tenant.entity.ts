import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Tenant extends Document {
  @Prop({
    required: true,
    unique: true,
  })
  dni: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;
}

export const TenantSchema = SchemaFactory.createForClass(Tenant);

TenantSchema.index({ userId: 1 });
