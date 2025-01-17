"use client";

import { useRouter } from "next/navigation";

export default function CategoryNavigator({ data, currentCategory, baseURL }) {
  const router = useRouter();

  // Find the current category index
  const currentIndex = data.findIndex(
    (cat) => cat.name.toLowerCase() === currentCategory.toLowerCase().replace("%20", " ").replace("-", " ")
  );

  if (currentIndex === -1) {
    return <p className="text-center text-xl text-gray-600">Category not found</p>;
  }

  const handleNavigate = (index) => {
    const categoryName = data[index].name.toLowerCase().replace(" & ", "-").replace(" ", "-");
    router.push(`${baseURL}/${categoryName}`);
  };

  return (
    <div className="flex justify-between items-center mb-6">
      {/* Previous Category Button */}
      <button
        onClick={() => handleNavigate((currentIndex - 1 + data.length) % data.length)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Previous Category
      </button>

      {/* Back to Categories Button */}
      <button
        onClick={() => router.push(baseURL || "/")}
        className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300"
      >
        Back to Categories
      </button>

      {/* Next Category Button */}
      <button
        onClick={() => handleNavigate((currentIndex + 1) % data.length)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Next Category
      </button>
    </div>
  );
}
