import TimelineCard from "./TimelineCard";
import { education, diplomados } from "../data/about-content";

export default function EducationSection() {
  return (
    <section>
      <span className="text-xs font-semibold text-rosa-600 dark:text-rosa-400 tracking-widest uppercase">
        Formación
      </span>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-3 mb-8">
        Educación
      </h2>
      <div className="space-y-6">
        {education.map((entry) => (
          <TimelineCard
            key={entry.title}
            title={entry.title}
            subtitle={entry.subtitle}
            detail={entry.detail}
          />
        ))}
      </div>

      {/* Diplomados */}
      <div className="mt-8 bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
          Diplomados
        </h3>
        <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
          {diplomados.map((d) => (
            <li key={d}>• {d}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
