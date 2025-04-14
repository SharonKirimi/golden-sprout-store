'use client';
import { useEffect } from "react";

export default function PayPalButton({ total }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&currency=EUR";
    script.async = true;
    document.body.appendChild(script);

    setTimeout(() => {
      if (window.paypal) {
        paypal.Buttons({
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: total.toFixed(2),
                },
              }],
            });
          },
          onApprove: function (data, actions) {
            return actions.order.capture().then(function () {
              window.location.href = "/thank-you";
            });
          },
        }).render("#paypal-button-container");
      }
    }, 1000);
  }, [total]);

  return <div id="paypal-button-container" className="mt-8"></div>;
}
