import { BaseSchema } from './general';
import { prop } from '@typegoose/typegoose';
import { SubjectPeriodEnum } from '../../infrastructure';
import { SubjectSchema } from './Subject.schema';
import { Types } from 'mongoose';

export class GroupSchema extends BaseSchema {
  @prop()
  title?: string;

  @prop()
  maxVolume?: number;

  @prop({ default: 0 })
  currentStudentsCount?: number;

  @prop()
  period?: SubjectPeriodEnum;

  @prop()
  subjectId?: Types.ObjectId;

  @prop()
  teacherId?: Types.ObjectId;
}
