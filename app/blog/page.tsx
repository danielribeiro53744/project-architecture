import { Metadata } from "next";
import { BlogLayout } from "@/components/blog/blog-layout";
import { BlogList } from "@/components/blog/blog-list";

export const metadata: Metadata = {
  title: "Architecture Blog | YourCompanyName",
  description: "Insights, stories, and updates from the world of modern architecture.",
};

export default function BlogPage() {
  return (
    <BlogLayout>
      <BlogList />
    </BlogLayout>
  );
}
