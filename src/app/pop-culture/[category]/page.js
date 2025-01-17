"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import sections from "@/data/sections.json";
import CategoryNavigator from "@/components/CategoryNavigator";
export default function CategoryPage({ params: paramsPromise }) {
  // Unwrap the `params` promise
  const params = use(paramsPromise);
  const { category } = params; // Get the category from params

  const router = useRouter();

  // Find the Pop Culture section
  const popCultureSection = sections.find((section) => section.name === "Pop Culture");

  // Find the selected category (case-insensitive)
  const selectedCategory = popCultureSection?.categories.find(
    (cat) => cat.name.toLowerCase() === category?.toLowerCase().replace("%20", " ").replace("-", " ")
  );

  // Modal state for slides
  const [selectedSlide, setSelectedSlide] = useState(null);
  useEffect(() => {
    // Redirect only if the category is invalid and the data is loaded
    if (!selectedCategory && category) {
      console.error(`Category "${category}" not found or selectedcategory is null`);
      console.log("Redirecting to Pop Culture page...");
      router.push("/pop-culture");
    }
  }, [selectedCategory, category, router]);

  // Prevent rendering if redirection is in progress
  if (!selectedCategory) {
    return null;
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">{selectedCategory.name}</h1>
      <CategoryNavigator data={popCultureSection.categories} currentCategory={selectedCategory.name} baseURL="/pop-culture" />
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
