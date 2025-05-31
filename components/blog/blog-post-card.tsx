import Link from "next/link";
import Image from "next/image";
import { blogMeta, BlogPostMeta } from "./blog-data";

export function BlogPostCard({ title, summary, date, author, image, slug }: BlogPostMeta) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-background hover:shadow-lg transition-shadow">
      <Link href={`/blog/${slug}`}>
        <Image
          src={image}
          alt={title}
          width={800}
          height={500}
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-3">{summary}</p>
          <div className="text-xs text-muted-foreground">
            {date} • By {author}
          </div>
        </div>
      </Link>
    </div>
  );
}
