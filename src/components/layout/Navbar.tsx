import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Acerca de" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">KN</span>
          </div>
          <div>
            <span className="font-semibold text-gray-900 dark:text-white text-sm">
              Kyo-Sai Nieves
            </span>
            <span className="block text-[11px] text-teal-600 dark:text-teal-400 font-medium tracking-wide">
              Psicóloga Clínica
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${
                router.pathname === link.href
                  ? "text-teal-600 dark:text-teal-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`text-sm font-medium px-5 py-2 rounded-full transition ${
              router.pathname === "/contact"
                ? "bg-teal-600 text-white"
                : "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950 hover:bg-teal-100 dark:hover:bg-teal-900"
            }`}
          >
            Contacto
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400"
            aria-label="Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-medium py-2 transition ${
                router.pathname === link.href
                  ? "text-teal-600 dark:text-teal-400"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-medium text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950 px-4 py-2.5 rounded-full text-center"
          >
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
}
