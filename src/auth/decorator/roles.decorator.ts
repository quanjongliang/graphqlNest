import { ROLE_CONTEXT } from '@/core';
import { USER_ROLE } from '@/entity';
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: USER_ROLE[]) =>
  SetMetadata(ROLE_CONTEXT, roles);
