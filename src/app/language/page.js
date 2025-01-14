"use client";

import Card from "@/components/Card";
import sections from "@/data/sections.json"; // Import the JSON data

export default function Language() {
  // Find the "Language" section statically
  const currentSectionIndex = sections.findIndex((section) => section.name === "Language");
  const currentSection = sections[currentSectionIndex];

  // Navigation handlers
  const handleNextSection = () => {
    const nextIndex = (currentSectionIndex + 1) % sections.length;
    window.location.href = sections[nextIndex].href; // Navigate to the next section
  };

  const handlePreviousSection = () => {
    const prevIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
    window.location.href = sections[prevIndex].href; // Navigate to the previous section
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">{currentSection.name}</h1>
      <p className="mb-6">{currentSection.description}</p>

      {/* Render Subsections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={handlePreviousSection}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Previous Section
        </button>
        <button
          onClick={handleNextSection}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Next Section
        </button>
      </div>
    </main>
  );
}
