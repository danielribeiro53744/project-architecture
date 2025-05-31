import { blogMeta } from "./blog-data";
import { BlogPostCard } from "./blog-post-card";

export function BlogList() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogMeta.map((post) => (
        <BlogPostCard key={post.title} {...post} />
      ))}
    </div>
  );
}
