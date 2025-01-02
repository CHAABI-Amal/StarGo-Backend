import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthentModule } from './authent/authent.module';
import { ProtectedController } from './authent/protected.controller';
import { User } from './user/user.entity'; // Import de l'entité User

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://root:example@localhost:27018/fitness', // URL de connexion à MongoDB
      useUnifiedTopology: true,
      synchronize: true, // Active la synchronisation des entités
      entities: [User], // Liste des entités gérées par TypeORM
      extra: {
        authSource: 'admin', // Ajout de l'authSource pour l'authentification
      },
    }),
    UserModule, // Module utilisateur
    AuthentModule, // Module d'authentification
  ],
  controllers: [ProtectedController], // Contrôleurs
})
export class AppModule {}
