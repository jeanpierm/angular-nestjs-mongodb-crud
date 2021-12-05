import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User, UserDocument } from '../schemas/user.schema';
import { UserFactory } from './user-factory.service';
import { UserTypes } from '../enums/user.enums';

/**
 * Service layer for the user entity.
 * @author Jeanpier Mendoza
 */
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    private readonly userFactory: UserFactory,
  ) {}

  /**
   * Returns all users from DB.
   * Password cannot be select for security reasons.
   * @param {UserTypes} type The type of user you want to select. If it is falsy/null, it returns all.
   * @return {Promise<User[]>} The list of users found.
   */
  async findAll(type?: UserTypes): Promise<User[]> {
    if (type) {
      return this.userModel.find({ type }).exec();
    }
    return this.userModel.find().exec();
  }

  /**
   * Returns a user by id.
   * Password cannot be select for security reasons.
   * @param {string} id The id of user.
   * @return {Promise<User>} The user found.
   */
  async findById(id: string): Promise<User> {
    await this.checkIsValidId(id);
    return this.userModel.findById(id).exec();
  }

  /**
   * Returns a user by id.
   * Password cannot be select for security reasons.
   * @param {string} id The id of user.
   * @return {Promise<User>} The user found.
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    const { type } = createUserDto;
    const user = this.userFactory.getUser(createUserDto, type);
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  /**
   * Update a user by id.
   * @param {string} id The id of user.
   * @param {UpdateUserDto} updateUserDto The object of user properties to update.
   * @return {Promise<User>} The user updated.
   */
  async updateById(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findById(id);
    const type = updateUserDto.type || user.type;
    updateUserDto = this.userFactory.getUser(updateUserDto, type);
    return this.userModel
      .findByIdAndUpdate(id, updateUserDto, {
        new: true,
      })
      .exec();
  }

  /**
   * Delete a user by id.
   * @param {string} id The id of user.
   */
  async removeById(id: string): Promise<void> {
    await this.checkIsValidId(id);
    await this.userModel.findByIdAndDelete(id).exec();
  }

  /**
   * Delete all users
   */
  async removeAll(): Promise<void> {
    await this.userModel.deleteMany().exec();
  }

  /**
   * Check that the user id is valid.
   * @param {string} id The id of user.
   * @throws {BadRequestException} The id is not valid MOngoDB ObjectId
   */
  async checkIsValidId(id: string): Promise<void> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`${id} is not valid MongoDB ObjectId`);
    }
    await this.checkIfExist(id);
  }

  /**
   * Check that the user exists by id.
   * @param {string} id The id of user.
   * @throws {NotFoundException} The user doen't exist
   */
  async checkIfExist(id: string): Promise<void> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException(`User ${id} doesn't exist`);
    }
  }
}
