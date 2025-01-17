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
  const previousCategory = data[(currentIndex - 1 + data.length) % data.length];
  const nextCategory = data[(currentIndex + 1) % data.length];
  const returnCategory = baseURL.split("/").pop();
  return (
    <div className="flex justify-between items-center mb-2 sm:mb-4 lg:mb-8 text-sm sm:text-base lg:text-lg">
      {/* Previous Category Button */}
      <button
        onClick={() => handleNavigate((currentIndex - 1 + data.length) % data.length)}
        className=" bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 px-2 py-1 sm:px-4 sm:py-2 lg:px-8 lg:py-4 "
      >
        {previousCategory.name || "Previous"}
      </button>

      {/* Back to Categories Button */}
      <button
        onClick={() => router.push(baseURL || "/")}
        className=" bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300 px-3 py-1 sm:px-6 sm:py-2 lg:px-12 lg:py-4 "
      >
        { returnCategory || "Home" }
      </button>

      {/* Next Category Button */}
      <button
        onClick={() => handleNavigate((currentIndex + 1) % data.length)}
        className=" bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 px-2 py-1 sm:px-4 sm:py-2 lg:px-8 lg:py-4 "
      >
        {nextCategory.name || "Next"}
      </button>
    </div>
  );
}
