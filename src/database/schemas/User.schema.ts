import { index, prop } from '@typegoose/typegoose';
import { UserRoleEnum } from '../../infrastructure';
import { BaseSchema } from './general';

@index({ phone: 1 })
@index({ role: 1 })
export class UserSchema extends BaseSchema {
  @prop()
  firstName?: string;

  @prop()
  lastName?: string;

  @prop()
  phone?: string;

  @prop()
  password?: string;

  @prop()
  role?: UserRoleEnum;
}
