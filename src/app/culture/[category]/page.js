"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import sections from "@/data/sections.json";

export default function CategoryPage({ params: paramsPromise }) {
  // Unwrap the `params` promise
  const params = use(paramsPromise);
  const { category } = params; // Get the category from params

  const router = useRouter();

  // Find the Culture section
  const CultureSection = sections.find((section) => section.name === "Culture");

  // Find the selected category (case-insensitive)
  const selectedCategory = CultureSection?.categories.find(
    (cat) => cat.name.toLowerCase() === category?.toLowerCase().replace("%20", " ")
  );

  // Modal state for slides
  const [selectedSlide, setSelectedSlide] = useState(null);

  // Navigation Handlers
  const currentIndex = sections.findIndex((section) => section.name === "Culture");
  const handleNavigation = (direction) => {
    const nextIndex = (currentIndex + direction + sections.length) % sections.length;
    router.push(sections[nextIndex].href); // Use router.push for navigation
  };

  useEffect(() => {
    // Redirect only if the category is invalid and the data is loaded
    if (!selectedCategory && category) {
      console.error(`Category "${category}" not found or selectedcategory is null`);
      console.log("Redirecting to Culture page...");
      router.push("/culture");
    }
  }, [selectedCategory, category, router]);

  // Prevent rendering if redirection is in progress
  if (!selectedCategory) {
    return null;
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">{selectedCategory.name}</h1>
      <p className="mb-6">Explore items in {selectedCategory.name}</p>

      {/* Render Slides */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 justify-items-center">
      {selectedCategory.items.map((item) => (
          <Card
            key={item.name}
            title={item.name}
            description="Click to view slide"
            image={item.image}
            onClick={() => setSelectedSlide(item)} // Opens modal
          />
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

      {/* Modal */}
      {selectedSlide && (
        <Modal onClose={() => setSelectedSlide(null)}>
          <div className="p-6 h-full w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedSlide.name}</h2>
            <iframe
              src={selectedSlide.embedLink}
              title={selectedSlide.name}
              className="w-full h-full rounded-md"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </Modal>
      )}
    </main>
  );
}
