import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { ImageGallery } from "@/components/projects/image-gallery";
import { Badge } from "@/components/ui/badge";


export function generateStaticParams() {
  const projects = getAllProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}
interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({
  params,
}: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found | ARCH STUDIO",
    };
  }

  return {
    title: `${project.title} | ARCH STUDIO`,
    description: project.shortDescription,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <Badge className="mb-6" variant="outline">
        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
      </Badge>
      
      <SectionHeading
        title={project.title}
        subtitle={project.shortDescription}
        className="mb-8"
      />

      <ImageGallery images={project.images} alt={project.title} />

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold mb-4">About This Project</h3>
          <p className="text-muted-foreground whitespace-pre-line">
            {project.description}
          </p>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Project Details</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Year</p>
              <p className="font-medium">{project.year}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Client</p>
              <p className="font-medium">{project.client}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium">{project.location}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Architect</p>
              <p className="font-medium">{project.architect}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Size</p>
              <p className="font-medium">{project.size}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

