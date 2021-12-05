import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ExternalUser } from '../interfaces/external-user.interface';
import { InternalUser } from '../interfaces/internal-user.interface';
import { Gender, UserTypes } from '../enums/user.enums';

export const GENDER_VALIDATION_MESSAGE = "gender must be 'M', 'F' or 'O'";
export const TYPE_VALIDATION_MESSAGE = "type must be 'internal' or 'external'";

export class CreateUserDto implements ExternalUser, InternalUser {
  // agnostic props
  @IsNotEmpty()
  @IsEnum(UserTypes, { message: TYPE_VALIDATION_MESSAGE })
  type: UserTypes;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  // externalUser props
  @IsOptional()
  @IsBoolean()
  bilingual: boolean;

  @IsOptional()
  @IsString()
  nationality: string;

  @IsOptional()
  @IsString()
  phone: string;

  // internalUser props
  @IsOptional()
  @IsString()
  direction: string;

  @IsOptional()
  @IsEnum(Gender, { message: GENDER_VALIDATION_MESSAGE })
  gender: Gender;

  @IsOptional()
  @IsString()
  name: string;
}
