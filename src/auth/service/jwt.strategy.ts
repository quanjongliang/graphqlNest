import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JWT_CONFIG } from '@/core';
import { PayloadTokenUser, User } from '@/entity';
import { UserRepository } from '@/repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private userRepository: UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_CONFIG.SECRET,
    });
  }

  async validate(payload: PayloadTokenUser): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: { username: payload.username, isDeleted: false },
    });
  }
}
