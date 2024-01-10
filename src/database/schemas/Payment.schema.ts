import { BaseSchema } from './general';
import { prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';
import { MonthsEnum } from '../../infrastructure';

export class PaymentSchema extends BaseSchema {
  @prop()
  amount?: number;

  @prop()
  userId?: Types.ObjectId;

  @prop()
  groupId?: Types.ObjectId;

  @prop()
  paymentTime?: Date;
  @prop()
  month?: MonthsEnum;

  @prop()
  studentFirstName?: string;

  @prop()
  studentLastName?: string;
}
