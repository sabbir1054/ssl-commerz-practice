/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { PaymentService } from './payments.service';
import sendResponse from '../../../shared/response';
import httpStatus from 'http-status';

const initPayment = async (req: Request, res: Response, next: NextFunction) => {
  console.log('ami asi');

  const result = await PaymentService.initPayment(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Payment init successfully',
    data: result
  });
};

export const PaymentController = {
  initPayment
};
