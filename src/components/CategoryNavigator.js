"use client";

import { useRouter } from "next/navigation";

export default function CategoryNavigator({ data, currentCategory, baseURL }) {
  const router = useRouter();

  // Find the current category index
  const currentIndex = data.findIndex(
    (cat) =>
      cat.name
        .toLowerCase()
        .replaceAll("%20", " ")
        .replaceAll("-", " ") === currentCategory.toLowerCase()
  );

  if (currentIndex === -1) {
    return <p className="text-center text-xl text-gray-600">Category not found</p>;
  }

  const handleNavigate = (index) => {
    const categoryName = data[index].name
      .toLowerCase()
      .replaceAll(" & ", "-")
      .replaceAll(" ", "-");
    router.push(`${baseURL}/${categoryName}`);
  };

  const previousCategory = data[(currentIndex - 1 + data.length) % data.length];
  const nextCategory = data[(currentIndex + 1) % data.length];
  const returnCategory = baseURL.split("/").pop();

  return (
    <div className="flex justify-between items-center mb-2 sm:mb-4 lg:mb-8 text-sm sm:text-base lg:text-lg">
      {/* Previous Category Button */}
      <button
        onClick={() => handleNavigate((currentIndex - 1 + data.length) % data.length)}
        className="bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 min-w-[120px] text-center min-h-[60px]"
      >
        {previousCategory.name.replaceAll("-", " ").toUpperCase() || "PREV"}
      </button>

      {/* Back to Categories Button */}
      <button
        onClick={() => router.push(baseURL || "/")}
        className="bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 min-w-[120px] text-center min-h-[60px]"
      >
        {returnCategory.replaceAll("-", " ").toUpperCase() || "HOME"}
      </button>

      {/* Next Category Button */}
      <button
        onClick={() => handleNavigate((currentIndex + 1) % data.length)}
        className="bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 min-w-[120px] text-center min-h-[60px]"
      >
        {nextCategory.name.replaceAll("-", " ").toUpperCase() || "NEXT"}
      </button>
    </div>
  );
}
