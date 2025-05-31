import { LucideIcon } from "lucide-react";

interface ServiceIconProps {
  icon: LucideIcon;
}

export function ServiceIcon({ icon: Icon }: ServiceIconProps) {
  return (
    <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
      <Icon className="h-8 w-8 text-primary" />
    </div>
  );
}
