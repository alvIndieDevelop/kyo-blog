import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";

export default function BookingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (~500px)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      href="/agenda"
      className={`fixed bottom-6 left-6 z-50 flex items-center gap-2 px-5 py-3 bg-rosa-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-rosa-600/25 hover:bg-rosa-700 hover:shadow-xl hover:shadow-rosa-600/30 transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
      aria-label="Agendar sesión"
    >
      <CalendarDays className="w-4 h-4" />
      <span className="hidden sm:inline">Agendar sesión</span>
    </Link>
  );
}
