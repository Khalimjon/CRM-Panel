import { index, prop } from '@typegoose/typegoose';
import { BaseSchema } from './general';

@index({
  name: 1,
})
export class SubjectSchema extends BaseSchema {
  @prop()
  name?: string;

  @prop()
  price?: number;
}
