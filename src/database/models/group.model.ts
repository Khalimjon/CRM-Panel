import { getModelForClass, Severity } from '@typegoose/typegoose';
import { GroupSchema } from '../schemas';

export const GroupModel = getModelForClass(GroupSchema, {
  schemaOptions: {
    collection: 'groups',
    minimize: true,
    timestamps: true,
    versionKey: false,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
});
