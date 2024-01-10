import { Types } from 'mongoose';
import { MonthsEnum, UserRoleEnum } from '../../infrastructure';
import { PaymentModel, PaymentSchema, UserModel } from '../../database';
import * as path from 'path';

export class PaymentEntity {
  protected _id?: Types.ObjectId;
  protected _groupId?: Types.ObjectId;
  protected _userId?: Types.ObjectId;
  protected _studentFirstName?: string;
  protected _studentLastName?: string;
  protected _month?: MonthsEnum;
  protected _amount?: number;
  protected _paymentTime?: Date;
  protected _updatedAt?: Date;
  protected _createdAt?: Date;

  setId(v: Types.ObjectId): PaymentEntity {
    this._id = v;
    return this;
  }

  setGroupId(v: Types.ObjectId): PaymentEntity {
    this._groupId = v;
    return this;
  }

  setUserId(v: Types.ObjectId): PaymentEntity {
    this._userId = v;
    return this;
  }

  setStudentFirstName(v: string): PaymentEntity {
    this._studentFirstName = v;
    return this;
  }

  setStudentLastName(v: string): PaymentEntity {
    this._studentLastName = v;
    return this;
  }

  setMonth(v: MonthsEnum): PaymentEntity {
    this._month = v;
    return this;
  }

  setAmount(amount: number): PaymentEntity {
    this._amount = amount;
    return this;
  }

  setPaymentTime(paymentTime: Date): PaymentEntity {
    this._paymentTime = paymentTime;
    return this;
  }

  setUpdatedAt(v: Date): PaymentEntity {
    this._updatedAt = v;
    return this;
  }

  setCreatedAt(v: Date): PaymentEntity {
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

  getAmount() {
    return this._amount;
  }

  getPaymentTime() {
    return this._paymentTime;
  }

  getCratedAt() {
    return this._createdAt;
  }

  getUpdatedAt() {
    return this._updatedAt;
  }

  getStudentFirstName() {
    return this._studentFirstName;
  }

  getStudentLastName() {
    return this._studentLastName;
  }

  getMonth() {
    return this._month;
  }

  toEntity(v: PaymentSchema): PaymentEntity {
    return v
      ? this.setId(v._id)
          .setAmount(v.amount)
          .setPaymentTime(v.paymentTime)
          .setUserId(v.userId)
          .setCreatedAt(v.createdAt)
          .setUpdatedAt(v.updatedAt)
          .setGroupId(v.groupId)
          .setMonth(v.month)
          .setStudentFirstName(v.studentFirstName)
          .setStudentLastName(v.studentLastName)
      : null;
  }

  toSchema(): PaymentSchema {
    return this
      ? {
          _id: this.getId(),
          groupId: this.getGroupId(),
          userId: this.getUserId(),
          amount: this.getAmount(),
          paymentTime: this.getPaymentTime(),
          createdAt: this.getCratedAt(),
          updatedAt: this.getUpdatedAt(),
          studentLastName: this.getStudentLastName(),
          studentFirstName: this.getStudentFirstName(),
          month: this.getMonth(),
        }
      : null;
  }

  async create(): Promise<PaymentEntity> {
    const payment = await PaymentModel.create(this.toSchema());
    return this.toEntity(payment);
  }

  async findById() {
    const payment = await PaymentModel.findOne({ _id: this.getId() });
    return this.toEntity(payment);
  }

  async update() {
    const schema: PaymentSchema = {};
    if (this.getAmount()) schema.amount = this.getAmount();
    const updated = await PaymentModel.findByIdAndUpdate({ _id: this.getId() }, { $set: schema }, { new: true });
    return this.toEntity(updated);
  }
}
