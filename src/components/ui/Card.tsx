interface CardProps {
  children: React.ReactNode;
  hoverable?: boolean;
  padding?: string;
  className?: string;
}

export default function Card({
  children,
  hoverable = false,
  padding = "p-8",
  className = "",
}: CardProps) {
  return (
    <div
      className={`bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 ${padding} ${
        hoverable
          ? "hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/20 hover:border-rosa-100 dark:hover:border-rosa-900 transition-all"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
