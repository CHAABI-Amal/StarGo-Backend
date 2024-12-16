import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'my-secret-amal', // Assurez-vous que cela correspond à la clé dans JwtModule
    });
  }

  async validate(payload: { username: string; sub: string }) {
    return { userId: payload.sub, username: payload.username };
  }
}
