import { BaseQuery } from '@/core';
import { USER_ROLE } from '@/entity';
import { ArgsType, Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@ArgsType()
export class QueryUserDto extends BaseQuery {
  @Field({ nullable: true })
  @IsOptional()
  role?: USER_ROLE;
  @IsOptional()
  @Field({ nullable: true })
  username?: string;
}
