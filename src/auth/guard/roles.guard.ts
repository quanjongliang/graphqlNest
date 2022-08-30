import { AUTH_MESSAGE, ROLE_CONTEXT } from '@/core';
import { UserRepository } from '@/repository';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private userRepository: UserRepository,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>(
      ROLE_CONTEXT,
      context.getHandler(),
    );
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = await this.userRepository.findOne({
      where: {
        username: request.user.username,
      },
    });
    request.user = user;
    if (roles.includes(user.role)) return true;
    throw new HttpException(AUTH_MESSAGE.USER.ROLE, HttpStatus.UNAUTHORIZED);
  }
}
