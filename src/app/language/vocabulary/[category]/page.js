"use client";

import { use } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FlippableCard from "@/components/FlippableCard";
import data from "@/data/vocabulary.json"; // Your vocabulary JSON file

export default function CategoryPage({ params: paramsPromise }) {
  // Unwrap the `params` promise
  const params = use(paramsPromise);
  const { category } = params; // Get the category from params
  const router = useRouter();

  const categoryIndex = data.findIndex(
    (cat) => cat.name.toLowerCase() === category.toLowerCase()
  );
  const selectedCategory = data[categoryIndex];

  const [resetFlag, setResetFlag] = useState(false);

  // Trigger reset by toggling the reset flag
  const resetCards = () => {
    setResetFlag(true);
    setTimeout(() => setResetFlag(false), 0); // Reset the flag immediately after triggering
  };

  // Navigate to the next category
  const handleNextCategory = () => {
    const nextIndex = (categoryIndex + 1) % data.length; // Loop back to the first category
    router.push(`/language/vocabulary/${data[nextIndex].name.toLowerCase()}`);
  };

  // Navigate to the previous category
  const handlePreviousCategory = () => {
    const prevIndex = (categoryIndex - 1 + data.length) % data.length; // Loop back to the last category
    router.push(`/language/vocabulary/${data[prevIndex].name.toLowerCase()}`);
  };

  if (!selectedCategory) {
    return <p className="text-center text-xl text-gray-600">Category not found</p>;
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{selectedCategory.name}</h1>

      <div className="flex justify-between items-center mb-6">
        {/* Previous Category Button */}
        <button
          onClick={handlePreviousCategory}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Previous Category
        </button>

        {/* Back to Categories Button (Centered) */}
        <button
          onClick={() => router.push("/language/vocabulary")}
          className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300"
        >
          Back to Categories
        </button>

        {/* Next Category Button */}
        <button
          onClick={handleNextCategory}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Next Category
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {selectedCategory.items.map((item, index) => (
          <FlippableCard
            key={index}
            frontImage={item.img1}
            backText={item.name}
            alt={item.name}
            isReset={resetFlag}
          />
        ))}
      </div>
      
      <button
        onClick={resetCards}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Reset Cards
      </button>
    </main>
  );
}
