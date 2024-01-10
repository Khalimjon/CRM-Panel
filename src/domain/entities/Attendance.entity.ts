import { Types } from 'mongoose';
import { UserRoleEnum } from '../../infrastructure';

export class AttendanceEntity {
  protected _id?: Types.ObjectId;
  protected _groupId?: Types.ObjectId;
  protected _userId?: Types.ObjectId;
  protected _isAttend?: boolean;
  protected _date?: Date;
  protected _updatedAt: Date;
  protected _createdAt: Date;

  setId(v: Types.ObjectId): AttendanceEntity {
    this._id = v;
    return this;
  }

  setGroupId(v: Types.ObjectId): AttendanceEntity {
    this._groupId = v;
    return this;
  }

  setUserId(v: Types.ObjectId): AttendanceEntity {
    this._userId = v;
    return this;
  }

  setIsAttend(isAttend: boolean): AttendanceEntity {
    this._isAttend = isAttend;
    return this;
  }

  setDate(date: Date): AttendanceEntity {
    this._date = date;
    return this;
  }

  setUpdatedAt(v: Date): AttendanceEntity {
    this._updatedAt = v;
    return this;
  }

  setCreatedAt(v: Date): AttendanceEntity {
    this._createdAt = v;
    return this;
  }

  getId() {
    return this._id;
  }

  getGroupId() {
    return this._groupId;
  }

  getUserId() {
    return this._userId;
  }

  getIsAttend() {
    return this._isAttend;
  }

  getDate() {
    return this._date;
  }

  getCratedAt() {
    return this._createdAt;
  }

  getUpdatedAt() {
    return this._updatedAt;
  }
}
