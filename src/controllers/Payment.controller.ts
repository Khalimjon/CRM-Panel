import { Request, Response } from 'express';
import { PaymentEntity } from '../domain';

class PaymentController {
  async create(req: Request, res: Response) {
    try {
      const params = req.body;
      const payment = await new PaymentEntity()
        .setAmount(params.amount)
        .setGroupId(params.groupId)
        .setUserId(params.userId)
        .create();
    } catch (error) {
      console.log(error);
    }
  }
}
