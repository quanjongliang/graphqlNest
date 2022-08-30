import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/entity';

import { Module } from '@nestjs/common';
import { UserRepository } from './user';

const ENTITY_LIST = [User];

const REPOSITORY_LIST = [UserRepository];

@Module({
  imports: [TypeOrmModule.forFeature([...ENTITY_LIST])],
  providers: [...REPOSITORY_LIST],
  exports: [TypeOrmModule, ...REPOSITORY_LIST],
})
export class RepositoryModule {}
