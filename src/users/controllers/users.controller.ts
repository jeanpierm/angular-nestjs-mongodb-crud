import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UsersService } from '../services/users.service';
import { GetUsersQuery } from '../dto/get-users-query.dto';
import { EncryptService } from '../services/encrypt.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly encryptService: EncryptService,
  ) {}

  @Get()
  findAll(@Query() queryParams: GetUsersQuery) {
    const { type } = queryParams;
    return this.usersService.findAll(type);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    createUserDto.password = await this.encryptService.hash(
      createUserDto.password,
    );
    return this.usersService.create(createUserDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateById(id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    await this.usersService.removeById(id);
  }

  @Delete()
  @HttpCode(204)
  async removeAll() {
    await this.usersService.removeAll();
  }
}
