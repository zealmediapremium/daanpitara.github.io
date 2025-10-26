"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeaturesSection from "./WhyUs";
import { featuresData } from "./WhyUs";
import { facilitiesData } from "./facilitiesData";
import { servicesData } from "./servicesData";
import SectionHeading from "@/assets/Headings/sectionHeading";

const tabs = [
  { id: "features", label: "Healthcare Features", data: featuresData },
  { id: "facilities", label: "Facilities & Equipment", data: facilitiesData },
  { id: "services", label: "Services & Specialisations", data: servicesData },
];

export default function FeaturesTabs() {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div className="w-full py-10">
      <SectionHeading heading="Why People Trust Us" />

      {/* Tabs */}
      <div className="relative mb-10">
        {/* Mobile: horizontal scroll | Desktop: centered row */}
        <div
          className="
            flex gap-4 sm:gap-6 
            justify-start sm:justify-center 
            px-4 sm:px-0
            overflow-x-auto sm:overflow-x-visible
            overflow-y-hidden
            scrollbar-hide
            border-b border-gray-200
            pb-2
          "
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative flex-shrink-0 px-5 sm:px-6 py-2 
                text-sm sm:text-base md:text-lg font-medium transition-colors
                ${
                  activeTab === tab.id
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-800"
                }
              `}
            >
              {tab.label}

              {/* Animated underline for active tab */}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute left-0 right-0 bottom-0 h-[3px] bg-blue-600 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
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
