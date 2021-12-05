import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

const HOST = process.env.MONGO_HOST || 'localhost';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${HOST}/prueba-gizlo`, {
      useNewUrlParser: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
