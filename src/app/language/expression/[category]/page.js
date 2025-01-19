"use client";

import { use } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ExpressionCard from "@/components/ExpressionCard";
import data from "@/data/expression.json"; // Replace with your categories JSON file path
import CategoryNavigator from "@/components/CategoryNavigator";
export default function CategoryPage({ params: paramsPromise }) {  // Unwrap the `params` promise
  const params = use(paramsPromise);
  const { category } = params; // Get the category from params
  const router = useRouter();

  const categoryIndex = data.findIndex(
    (cat) => cat.name.toLowerCase() === category.toLowerCase().replaceAll("%20", " ").replaceAll("-", " ")
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
    <main className="px-4 md:px-8 lg:px-16 py-8">
      <h1 className="text-3xl font-bold mb-6">{selectedCategory.name}</h1>
      <p className="mb-4 text-gray-700">{selectedCategory.description}</p>
      <CategoryNavigator data={data} currentCategory={selectedCategory.name} baseURL="/language/expression" />


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 justify-items-center">
      {selectedCategory.items.map((item, index) => (
          <ExpressionCard
            key={index}
            title={item.title}
            explanation={item.explanation}
            image={item.image}
            alt={item.alt}
            audioSrc={item.audioSrc}
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

