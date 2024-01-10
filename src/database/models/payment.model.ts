import { getModelForClass, Severity } from '@typegoose/typegoose';
import { PaymentSchema } from '../schemas';

export const PaymentModel = getModelForClass(PaymentSchema, {
  schemaOptions: {
    collection: 'payments',
    minimize: true,
    timestamps: true,
    versionKey: false,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
});
