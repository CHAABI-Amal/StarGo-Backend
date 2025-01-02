import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity'; // Import de l'entité User

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, // Injecte le repository TypeORM
  ) {}

  // Créer un utilisateur
  async createUser(username: string, password: string, email?: string): Promise<User> {
    // Crée un nouvel utilisateur avec le repository
    const newUser = this.userRepository.create({ username, password, email });
    return this.userRepository.save(newUser); // Sauvegarde l'utilisateur dans la base
  }

  // Rechercher un utilisateur par son nom d'utilisateur
  async findByUsername(username: string): Promise<User | null> {
    // Recherche un utilisateur avec une condition where
    return this.userRepository.findOne({ where: { username } });
  }

  // Lister tous les utilisateurs
  async findAll(): Promise<User[]> {
    // Retourne tous les utilisateurs
    return this.userRepository.find();
  }
}
