import { MapPin, Phone, Mail, Clock } from "lucide-react";

const items = [
  {
    icon: MapPin,
    label: "Ubicación",
    content: "Consultorios Royal Center\nMarbella, Ciudad de Panamá",
  },
  {
    icon: Phone,
    label: "Teléfono",
    content: "(+507) 6433-3779",
    href: "tel:+50764333779",
  },
  {
    icon: Mail,
    label: "Correo Electrónico",
    content: "psi.kyosainieves@gmail.com",
    href: "mailto:psi.kyosainieves@gmail.com",
  },
  {
    icon: Clock,
    label: "Horario de Atención",
    content: "Lunes a Viernes: 8:00 AM – 5:00 PM\nSábados: Con cita previa",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-start gap-4 bg-gray-50 dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800"
        >
          <div className="w-10 h-10 bg-rosa-50 dark:bg-rosa-950 rounded-xl flex items-center justify-center flex-shrink-0">
            <item.icon className="w-5 h-5 text-rosa-600 dark:text-rosa-400" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
              {item.label}
            </h3>
            {item.href ? (
              <a
                href={item.href}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-rosa-600 dark:hover:text-rosa-400 transition"
              >
                {item.content}
              </a>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-pre-line">
                {item.content}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
