import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthentModule } from './authent/authent.module';
import { ProtectedController } from './authent/protected.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@localhost:27018/fitness', {
      authSource: 'admin',
    }),
    UserModule,
    AuthentModule,
  ],
  controllers: [ProtectedController], // Ajoutez ceci
})
export class AppModule {}
