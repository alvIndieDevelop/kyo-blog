import { serviceDetails } from "../data/services-content";
import ServiceDetailCard from "./ServiceDetailCard";

export default function ServicesList() {
  return (
    <div className="space-y-20">
      {serviceDetails.map((service, index) => (
        <ServiceDetailCard
          key={service.title}
          service={service}
          index={index}
        />
      ))}
    </div>
  );
}
