"use client";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <main className="px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item, i) => (
              <div key={i} className="flex items-center justify-between border-b pb-4">
                <div>
                  <h2 className="text-xl">{item.name}</h2>
                  <p className="text-gold-700">{item.price}</p>
                </div>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => removeFromCart(i)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <a href="/checkout">
            <button className="mt-6 bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded">
              Proceed to Checkout
            </button>
          </a>
        </>
      )}
    </main>
  );
}
