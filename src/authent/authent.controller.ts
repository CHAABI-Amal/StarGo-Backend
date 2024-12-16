import { Controller, Post, Body } from '@nestjs/common';
import { AuthentService } from './authent.service';

@Controller('auth')
export class AuthentController {
  constructor(private readonly authentService: AuthentService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const user = await this.authentService.validateUser(body.username, body.password);
    return this.authentService.login(user);
  }
}
