import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";
import options from "@/utils/config";

const WHATSAPP_NUMBER = options.WHATSAPP.NUMBER;
const WHATSAPP_MESSAGE = encodeURIComponent(
  options.WHATSAPP.DEFAULT_MESSAGE
);

export default function Footer() {
  return (
    <footer className="bg-stone-900 dark:bg-stone-950 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-rosa-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">KN</span>
              </div>
              <div>
                <span className="font-semibold text-white text-sm">
                  Kyo-Sai Nieves
                </span>
                <span className="block text-xs text-stone-500">
                  Psicóloga Clínica
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mt-4">
              Acompañamiento emocional y psicológico personalizado. El don de
              fluir hacia una vida plena. 🌿
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/psi.kyosainieves/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-stone-800 hover:bg-rosa-600 rounded-full flex items-center justify-center transition"
              >
                <Instagram className="w-4 h-4 text-stone-300" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 bg-stone-800 hover:bg-[#25D366] rounded-full flex items-center justify-center transition"
              >
                <MessageCircle className="w-4 h-4 text-stone-300" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">
              Navegación
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-rosa-400 transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-rosa-400 transition">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/sobre-mi" className="hover:text-rosa-400 transition">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-rosa-400 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/recursos"
                  className="hover:text-rosa-400 transition"
                >
                  Recursos
                </Link>
              </li>
              <li>
                <Link
                  href="/agenda"
                  className="hover:text-rosa-400 transition"
                >
                  Agendar cita
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:psi.kyosainieves@gmail.com"
                  className="hover:text-rosa-400 transition"
                >
                  psi.kyosainieves@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+50764333779"
                  className="hover:text-rosa-400 transition"
                >
                  (+507) 6433-3779
                </a>
              </li>
              <li>
                Royal Center, Marbella
                <br />
                Ciudad de Panamá
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs text-stone-600">
          © {new Date().getFullYear()} Kyo-Sai Nieves. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
