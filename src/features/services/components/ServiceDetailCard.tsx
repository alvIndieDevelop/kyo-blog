import { Check } from "lucide-react";
import type { ServiceDetail } from "../data/services-content";

interface ServiceDetailCardProps {
  service: ServiceDetail;
  index: number;
}

export default function ServiceDetailCard({
  service,
  index,
}: ServiceDetailCardProps) {
  const isReversed = index % 2 !== 0;

  return (
    <div
      className={`grid lg:grid-cols-2 gap-10 items-center ${isReversed ? "lg:direction-rtl" : ""}`}
    >
      <div className={isReversed ? "lg:order-2" : ""}>
        <div className="w-12 h-12 bg-rosa-50 dark:bg-rosa-950 rounded-xl flex items-center justify-center mb-5">
          <service.icon className="w-6 h-6 text-rosa-600 dark:text-rosa-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {service.title}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
          {service.longDescription}
        </p>
        <ul className="space-y-3 mb-6">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <div className="w-5 h-5 bg-rosa-50 dark:bg-rosa-950 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-rosa-600 dark:text-rosa-400" />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-gray-400 dark:text-gray-500 italic">
          {service.forWhom}
        </p>
      </div>
      <div
        className={`bg-gradient-to-br from-rosa-50 to-warm-50 dark:from-rosa-950/30 dark:to-warm-950/30 rounded-3xl p-10 flex items-center justify-center min-h-[280px] ${isReversed ? "lg:order-1" : ""}`}
      >
        <service.icon className="w-20 h-20 text-rosa-300 dark:text-rosa-700" />
      </div>
    </div>
  );
}
