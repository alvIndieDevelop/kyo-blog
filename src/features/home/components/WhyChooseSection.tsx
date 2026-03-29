import SectionHeader from "@/components/ui/SectionHeader";
import { whyChooseMe } from "../data/home-content";

export default function WhyChooseSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Mi enfoque"
          title="¿Por qué elegirme?"
          description="Mi compromiso es brindarte un acompañamiento genuino y profesional en cada paso de tu proceso."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {whyChooseMe.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-14 h-14 bg-teal-50 dark:bg-teal-950 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
