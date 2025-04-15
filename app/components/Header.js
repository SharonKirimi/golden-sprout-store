"use client";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Header() {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="p-6 shadow-md flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Selamlight Logo" className="h-8 w-8" />
        <h1 className="text-2xl font-bold text-gold-700">Selamlight</h1>
      </div>

      {/* Hamburger for mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-3xl focus:outline-none"
      >
        ☰
      </button>

      {/* Links for desktop */}
      <nav className="hidden md:flex space-x-6">
        <a href="/gold-jewelry" className="hover:text-gold-700">Gold Jewellery</a>
        <a href="/books" className="hover:text-gold-700">Books</a>
        <a href="/lifestyle" className="hover:text-gold-700">Gifts</a>
        <a href="/cart" className="hover:text-gold-700">
          🛍 Cart ({cart.length})
        </a>
      </nav>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <nav className="absolute top-20 right-6 bg-white shadow-lg rounded p-4 flex flex-col space-y-4 md:hidden z-50">
          <a href="/gold-jewelry" className="hover:text-gold-700">Gold Jewellery</a>
          <a href="/books" className="hover:text-gold-700">Books</a>
          <a href="/lifestyle" className="hover:text-gold-700">Gifts</a>
          <a href="/cart" className="hover:text-gold-700">
            🛍 Cart ({cart.length})
          </a>
        </nav>
      )}
    </header>
  );
}
