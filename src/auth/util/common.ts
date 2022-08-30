export const isTokenExpired = (expiredTime: Date): boolean => {
  const timeExpired = new Date(expiredTime);
  const today = new Date();
  return today.getTime() > timeExpired.getTime();
  // if true, token expired
};
