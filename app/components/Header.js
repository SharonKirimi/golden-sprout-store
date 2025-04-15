"use client";
import { useCart } from "../context/CartContext";
import Image from "next/image";

export default function Header() {
  const { cart } = useCart();

  return (
    <header className="p-4 shadow-md flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Selamlight Logo" width={40} height={40} />
        <h1 className="text-xl md:text-2xl font-bold text-gold-700">Selamlight</h1>
      </div>

      <nav className="flex flex-col md:flex-row gap-3 md:gap-6 text-center">
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
