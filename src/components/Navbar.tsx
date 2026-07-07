"use client";

import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto mt-3 flex w-[92%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">

        {/* Logo */}
<Link href="/" className="flex items-center">
  <Image
    src="/logo1.png"
    alt="ReVolt AI Logo"
    width={180}
    height={50}
    priority
    className="h-18 w-45 "
  />
</Link>

        {/* Navigation */}
        <nav className="hidden gap-8 text-white/80 md:flex">
          <Link href="/">Home</Link>
          <Link href="/scan">Scan</Link>
          <Link href="/">AI Insights</Link>
          <Link href="/">Passport</Link>
          <Link href="/">Business</Link>
        </nav>

        {/* Button */}
        <Link href="/scan" className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 font-semibold text-white transition hover:scale-105">
          Get Started
        </Link>

      </div>
    </header>
  );
}