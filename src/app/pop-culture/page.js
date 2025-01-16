"use client";

import Link from "next/link";
import sections from "@/data/sections.json";
import Card from "@/components/Card";

export default function PopCulturePage() {
  // Find the Pop Culture section
  const popCultureSection = sections.find((section) => section.name === "Pop Culture");

  // Navigation Handlers
  const currentIndex = sections.findIndex((section) => section.name === "Pop Culture");
  const handleNavigation = (direction) => {
    const nextIndex = (currentIndex + direction + sections.length) % sections.length;
    window.location.href = sections[nextIndex].href; // Use window.location.href for cross-page navigation
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">{popCultureSection.name}</h1>
      <p className="mb-6">{popCultureSection.description}</p>

      {/* Render Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 justify-items-center">
      {popCultureSection.categories.map((category) => (
          <Link
            key={category.name}
            href={`/pop-culture/${category.name.toLowerCase()}`}
            passHref
          >
            <Card
              title={category.name}
              description={`Explore items in ${category.name}`}
              image={category.image}
            />
          </Link>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={() => handleNavigation(-1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Previous Section
        </button>
        <button
          onClick={() => handleNavigation(1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Next Section
        </button>
      </div>
    </main>
  );
}
