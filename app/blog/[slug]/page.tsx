// app/blog/[slug]/page.tsx

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(postsDir);

  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ''),
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const filePath = path.join(process.cwd(), 'content/blog', `${params.slug}.mdx`);
  const file = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(file);

  return {
    title: data.title,
    description: data.summary,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'content/blog', `${params.slug}.mdx`);
  const file = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(file);

  return (
    <article className="prose mx-auto py-16">
      <h1>{data.title}</h1>
      <p className="text-muted-foreground">{data.date} — {data.author}</p>
      <MDXRemote source={content} />
    </article>
  );
}
