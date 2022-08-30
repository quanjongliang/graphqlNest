import { Module } from '@nestjs/common';
import { UserResolve } from './user.resolver';
import { UserService } from './user.service';

@Module({
  providers: [UserResolve, UserService],
})
export class UserModule {}
