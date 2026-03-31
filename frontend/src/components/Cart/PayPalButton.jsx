import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "AZq4kU4VNhZ10_46fZXkcCNhuhnr_jWRrZSd3y4i_fX44RJDqv_TByNnazk224ZBUCXk9aDJbRynGyZz",
        currency: "USD",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: { value: amount },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
      />

      {/* sb-47upr048811273@personal.example.com */}
    </PayPalScriptProvider>
  );
};

export default PayPalButton;

