import { set, Types } from 'mongoose';
import { SubjectModel, SubjectSchema } from '../../database';

export class SubjectEntity {
  protected _id?: Types.ObjectId;
  protected _name?: string;
  protected _updatedAt: Date;
  protected _createdAt: Date;

  setId(v: Types.ObjectId): SubjectEntity {
    this._id = v;
    return this;
  }

  setName(name: string): SubjectEntity {
    this._name = name;
    return this;
  }

  setUpdatedAt(v: Date): SubjectEntity {
    this._updatedAt = v;
    return this;
  }

  setCreatedAt(v: Date): SubjectEntity {
    this._createdAt = v;
    return this;
  }

  getId() {
    return this._id;
  }

  getName() {
    return this._name;
  }

  getCreatedAt() {
    return this._createdAt;
  }

  getUpdatedAt() {
    return this._updatedAt;
  }
  toEntity(v: SubjectSchema) {
    return v ? this.setId(v._id).setName(v.name).setCreatedAt(v.createdAt).setUpdatedAt(v.updatedAt) : null;
  }

  toSchema(): SubjectSchema {
    return this
      ? {
          _id: this.getId(),
          name: this.getName(),
          updatedAt: this.getUpdatedAt(),
          createdAt: this.getCreatedAt(),
        }
      : null;
  }

  async create(): Promise<SubjectEntity> {
    const subject = await SubjectModel.create(this.toSchema());
    return this.toEntity(subject);
  }

  async syncById(): Promise<SubjectEntity> {
    const subject = await SubjectModel.findOne({ _id: this.getId() });
    return this.toEntity(subject);
  }

  async update(): Promise<SubjectEntity> {
    const schema: SubjectSchema = {};
    if (this.getName()) schema.name = this.getName();
    const updated = await SubjectModel.findOneAndUpdate({ _id: this.getId() }, { $set: schema }, { new: true });
    return this.toEntity(updated);
  }

  async delete(): Promise<SubjectEntity> {
    const deleted = await SubjectModel.findByIdAndDelete(this.getId());
    return this.toEntity(deleted);
  }
}
