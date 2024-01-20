import express from 'express';
import { PaymentController } from './payments.controller';

const router = express.Router();

router.post('/', PaymentController.initPayment);

export const PaymentRoutes = router;
