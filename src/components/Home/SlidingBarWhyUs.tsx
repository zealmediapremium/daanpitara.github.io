// src/components/FeaturesTabs.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeaturesSection from "./WhyUs";
import { featuresData } from "./WhyUs";
import { facilitiesData } from "./facilitiesData";
import { servicesData } from "./servicesData";
import SectionHeading from "@/assets/Headings/SectionHeading";

const tabs = [
  { id: "features", label: "Healthcare Features", data: featuresData },
  { id: "facilities", label: "Facilities & Equipment", data: facilitiesData },
  { id: "services", label: "Services & Specialisations", data: servicesData },
];

export default function FeaturesTabs() {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div className="w-full bg-gray-50 py-16">
        <SectionHeading heading="Why People Trust Us" />
      {/* Tabs */}
      <div className="flex justify-center gap-6 relative mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-6 py-2 text-lg font-medium transition-colors ${
              activeTab === tab.id
                ? "text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute left-0 right-0 -bottom-1 h-[3px] bg-blue-600 rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Animated content */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <FeaturesSection
                    features={tab.data}
                    title={tab.label}
                    subtitle={`Explore more about our ${tab.label.toLowerCase()}.`}
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
