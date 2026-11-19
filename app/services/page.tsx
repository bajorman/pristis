import type { Metadata } from "next";
import Image from "next/image";
import PageBody from "../components/PageBody";
import PageHeader from "../components/PageHeader";
import { asset } from "../site";

export const metadata: Metadata = { title: "Services" };

// Each service is a banner image with its name drawn into the image;
// `name` is used as the alt text.
const services = [
  { image: "/images/service-1.png", name: "VC advisory (technical due diligence)" },
  { image: "/images/service-2.png", name: "Mentoring for technology leaders" },
  { image: "/images/service-3.png", name: "Engineering team workshops" },
  { image: "/images/service-4.png", name: "Technical and architectural audits" },
  { image: "/images/service-5.png", name: "Interim / Fractional CTO services" },
  { image: "/images/service-6.png", name: "Startup scale-up support (from MVP to production)" },
];

export default function Services() {
  return (
    <>
      <PageHeader title="Services" current="/services/" />
      <PageBody>
        <ul className="space-y-10 md:w-1/2">
          {services.map((service) => (
            <li key={service.image}>
              <Image
                src={asset(service.image)}
                alt={service.name}
                width={1280}
                height={593}
                className="h-auto w-full"
              />
            </li>
          ))}
        </ul>
      </PageBody>
    </>
  );
}
