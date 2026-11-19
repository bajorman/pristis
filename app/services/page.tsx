import type { Metadata } from "next";
import Image from "next/image";
import PageBody from "../components/PageBody";
import PageHeader from "../components/PageHeader";
import { asset } from "../site";

export const metadata: Metadata = { title: "Services" };

// Each service is a banner image with its name drawn into the image;
// `name` is used as the alt text.
const services = [
  { image: "/images/service-1.jpg", name: "VC advisory (technical due diligence)" },
  { image: "/images/service-2.jpg", name: "Mentoring for technology leaders" },
  { image: "/images/service-3.jpg", name: "Engineering team workshops" },
  { image: "/images/service-4.jpg", name: "Technical and architectural audits" },
  { image: "/images/service-5.jpg", name: "Interim / Fractional CTO services" },
  { image: "/images/service-6.jpg", name: "Startup scale-up support (from MVP to production)" },
];

export default function Services() {
  return (
    <>
      <PageHeader title="Services" current="/services/" />
      <PageBody>
        <ul className="space-y-10 md:w-1/2">
          {services.map((service, index) => (
            <li key={service.image}>
              <Image
                src={asset(service.image)}
                alt={service.name}
                width={1280}
                height={593}
                sizes="(min-width: 768px) 50vw, 100vw"
                loading={index < 2 ? "eager" : "lazy"}
                className="h-auto w-full"
              />
            </li>
          ))}
        </ul>
      </PageBody>
    </>
  );
}
