// import SectionHeading from "@/assets/Headings/SectionHeading";
import type { JSX } from "react";

// src/data/featuresData.tsx

import {
  CalendarCheckIcon,
  ClipboardTextIcon,
  ClockIcon,
  StethoscopeIcon,
  // FileMedicalIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";

export interface FeatureItem {
  icon: JSX.Element;
  heading: string;
  description: string;
}

export const featuresData: FeatureItem[] = [
  {
    icon: <CalendarCheckIcon size={40} weight="fill" className="text-blue-600" />,
    heading: "Easy appointment",
    description:
      "Schedule your appointments quickly with our simple and efficient booking system.",
  },
  {
    icon: <ClipboardTextIcon size={40} weight="fill" className="text-green-600" />,
    heading: "Personalized plans",
    description:
      "Receive tailored care plans designed to meet your unique health needs and goals.",
  },
  {
    icon: <ClockIcon size={40} weight="fill" className="text-purple-600" />,
    heading: "24/7 consultations",
    description:
      "Access expert medical advice anytime through secure and reliable virtual visits.",
  },
  {
    icon: <StethoscopeIcon size={40} weight="fill" className="text-pink-600" />,
    heading: "Medical technology",
    description:
      "Experience modern healthcare with innovative tools and state-of-the-art equipment.",
  },
  {
    icon: <StethoscopeIcon size={40} weight="fill" className="text-yellow-600" />,
    heading: "Patient records",
    description:
      "Stay organized with secure, easy access to your medical records whenever needed.",
  },
  {
    icon: <UsersThreeIcon size={40} weight="fill" className="text-teal-600" />,
    heading: "Care network",
    description:
      "Connect with top specialists and facilities to ensure complete healthcare coverage.",
  },
];




// src/components/FeaturesSection.tsx

// interface FeatureItem {
//   icon: JSX.Element;
//   heading: string;
//   description: string;
// }

interface FeaturesSectionProps {
  features: FeatureItem[];
  title?: string;
  subtitle?: string;

}
export default function FeaturesSection({
  features,
  title = "Our Healthcare Features",
  subtitle = "Explore the tools and services that make your healthcare experience simple, personalized, and accessible anytime.",
}: FeaturesSectionProps) {
  return (
    <section className="px-8 py-8  bg-gray-50">
      {/* Title and subtitle */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">{title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
          >
            <div className="mb-4 p-3 bg-blue-50 rounded-full">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.heading}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
