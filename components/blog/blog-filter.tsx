interface BlogFilterProps {
  tags: string[];
  onSelect: (tag: string | null) => void;
  selected: string | null;
}

export function BlogFilter({ tags, onSelect, selected }: BlogFilterProps) {
  return (
    <div className="flex gap-3 justify-center mb-8 flex-wrap">
      {["All", ...tags].map((tag) => (
        <button
          key={tag}
          onClick={() => onSelect(tag === "All" ? null : tag)}
          className={`px-4 py-2 rounded-full border ${
            selected === tag ? "bg-primary text-white" : "bg-muted"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
