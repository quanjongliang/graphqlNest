import { User } from '@/entity';

export interface SubmitUserPayload {
  rawNewUser: User;
  expiredTime: Date;
}
export interface ResetPasswordPayload {
  username: string;
  password: string;
  expiredTime: Date;
}
