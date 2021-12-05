import { IUser } from '../interfaces/user.interface';
import { Gender } from '../enums/user.enums';

export interface InternalUser extends IUser {
  name: string;

  direction: string;

  gender: Gender;
}
