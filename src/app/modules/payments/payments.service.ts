import axios from 'axios';
import httpStatus from 'http-status';
import config from '../../../config';
import ApiError from '../../../errors/apiError';

const initPayment = async () => {
  try {
    const data = {
      store_id: config.ssl.storeId,
      store_passwd: config.ssl.storePass,
      total_amount: 100,
      currency: 'BDT',
      tran_id: 'REF123', // use unique tran_id for each api call
      success_url: 'http://localhost:3030/success',
      fail_url: 'http://localhost:3030/fail',
      cancel_url: 'http://localhost:3030/cancel',
      ipn_url: 'http://localhost:3030/ipn',
      shipping_method: 'Courier',
      product_name: 'Computer.',
      product_category: 'Electronic',
      product_profile: 'general',
      cus_name: 'Customer Name',
      cus_email: 'customer@example.com',
      cus_add1: 'Dhaka',
      cus_add2: 'Dhaka',
      cus_city: 'Dhaka',
      cus_state: 'Dhaka',
      cus_postcode: '1000',
      cus_country: 'Bangladesh',
      cus_phone: '01711111111',
      cus_fax: '01711111111',
      ship_name: 'Customer Name',
      ship_add1: 'Dhaka',
      ship_add2: 'Dhaka',
      ship_city: 'Dhaka',
      ship_state: 'Dhaka',
      ship_postcode: 1000,
      ship_country: 'Bangladesh'
    };

    const response = await axios({
      method: 'POST',
      url: config.ssl.sslPaymentUrl,
      data: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    console.log(response);
    return response.data;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Payment Error');
  }
};

export const PaymentService = {
  initPayment
};
