import { IUser } from '../interfaces/user.interface';

export interface ExternalUser extends IUser {
  bilingual: boolean;

  nationality: string;

  phone: string;
}
