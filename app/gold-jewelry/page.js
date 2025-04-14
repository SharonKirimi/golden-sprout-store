"use client"; // this is required for client-side interactivity
import { useCart } from "../context/CartContext";

export default function GoldJewelryPage() {
  const { addToCart } = useCart();

  const products = [
    { name: "Gold Hoop Earrings", price: "€99", img: "/products/earring.jpg" },
    { name: "Gold Chain Necklace", price: "€129", img: "/products/earring.jpg" },
  ];

  return (
    <main className="px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Gold Jewelry</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div key={p.name} className="bg-white rounded shadow p-4 text-center">
            <img src={p.img} alt={p.name} className="h-48 w-full object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-gold-700 font-bold">{p.price}</p>
            <button
  onClick={() => addToCart(p)}
  className="mt-2 bg-gold-600 hover:bg-gold-700 text-white px-4 py-2 rounded"
>
  Add to Cart
</button>
          </div>
        ))}
      </div>
    </main>
  );
}