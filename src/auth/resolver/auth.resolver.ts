import { BaseQueryResponse } from '@/core';
import { User } from '@/entity';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { QueryUserDto } from '../dto';
import { AuthService } from '../service';

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query((returns) => [User])
  allUsers(): Promise<User[]> {
    return this.authService.getAllUsers();
  }
}
