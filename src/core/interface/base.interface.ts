import { Field, Int } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

export class BaseQuery {
  @IsOptional()
  @Field(() => Int)
  limit?: number;
  @IsOptional()
  @Field(() => Int)
  offset?: number;
}

export class BaseQueryResponse<T> {
  data: T[];
  total: number;
}
