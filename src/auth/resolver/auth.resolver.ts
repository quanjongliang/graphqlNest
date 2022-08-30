import { BaseQueryResponse } from '@/core';
import { User } from '@/entity';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../decorator';
import { GqlCurrentUser } from '../decorator/gql-user.decorator';
import {
  CreateUserDto,
  LoginUserInput,
  QueryUserDto,
  TokenConfirmUser,
} from '../dto';
import { GqlAuthGuard, LocalAuthGuard } from '../guard';
import { AuthService } from '../service';

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(GqlAuthGuard)
  @Query((returns) => [User], { nullable: true })
  allUsers(@GqlCurrentUser() currentUser: User): Promise<User[]> {
    return this.authService.getAllUsers();
  }

  @Mutation(() => String)
  async createUser(
    @Args('createUserDto') createUserDto: CreateUserDto,
  ): Promise<string> {
    return this.authService.createNewUser(createUserDto);
  }

  @Mutation(() => String)
  async login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
  ): Promise<string> {
    return this.authService.loginUser(loginUserInput);
  }

  @Mutation(() => String)
  async submitSignUpUser(@Args('tokenConfirm') tokenConfirm: TokenConfirmUser) {
    const { token } = tokenConfirm;
    return this.authService.submitCreateNewUser(token);
  }
}
