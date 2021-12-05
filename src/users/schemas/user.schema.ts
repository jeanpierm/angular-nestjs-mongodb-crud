import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ExternalUser } from '../interfaces/external-user.interface';
import { InternalUser } from '../interfaces/internal-user.interface';
import { Gender, UserTypes } from '../enums/user.enums';

export type UserDocument = User & Document;

@Schema()
export class User implements ExternalUser, InternalUser {
  // agnostic props
  @Prop({ required: true })
  type: UserTypes;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, select: false })
  password: string;

  // externalUser props
  @Prop()
  bilingual: boolean;

  @Prop()
  nationality: string;

  @Prop()
  phone: string;

  // internalUser props
  @Prop()
  direction: string;

  @Prop()
  gender: Gender;

  @Prop()
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
