import express from 'express';
import { PaymentRoutes } from '../modules/payments/payments.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/payment',
    routes: PaymentRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
