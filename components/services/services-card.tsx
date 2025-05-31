import { ServiceIcon } from "./service-icon";
import { Service } from "./services-data";

export function ServiceCard({ title, description, icon }: Service) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background hover:bg-muted shadow-sm transition-colors">
      <ServiceIcon icon={icon} />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
