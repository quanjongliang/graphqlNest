import { AUTH_MESSAGE } from '@/core';
import { User } from '@/entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  async checkExistUser(id: string): Promise<User> {
    const user = await this.findOne({ where: { id } });
    if (!user) throw new NotFoundException(AUTH_MESSAGE.USER.NOT_FOUND);
    return user;
  }
}
