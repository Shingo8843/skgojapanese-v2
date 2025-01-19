"use client";

import Link from "next/link";
import sections from "@/data/sections.json";
import Card from "@/components/Card";
import CategoryNavigator from "@/components/CategoryNavigator";
import SearchBox from "@/components/SearchBox";

export default function PopCulturePage() {
  const popCultureSection = sections.find(
    (section) => section.name === "Pop Culture"
  );

  // Flatten all items from categories for search
  const allSlides = popCultureSection.categories.flatMap((category) =>
    category.items.map((item) => ({
      name: item.name,
      embedLink: item.embedLink,
      image: item.image,
    }))
  );

  return (
    <main className="px-4 md:px-8 lg:px-16 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {popCultureSection.name.replace("-", " ")}
      </h1>
      <p className="mb-6">{popCultureSection.description}</p>
      <CategoryNavigator
        data={sections}
        currentCategory={"Pop Culture"}
        baseURL=""
      />

      {/* Search Box */}
      <SearchBox items={allSlides} />

      {/* Render Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 justify-items-center">
        {popCultureSection.categories.map((category) => (
          <Link
            key={category.name}
            href={`/pop-culture/${category.name
              .toLowerCase()
              .replaceAll(" & ", "-")
              .replaceAll(" ", "-")}`}
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
    </main>
  );
}
