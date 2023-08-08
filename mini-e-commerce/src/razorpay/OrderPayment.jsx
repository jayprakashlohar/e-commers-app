import React from "react";
import axios from "axios";

const OrderPayment = async (total) => {
  let data = await axios.post(
    "https://pear-naughty-clam.cyclic.app/create-order",
    { total }
  );

  var options = {
    key: "rzp_test_uLBxxaS0xJ2H2b",
    amount: total,
    currency: "INR",
    name: "Apple Hub",
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    order_id: data.id,
    handler: function (response) {
      console.log("payment Id:- ", response.razorpay_payment_id);
      console.log("Order Id:- ", response.razorpay_order_id);
      console.log("Signature:- ", response.razorpay_signature);
    },
    prefill: {
      name: "Apple Hub",
      email: "jaylohar19@gmail.com",
      contact: "9079864332",
    },
    notes: {
      address: "Rajasthan,Rajsamand",
    },
    theme: {
      color: "#3399cc",
    },
  };
  var rzp1 = new window.Razorpay(options);
  rzp1.open();
  // rzp1.on("payment.failed", function (response) {
  //   alert(response.error.code);
  //   alert(response.error.description);
  //   alert(response.error.source);
  //   alert(response.error.step);
  //   alert(response.error.reason);
  //   alert(response.error.metadata.order_id);
  //   alert(response.error.metadata.payment_id);
  // });
  return <div></div>;
};

export default OrderPayment;
