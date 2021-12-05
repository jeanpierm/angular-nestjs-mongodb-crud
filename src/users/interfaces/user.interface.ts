import { UserTypes } from '../enums/user.enums';

export interface IUser {
  type: UserTypes;

  email: string;

  password: string;
}
