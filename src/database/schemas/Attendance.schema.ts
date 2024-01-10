import { BaseSchema } from './general';
import { prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';

export class AttendanceSchema extends BaseSchema {
  @prop()
  isAttend?: boolean;

  @prop()
  groupId?: Types.ObjectId;

  @prop()
  userId?: Types.ObjectId;

  @prop()
  date?: Date;
}
