import { Field, ObjectType } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import { Column, Entity } from 'typeorm';
import { BaseColumn } from '../base';

export enum USER_ROLE {
  ADMIN = 'ADMIN',
  MOD = 'MOD',
  USER = 'USER',
}

export interface PayloadTokenUser {
  id: string;
  username: string;
  role: USER_ROLE;
  email?: string;
}

export enum USER_RELATION {
  POSTS = 'posts',
  ACCOUNTS = 'accounts',
  AUDITS = 'audits',
}

export type UserWithOutPassword = Omit<User, 'password'>;

export const USER_TABLE_NAME = 'user';

@ObjectType({
  isAbstract: true,
})
@Entity(USER_TABLE_NAME)
export class User extends BaseColumn {
  @Column({ unique: true })
  @Field({ nullable: true })
  username: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  email: string;

  @Column()
  @Field({ nullable: true })
  @Exclude()
  password: string;

  @Column({ enum: USER_ROLE, default: USER_ROLE.USER })
  @Field({ nullable: true })
  role: USER_ROLE;

  @Column({ default: false })
  @Field({ defaultValue: false, nullable: true })
  confirmedEmail: boolean;

  @Column({ nullable: true, default: 1 })
  @Field({ nullable: true })
  avatar: number;
}
