import { Controller, Post, Body, Get, Param, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity'; // Import de l'entité User

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Route pour créer un utilisateur
  @Post('register')
  async register(@Body() body: { username: string; password: string; email?: string }): Promise<User> {
    const { username, password, email } = body;

    // Vérifie si l'utilisateur existe déjà
    const existingUser = await this.userService.findByUsername(username);
    if (existingUser) {
      throw new HttpException(
        `L'utilisateur avec le nom ${username} existe déjà.`,
        HttpStatus.CONFLICT,
      );
    }

    // Crée un nouvel utilisateur
    return this.userService.createUser(username, password, email);
  }

  // Route pour récupérer un utilisateur par son nom d'utilisateur
  @Get(':username')
  async getUser(@Param('username') username: string): Promise<User | null> {
    const user = await this.userService.findByUsername(username);

    // Gestion de l'utilisateur introuvable
    if (!user) {
      throw new HttpException(
        `L'utilisateur avec le nom ${username} est introuvable.`,
        HttpStatus.NOT_FOUND,
      );
    }

    return user;
  }

  // Route pour récupérer tous les utilisateurs
  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }
}
