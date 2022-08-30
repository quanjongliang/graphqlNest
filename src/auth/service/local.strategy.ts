import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AUTH_MESSAGE } from '@/core';
import { User } from '@/entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<User> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      // throw new UnauthorizedException();
      throw new HttpException(AUTH_MESSAGE.USER.WRONG, HttpStatus.NOT_FOUND);
    }
    return user;
  }
}
