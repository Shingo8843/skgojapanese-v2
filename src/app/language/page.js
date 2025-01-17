"use client";

import Card from "@/components/Card";
import sections from "@/data/sections.json"; // Import the JSON data
import CategoryNavigator from "@/components/CategoryNavigator";

export default function Language() {
  // Find the "Language" section statically
  const currentSectionIndex = sections.findIndex((section) => section.name === "Language");
  const currentSection = sections[currentSectionIndex];

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">{currentSection.name}</h1>
      <p className="mb-6">{currentSection.description}</p>
      <CategoryNavigator
        data={sections}
        currentCategory={'Language'}
        baseURL=""
      />

      {/* Render Subsections */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 justify-items-center">
      {currentSection.subsections.map((sub) => (
          <Card
            key={sub.name}
            title={sub.name}
            description={sub.description}
            href={sub.href}
            image={sub.image}
            alt={`${sub.name} image`}
          />
        ))}
      </div>

    </main>
  );
}
