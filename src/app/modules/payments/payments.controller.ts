/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { PaymentService } from './payments.service';

const initPayment = async (req: Request, res: Response, next: NextFunction) => {
  console.log('ami asi');

  const result = await PaymentService.initPayment();
  res.send(result);
};

export const PaymentController = {
  initPayment
};
