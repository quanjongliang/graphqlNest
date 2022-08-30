import { USER_ROLE } from '@/entity';
import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserDto {
  @Field()
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @Field()
  password: string;

  @IsNotEmpty()
  @IsEmail()
  @Field()
  email: string;
}

@InputType()
export class UpdateUserRoleDto {
  @IsNotEmpty()
  @Field()
  username: string;
  @Field(() => USER_ROLE, { defaultValue: USER_ROLE.USER })
  @IsNotEmpty()
  role: USER_ROLE;
}

@InputType()
export class LoginUserDto {
  @Field()
  username: string;
  @Field()
  password: string;
}

@InputType()
export class TokenConfirmUser {
  @Field()
  token: string;
}
