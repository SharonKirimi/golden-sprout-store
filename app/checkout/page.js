"use client";
import { useCart } from "../context/CartContext";
import { useEffect } from "react";
import PayPalButton from "../components/PayPalButton";

export default function CheckoutPage() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("€", ""));
    return sum + price;
  }, 0);

  const handleStripeCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cart),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <main className="px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {cart.length === 0 ? (
        <p>
          Your cart is empty.{" "}
          <a href="/" className="text-gold-700 underline">
            Continue Shopping
          </a>
        </p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cart.map((item, i) => (
              <div key={i} className="flex justify-between">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            ))}
            <hr />
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>€{total.toFixed(2)}</span>
            </div>
          </div>

          {/* Stripe Button */}
          <button
            onClick={handleStripeCheckout}
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 w-full md:w-auto"
          >
            Pay with Card (Stripe)
          </button>

          {/* ✅ PayPal Button Component */}
          <PayPalButton total={total} />

          {/* Bank Transfer */}
          <section className="mt-10 bg-gray-50 p-6 rounded">
            <h3 className="text-xl font-bold mb-2">Prefer Bank Transfer?</h3>
            <p className="mb-1">Send the total amount to:</p>
            <p>
              <strong>Bank Name:</strong> Your Bank Name
            </p>
            <p>
              <strong>IBAN:</strong> DE12 3456 7890 1234 5678 90
            </p>
            <p>
              <strong>Reference:</strong> Your Name or Order #
            </p>
            <p className="mt-2 text-sm text-gray-600">
              We’ll process your order once payment is received.
            </p>
          </section>
        </>
      )}
    </main>
  );
}
