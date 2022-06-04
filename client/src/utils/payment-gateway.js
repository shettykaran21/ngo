const displayRazorpay = async ({ amount }) => {
  console.log(amount);
  const data = await fetch('http://localhost:8080/payment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount }),
  }).then((t) => t.json());

  console.log(data);

  const options = {
    key: process.env.RAZORPAY_KEY_ID,
    currency: data.currency,
    amount: data.amount,
    name: 'Donate',
    description: 'Wallet Transaction',
    order_id: data.id,

    handler: (res) => {
      alert('PAYMENT ID ::' + res.razorpay_payment_id);
      alert('ORDER ID :: ' + res.razorpay_order_id);
    },
    prefill: {
      name: 'Karan Shetty',
      email: 'shettykaran@gmail.com',
      contact: '9999999999',
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

export default displayRazorpay;
