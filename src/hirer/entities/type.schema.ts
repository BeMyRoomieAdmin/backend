import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';

@Schema()
export class Type {
  @Prop({
    enum: ['Owner', 'RealState'], // Campo discriminador
    required: true,
  })
  type: 'Owner' | 'RealState'; // Tipo de referencia

  @Prop({
    type: mongoose.Types.ObjectId, // ID de la referencia
    required: true,
    refPath: 'type', // Se indica que el modelo de referencia depende del campo `type`
  })
  id: Types.ObjectId;
}

export const TypeSchema = SchemaFactory.createForClass(Type);
