"use client";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart } = useCart();

  return (
    <header className="p-6 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gold-700">Golden Sprout</h1>
      <nav className="space-x-6">
        <a href="/gold-jewelry" className="hover:text-gold-700">Gold Jewellery</a>
        <a href="/books" className="hover:text-gold-700">Books</a>
        <a href="/lifestyle" className="hover:text-gold-700">Gifts</a>
        <a href="/cart" className="hover:text-gold-700">
          🛍 Cart ({cart.length})
        </a>
      </nav>
    </header>
  );
}
