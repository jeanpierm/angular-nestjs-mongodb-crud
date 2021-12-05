import { IsEnum, IsOptional } from 'class-validator';
import { TYPE_VALIDATION_MESSAGE } from './create-user.dto';
import { UserTypes } from '../enums/user.enums';

export class GetUsersQuery {
  @IsOptional()
  @IsEnum(UserTypes, { message: TYPE_VALIDATION_MESSAGE })
  type: UserTypes;
}
