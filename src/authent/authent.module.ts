import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthentService } from './authent.service';
import { AuthentController } from './authent.controller';
import { UserModule } from '../user/user.module';
import { JwtStrategy } from './jwt.strategy';



@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'my-secret-amal',
      signOptions: { expiresIn: '1h' },
    }),
    UserModule,
  ],
  controllers: [AuthentController],
  providers: [AuthentService, JwtStrategy],
})
export class AuthentModule {}
