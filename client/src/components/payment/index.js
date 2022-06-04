import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import displayRazorpay from '../../utils/payment-gateway';
import FormInput from '../post-form/form-input';

const Payment = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: { amount: 10 },

      onSubmit: async (values) => {
        displayRazorpay(values);
      },

      validationSchema: Yup.object({
        amount: Yup.string().required('Required'),
      }),
    });

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript('https://checkout.razorpay.com/v1/checkout.js');
  });

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Amount"
        type="number"
        name="amount"
        autoComplete="off"
        variant="outlined"
        value={values.amount}
        onChange={handleChange}
        onBlur={handleBlur}
        hasError={touched.amount && errors.amount}
        errorMsg={errors.amount && errors.amount}
      />
      <Button type="submit">Donate</Button>
    </form>
  );
};

export default Payment;
