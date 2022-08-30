import * as bcrypt from 'bcrypt';

const SALT_OR_ROUNDS = 10;

export const hashedPassword = (password: string): Promise<string> => {
  return bcrypt.hash(password, SALT_OR_ROUNDS);
};

export const checkIsMatchPassword = (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};
