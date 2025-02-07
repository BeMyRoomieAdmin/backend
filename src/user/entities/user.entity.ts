import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ValidRoles } from 'src/utils/enums/validRoles.enum';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop({
    required: true,
    minlength: 8,
    maxlength: 20,
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
    required: false,
  })
  phoneNumber?: string;

  @Prop({
    default: ValidRoles.TENANT,
    enum: ValidRoles,
  })
  role: ValidRoles;

  @Prop({
    default: false,
  })
  isActive: boolean = false;

  @Prop({
    default: false,
  })
  isDeleted: boolean = false;
}

export const UserSchema = SchemaFactory.createForClass(User);

// Definir índices después de crear el esquema
UserSchema.index({ firstName: 1, lastName: 1 });
UserSchema.index({ role: 1 });
