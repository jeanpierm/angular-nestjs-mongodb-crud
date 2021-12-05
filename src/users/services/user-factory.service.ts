import { Factory } from './factory';
import { BadRequestException, Injectable } from '@nestjs/common';
import { IUser } from '../interfaces/user.interface';
import { CreateUserDto } from '../dto/create-user.dto';
import { ExternalUser } from '../interfaces/external-user.interface';
import { InternalUser } from '../interfaces/internal-user.interface';
import { UserTypes } from '../enums/user.enums';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserFactory extends Factory {
  readonly NO_USER_TYPE = 'No user type supported';

  factory(userDto: CreateUserDto | UpdateUserDto, userType: UserTypes): IUser {
    const { type, email, password } = userDto;
    switch (userType) {
      case 'external':
        const { bilingual, nationality, phone } = userDto as ExternalUser;
        return {
          type,
          email,
          password,
          bilingual,
          nationality,
          phone,
        } as ExternalUser;
      case 'internal':
        const { direction, gender, name } = userDto as InternalUser;
        return {
          type,
          email,
          password,
          direction,
          gender,
          name,
        } as InternalUser;
      default:
        throw new BadRequestException(this.NO_USER_TYPE);
    }
  }
}
