import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity'; // TypeORM
import { User as UserSchema, UserSchema as MongooseSchema } from './user.schema'; // Mongoose

@Module({
  imports: [
   // MongooseModule.forFeature([{ name: UserSchema.name, schema: MongooseSchema }]), // Mongoose
    TypeOrmModule.forFeature([User]), // TypeORM
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
