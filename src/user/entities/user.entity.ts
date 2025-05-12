import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { ValidRoles } from 'src/utils/enums/validRoles.enum';

@Schema({
  timestamps: true,
})
export class User extends Document {
  _id: Types.ObjectId;

  @Prop({
    required: true,
  })
  password: string;

  @Prop({
    unique: true,
    required: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  firstName: string;

  @Prop({
    required: true,
  })
  lastName: string;

  @Prop({
    required: false,
  })
  secondLastName?: string;

  @Prop({
    unique: true,
    required: false,
  })
  phoneNumber?: string;

  @Prop({
    default: ValidRoles.TENANT,
    enum: ValidRoles,
  })
  role: ValidRoles;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
    default: [],
  })
  rooms: Types.ObjectId[];

  @Prop({
    default: true,
  })
  isActive: boolean = false;

  @Prop()
  activationCode?: string;

  @Prop({
    default: false,
  })
  isDeleted: boolean = false;
}

export const UserSchema = SchemaFactory.createForClass(User);

// Definir índices después de crear el esquema
UserSchema.index({ firstName: 1, lastName: 1 });
UserSchema.index({ role: 1 });
