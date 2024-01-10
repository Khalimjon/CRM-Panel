import { getModelForClass, Severity } from '@typegoose/typegoose';
import { AttendanceSchema } from '../schemas';

export const attendanceModel = getModelForClass(AttendanceSchema, {
  schemaOptions: {
    collection: 'attendances',
    minimize: true,
    timestamps: true,
    versionKey: false,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
});
