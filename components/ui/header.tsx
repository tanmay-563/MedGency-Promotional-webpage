"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="MedGency Logo"
            width={140}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden gap-8 text-lg md:flex">
          <li>
            <Link href="/signin" className="hover:text-white">
              SignIn
            </Link>
          </li>
          <li>
            <Link href="/signup" className="hover:text-white">
              SignUp
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="flex flex-col gap-1 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="h-1 w-6 bg-black" />
          <span className="h-1 w-6 bg-black" />
          <span className="h-1 w-6 bg-black" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col space-y-4 py-4 text-center text-lg">
            <li>
              <Link href="/signin" onClick={() => setOpen(false)}>
                SignIn
              </Link>
            </li>
            <li>
              <Link href="/signup" onClick={() => setOpen(false)}>
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
