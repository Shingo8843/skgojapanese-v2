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

  // Find the Culture section
  const CultureSection = sections.find((section) => section.name === "Culture");

  // Find the selected category (case-insensitive)
  const selectedCategory = CultureSection?.categories.find(
    (cat) => cat.name.toLowerCase() === category?.toLowerCase().replaceAll("%20", " ").replaceAll("-", " ")  
  );

  // Modal state for slides
  const [selectedSlide, setSelectedSlide] = useState(null);


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
    <main className="px-4 md:px-8 lg:px-16 py-8">
      <h1 className="text-3xl font-bold mb-6">{selectedCategory.name}</h1>
      <p className="mb-6">Explore items in {selectedCategory.name}</p>
      <CategoryNavigator data={CultureSection.categories} currentCategory={selectedCategory.name} baseURL="/culture" />
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
          <div className="p-0 h-full w-full">
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
