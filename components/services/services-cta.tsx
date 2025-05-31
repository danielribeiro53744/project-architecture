import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ServicesCTA() {
  return (
    <div className="text-center mt-20">
      <h3 className="text-2xl font-semibold mb-4">Ready to bring your vision to life?</h3>
      <p className="text-muted-foreground mb-6">
        Let’s discuss your project and see how we can help.
      </p>
      <Link href="/contact">
        <Button size="lg">Get in Touch</Button>
      </Link>
    </div>
  );
}
