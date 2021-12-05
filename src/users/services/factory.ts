import { CreateUserDto } from '../dto/create-user.dto';
import { IUser } from '../interfaces/user.interface';
import { UserTypes } from '../enums/user.enums';
import { UpdateUserDto } from '../dto/update-user.dto';

export abstract class Factory {
  abstract factory(
    userDto: CreateUserDto | UpdateUserDto,
    userType: UserTypes,
  ): IUser;

  getUser(userDto: CreateUserDto | UpdateUserDto, userType: UserTypes): IUser {
    const user = this.factory(userDto, userType);
    return user;
  }
}
