import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { GetUserArgs } from './dto/args/get-user.args';
import { CreateUserInput } from './dto/input/create-user.input';
import { User } from './models/user';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: randomUUID(),
      email: 'quan@mail.com',
      age: 10,
    },
    {
      id: randomUUID(),
      email: 'quan2@mail.com',
      age: 10,
    },
    {
      id: randomUUID(),
      email: 'quan3@mail.com',
      age: 10,
    },
    {
      id: randomUUID(),
      email: 'quan4@mail.com',
      age: 10,
    },
  ];

  public createUser(createUserData: CreateUserInput): User {
    const { age, email } = createUserData;
    const user = new User(email, age);
    this.users.push(user);
    return user;
  }

  public getUser(getUserArgs: GetUserArgs): User {
    const { id } = getUserArgs;
    return this.users.find((user) => user.id === id);
  }

  public getUsers(): User[] {
    return this.users;
  }
}
