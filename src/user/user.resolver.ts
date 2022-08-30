import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { GetUserArgs } from './dto/args/get-user.args';
import { CreateUserInput } from './dto/input/create-user.input';
import { User } from './models/user';
import { UserService } from './user.service';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

enum PUB_SUB_ENUM {
  ADD_USER = 'ADD_USER',
}

@Resolver(() => User)
export class UserResolve {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { name: 'user', nullable: true })
  getUser(@Args() getUserArgs: GetUserArgs): User {
    return this.userService.getUser(getUserArgs);
  }

  @Query(() => [User], { name: 'users', nullable: true })
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Mutation(() => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput): User {
    const newUser = this.userService.createUser(createUserData);
    pubSub.publish(PUB_SUB_ENUM.ADD_USER, {
      userAdded: newUser,
    });
    return newUser;
  }

  @Subscription(() => User)
  userAdded() {
    return pubSub.asyncIterator(PUB_SUB_ENUM.ADD_USER);
  }

  @Subscription(() => User, {
    name: PUB_SUB_ENUM.ADD_USER,
  })
  subcribeToUserAdded() {
    return pubSub.asyncIterator(PUB_SUB_ENUM.ADD_USER);
  }
}
