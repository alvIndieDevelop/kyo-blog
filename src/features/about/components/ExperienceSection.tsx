import TimelineCard from "./TimelineCard";
import { experience } from "../data/about-content";

export default function ExperienceSection() {
  return (
    <section>
      <span className="text-xs font-semibold text-rosa-600 dark:text-rosa-400 tracking-widest uppercase">
        Trayectoria
      </span>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-3 mb-8">
        Experiencia Profesional
      </h2>
      <div className="space-y-6">
        {experience.map((entry) => (
          <TimelineCard
            key={entry.title}
            title={entry.title}
            subtitle={entry.subtitle}
            detail={entry.detail}
            bullets={entry.bullets}
          />
        ))}
      </div>
    </section>
  );
}
