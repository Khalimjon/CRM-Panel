import { getModelForClass, Severity } from '@typegoose/typegoose';
import { SubjectSchema } from '../schemas';

export const SubjectModel = getModelForClass(SubjectSchema, {
  schemaOptions: {
    collection: 'subjects',
    minimize: true,
    timestamps: true,
    versionKey: false,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
});
