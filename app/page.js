import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section
        className="relative h-[60vh] sm:h-[80vh] flex items-center justify-center bg-cover bg-center text-white px-4"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="bg-black bg-opacity-40 absolute inset-0"></div>
        <div className="z-10 text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            Nature-Inspired Gold Jewelry
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            Ethical. Elegant. Everyday.
          </p>
          <a href="#collections">
            <button className="bg-gold-600 hover:bg-gold-700 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-lg">
              Shop Collections
            </button>
          </a>
        </div>
      </section>

      {/* Featured Categories */}
      <section id="collections" className="py-16 px-4 sm:px-6 bg-gray-50">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Shop by Category
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            { title: "Gold Jewelry", img: "/products/earring.jpg", link: "/gold-jewelry" },
            { title: "Children's Books", img: "/products/book.jpg", link: "/books" },
            { title: "Lifestyle & Gifts", img: "/products/candle.jpg", link: "/lifestyle" },
          ].map(({ title, img, link }) => (
            <div key={title} className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition">
              <img src={img} alt={title} className="w-full h-60 object-cover" />
              <div className="p-4 text-center">
                <h4 className="text-lg sm:text-xl font-semibold mb-2">{title}</h4>
                <a href={link}>
                  <button className="text-gold-700 hover:underline text-sm sm:text-base">
                    Explore
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 px-4 sm:px-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">Best Sellers</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            { name: "Gold Hoop Earrings", price: "€99", img: "/products/earring.jpg" },
            { name: "The Curious Fox", price: "€14", img: "/products/book.jpg" },
            { name: "Lavender Soy Candle", price: "€19", img: "/products/candle.jpg" },
          ].map(({ name, price, img }) => (
            <div key={name} className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition">
              <img src={img} alt={name} className="w-full h-60 object-cover" />
              <div className="p-4 text-center">
                <h4 className="text-base sm:text-lg font-medium">{name}</h4>
                <p className="text-gold-700 font-semibold mt-1">{price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gold-600 text-white text-center py-16 px-4 sm:px-6">
        <h3 className="text-xl sm:text-2xl font-bold mb-4">Get 10% Off Your First Order</h3>
        <p className="mb-6 text-sm sm:text-base">Sign up to receive special offers, new arrivals, and more.</p>
        <form className="max-w-xl mx-auto flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded w-full text-black"
            required
          />
          <button type="submit" className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded">
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 text-center text-sm text-gray-600 px-4">
        <div className="mb-4 flex flex-wrap justify-center gap-4 text-sm">
          <a href="#" className="hover:text-gold-700">Instagram</a>
          <a href="#" className="hover:text-gold-700">Facebook</a>
          <a href="#" className="hover:text-gold-700">Pinterest</a>
          <a href="#" className="hover:text-gold-700">TikTok</a>
        </div>
        &copy; {new Date().getFullYear()} Golden Sprout. All rights reserved.
      </footer>
    </main>
  );
}
