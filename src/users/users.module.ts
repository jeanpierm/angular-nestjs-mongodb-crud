import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserFactory } from './services/user-factory.service';
import { User, UserSchema } from './schemas/user.schema';
import { EncryptService } from './services/encrypt.service';

@Module({
  controllers: [UsersController],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersService, UserFactory, EncryptService],
})
export class UsersModule {}
