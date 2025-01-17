"use client";

import { use } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FlippableCard from "@/components/FlippableCard";
import data from "@/data/vocabulary.json"; // Your vocabulary JSON file
import CategoryNavigator from "@/components/CategoryNavigator";
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

  if (!selectedCategory) {
    return <p className="text-center text-xl text-gray-600">Category not found</p>;
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{selectedCategory.name}</h1>
      <CategoryNavigator data={data} currentCategory={selectedCategory.name} baseURL="/language/vocabulary" />

      

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 justify-items-center">
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
