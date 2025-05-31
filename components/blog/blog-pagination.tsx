interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function BlogPagination({ currentPage, totalPages }: PaginationProps) {
  return (
    <div className="flex justify-center mt-10 gap-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={`px-4 py-2 rounded-lg ${i + 1 === currentPage ? "bg-primary text-white" : "bg-muted"}`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
