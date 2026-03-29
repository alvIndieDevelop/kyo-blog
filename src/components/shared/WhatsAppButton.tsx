import { MessageCircle } from "lucide-react";
import options from "@/utils/config";

const WHATSAPP_NUMBER = options.WHATSAPP.NUMBER;
const WHATSAPP_MESSAGE = encodeURIComponent(
  options.WHATSAPP.DEFAULT_MESSAGE
);

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-lg shadow-green-600/30 hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-green-600/40 transition-all group"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-semibold hidden sm:inline group-hover:inline">
        WhatsApp
      </span>
    </a>
  );
}
