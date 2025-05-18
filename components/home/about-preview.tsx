import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Our Approach to Architecture
            </h2>
            <p className="text-muted-foreground mb-6">
              At ARCH STUDIO, we believe that great architecture goes beyond
              aesthetics. Our designs are rooted in a deep understanding of the
              human experience, environmental responsibility, and technical
              innovation.
            </p>
            <p className="text-muted-foreground mb-6">
              With each project, we seek to create spaces that respond to their
              context, fulfill functional requirements, and evoke emotional
              connections. From initial concept to final construction, our
              collaborative approach ensures that every detail contributes to a
              cohesive and meaningful whole.
            </p>
            <Button asChild className="mt-2">
              <Link href="/about" className="flex items-center">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative aspect-square order-1 md:order-2">
            <Image
              src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Architecture Team Working"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}