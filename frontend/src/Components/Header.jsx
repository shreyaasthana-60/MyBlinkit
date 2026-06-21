import React from "react";

export default function Header() {
  return (
    <div className="shadow-md bg-yellow-400">
      <ul className="flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <li>
          <img
            src="https://cdn.grofers.com/app/images/logo/blinkit-logo.png"
            alt="Blinkit"
            className="w-24"
          />
        </li>

        {/* Location */}
        <li className="font-medium">
          My Location
        </li>

        {/* Search */}
        <li className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </li>

        {/* Login Button */}
        <li>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            Login
          </button>
        </li>

        {/* Cart Button */}
        <li>
          <button className="bg-black text-white px-4 py-2 rounded-md">
            My Cart
          </button>
        </li>

        {/* Navigation */}
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="/about">About</a>
        </li>

        <li>
          <a href="/contact">Contact</a>
        </li>

      </ul>
    </div>
  );
}