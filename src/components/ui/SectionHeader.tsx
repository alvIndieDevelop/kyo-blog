interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  label,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 tracking-widest uppercase">
        {label}
      </span>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
        {title}
      </h2>
      {description && (
        <p
          className={`text-gray-500 dark:text-gray-400 ${centered ? "max-w-lg mx-auto" : "max-w-xl"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
