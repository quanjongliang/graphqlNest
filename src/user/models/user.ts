import { Field, Int, ObjectType } from '@nestjs/graphql';
import { randomUUID } from 'crypto';

@ObjectType()
export class User {
  @Field()
  id: string;
  @Field()
  email: string;
  @Field(() => Int)
  age: number;
  @Field({ nullable: true })
  isChecked?: boolean;
  constructor(email: string, age: number, isChecked?: boolean) {
    this.id = randomUUID();
    this.email = email;
    this.age = age;
    this.isChecked = isChecked || false;
  }
}
