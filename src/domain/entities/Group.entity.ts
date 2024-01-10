import { PipelineStage, set, Types } from 'mongoose';
import { SubjectPeriodEnum } from '../../infrastructure';
import { GroupModel, GroupSchema } from '../../database';
import { SubjectEntity } from './Subject.entity';

export class GroupEntity {
  protected _id?: Types.ObjectId;
  protected _title?: string;
  protected _maxVolume?: number;
  protected _currentStudentsCount?: number;
  protected _subjectId?: Types.ObjectId;
  protected _period?: SubjectPeriodEnum;
  protected _teacherId?: Types.ObjectId;
  protected _updatedAt?: Date;
  protected _createdAt?: Date;

  setId(v: Types.ObjectId): GroupEntity {
    this._id = v;
    return this;
  }

  setTitle(title: string): GroupEntity {
    this._title = title;
    return this;
  }

  settMaxVolume(maxVolume: number): GroupEntity {
    this._maxVolume = maxVolume;
    return this;
  }

  setCurrentStudentsCount(currentStudentsCount: number): GroupEntity {
    this._currentStudentsCount = currentStudentsCount;
    return this;
  }

  setSubjectId(v: Types.ObjectId): GroupEntity {
    this._subjectId = v;
    return this;
  }

  setTeacher(v: Types.ObjectId): GroupEntity {
    this._teacherId = v;
    return this;
  }

  setPeriod(v: SubjectPeriodEnum): GroupEntity {
    this._period = v;
    return this;
  }

  setUpdatedAt(v: Date): GroupEntity {
    this._updatedAt = v;
    return this;
  }

  setCreatedAt(v: Date): GroupEntity {
    this._createdAt = v;
    return this;
  }

  getId() {
    return this._id;
  }

  getTitle() {
    return this._title;
  }

  getMaxVolume() {
    return this._maxVolume;
  }

  getCurrentStudentsCount() {
    return this._currentStudentsCount;
  }

  getSubjectId() {
    return this._subjectId;
  }

  getTeacherId() {
    return this._teacherId;
  }

  get getPeriod() {
    return this._period;
  }

  getCratedAt() {
    return this._createdAt;
  }

  getUpdatedAt() {
    return this._updatedAt;
  }
  toEntity(v: GroupSchema) {
    return v
      ? this.setTitle(v.title)
          .setPeriod(v.period)
          .settMaxVolume(v.maxVolume)
          .setCurrentStudentsCount(v.currentStudentsCount)
          .setSubjectId(v.subjectId)
          .setTeacher(v.teacherId)
      : null;
  }

  toSchema(): GroupSchema {
    return this
      ? {
          _id: this.getId(),
          title: this.getTitle(),
          period: this.getPeriod,
          teacherId: this.getTeacherId(),
          maxVolume: this.getMaxVolume(),
          currentStudentsCount: this.getCurrentStudentsCount(),
          subjectId: this.getSubjectId(),
          createdAt: this.getCratedAt(),
          updatedAt: this.getUpdatedAt(),
        }
      : null;
  }

  async create(): Promise<GroupEntity> {
    const newGroup = await GroupModel.create(this.toSchema());
    return this.toEntity(newGroup);
  }

  async syncById() {
    const group = await GroupModel.findOne({ _id: this.getId() });
    return this.toEntity(group);
  }

  async update(): Promise<GroupEntity> {
    const schema: GroupSchema = {};
    if (this.getTitle()) schema.title = this.getTitle();
    const updated = await GroupModel.findByIdAndUpdate({ _id: this.getId() }, { $set: schema }, { new: true });
    return this.toEntity(updated);
  }

  async delete() {
    const deleted = await GroupModel.findByIdAndDelete(this.getId());
    return this.toEntity(deleted);
  }
}
