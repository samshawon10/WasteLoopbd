
import Logo from "../common/Logo";
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Leaf,
} from "lucide-react";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const platformLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Waste Recycling", href: "#recycling" },
  { label: "ReSale Marketplace", href: "#marketplace" },
  { label: "Green Rewards", href: "#rewards" },
];

const communityLinks = [
  { label: "Eco Businesses", href: "#eco-business" },
  { label: "Our Impact", href: "#impact" },
  { label: "About Us", href: "#about" },
];

const accountLinks = [
  { label: "Create Account", href: "/register" },
  { label: "Sign In", href: "/login" },
];

export default function Footer() {
  return (
    <footer className="bg-[#10251B] text-white">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
             <Logo variant="light" />
            </div>

            <p className="max-w-sm text-sm leading-7 text-gray-400">
              Towards a Cleaner, Smarter and Greener Dhaka.
              WasteLoopBD connects citizens, collectors, recyclers,
              and green businesses to build a sustainable future.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-green-500 hover:bg-green-600 hover:text-white"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-green-500 hover:bg-green-600 hover:text-white"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-green-500 hover:bg-green-600 hover:text-white"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">
              Platform
            </h3>

            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition hover:text-green-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">
              Community
            </h3>

            <ul className="space-y-3">
              {communityLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition hover:text-green-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">
              Account
            </h3>

            <ul className="space-y-3">
              {accountLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition hover:text-green-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="flex flex-col gap-5 border-b border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <MapPin size={18} className="shrink-0 text-green-400" />
            <span>Dhaka, Bangladesh</span>
          </div>

          <a
            href="mailto:hello@wasteloopbd.com"
            className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-green-400"
          >
            <Mail size={18} className="text-green-400" />
            hello@wasteloopbd.com
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 pt-7 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} WasteLoopBD. All rights reserved.
          </p>

          <p className="flex items-center justify-center gap-2 text-xs text-gray-500">
            Made with
            <Leaf size={14} className="text-green-400" />
            for a greener Dhaka
          </p>
        </div>
      </div>
    </footer>
  );
}
