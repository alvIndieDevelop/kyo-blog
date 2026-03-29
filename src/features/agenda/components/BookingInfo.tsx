import { Clock, MapPin, Monitor, CreditCard } from "lucide-react";

const bookingSteps = [
  {
    icon: Clock,
    title: "Duración",
    description: "Las sesiones tienen una duración de 45-50 minutos.",
  },
  {
    icon: MapPin,
    title: "Modalidad presencial",
    description: "Consultorios Royal Center, Marbella, Ciudad de Panamá.",
  },
  {
    icon: Monitor,
    title: "Modalidad online",
    description: "Sesiones por videollamada desde cualquier lugar.",
  },
  {
    icon: CreditCard,
    title: "Pago",
    description: "Transferencia, Yappy o efectivo. Consulta por seguro.",
  },
];

export default function BookingInfo() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {bookingSteps.map((step) => (
        <div
          key={step.title}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
        >
          <div className="w-10 h-10 bg-rosa-50 dark:bg-rosa-950 rounded-xl flex items-center justify-center mb-4">
            <step.icon className="w-5 h-5 text-rosa-600 dark:text-rosa-400" />
          </div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
            {step.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
