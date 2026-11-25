
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "../common/Logo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Recycling", href: "#recycling" },
  { label: "Marketplace", href: "#marketplace" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-green-700"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/login"
            className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-green-700"
          >
            Login
          </a>
          <a
            href="/register"
            className="flex items-center gap-2 rounded-full bg-green-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-900"
          >
            Get Started <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-gray-700 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-green-100 bg-white px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-gray-700"
              >
                {link.label}
              </a>
            ))}

            <div className="flex gap-3 border-t border-gray-100 pt-4">
              <a href="/login" className="flex-1 rounded-full border border-green-800 py-3 text-center text-sm font-semibold text-green-800">
                Login
              </a>
              <a href="/register" className="flex-1 rounded-full bg-green-800 py-3 text-center text-sm font-semibold text-white">
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
