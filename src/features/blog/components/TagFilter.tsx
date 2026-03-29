interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagSelect: (tag: string) => void;
}

export default function TagFilter({
  tags,
  selectedTags,
  onTagSelect,
}: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagSelect(tag)}
          className={`px-4 py-1.5 text-xs font-medium rounded-full transition ${
            selectedTags.includes(tag)
              ? "bg-rosa-600 text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-rosa-50 dark:hover:bg-rosa-950 hover:text-rosa-600 dark:hover:text-rosa-400"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
