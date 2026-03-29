interface TimelineCardProps {
  title: string;
  subtitle: string;
  detail?: string;
  bullets?: string[];
}

export default function TimelineCard({
  title,
  subtitle,
  detail,
  bullets,
}: TimelineCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
        {title}
      </h3>
      <p className="text-xs text-rosa-600 dark:text-rosa-400 font-medium mb-2">
        {subtitle}
      </p>
      {detail && (
        <p className="text-sm text-gray-500 dark:text-gray-400">{detail}</p>
      )}
      {bullets && (
        <ul className="mt-2 space-y-1">
          {bullets.map((b, i) => (
            <li
              key={i}
              className="text-sm text-gray-500 dark:text-gray-400 flex items-start gap-2"
            >
              <span className="text-rosa-500 mt-0.5">•</span>
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
