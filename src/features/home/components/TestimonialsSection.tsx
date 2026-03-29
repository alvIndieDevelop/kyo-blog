import { Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "../data/home-content";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50/70 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Testimonios"
          title="Lo que dicen mis pacientes"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800"
            >
              <Quote className="w-8 h-8 text-teal-200 dark:text-teal-900 mb-4" />
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-teal-50 dark:bg-teal-950 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-teal-600 dark:text-teal-400">
                    {testimonial.author}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
