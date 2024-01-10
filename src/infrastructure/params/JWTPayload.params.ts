import { UserRoleEnum } from '../enum';

export type JWTPayload = {
  userId: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: UserRoleEnum;
};
