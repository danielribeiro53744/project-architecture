import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Project } from "@/types";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  className?: string;
  priority?: boolean;
}

export function ProjectCard({
  project,
  className,
  priority = false,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg",
        className
      )}
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <Badge
            variant="outline"
            className="mb-2 border-white/30 text-white"
          >
            {project.category.charAt(0).toUpperCase() +
              project.category.slice(1)}
          </Badge>
          <h3 className="mb-2 text-xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mb-4 text-sm text-white/80">{project.location}</p>
          <div className="flex items-center text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            View Project
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </Link>
    </div>
  );
}