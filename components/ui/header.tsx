"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full text-blue-600 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <Link href="logo" className="text-2xl font-bold text-blue-600">
          MedGency
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li><Link href="/signin" className="hover:text-white">SignIn</Link></li>
          <li><Link href="/signup" className="hover:text-white">SignUp</Link></li>
          
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-1 bg-black" />
          <span className="w-6 h-1 bg-black" />
          <span className="w-6 h-1 bg-black" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white w-full shadow-md">
          <ul className="flex flex-col py-4 space-y-4 text-center text-lg">
            <li><Link href="/signin" onClick={() => setOpen(false)}>SignIn</Link></li>
            <li><Link href="/signup" onClick={() => setOpen(false)}>SignUp</Link></li>
          
          </ul>
        </div>
      )}
    </nav>
  );
}
