"use client";

import Link from "next/link";
import sections from "@/data/sections.json";
import Card from "@/components/Card";
import CategoryNavigator from "@/components/CategoryNavigator";
import SearchBox from "@/components/SearchBox";

export default function CulturePage() {
  // Find the Culture section
  const cultureSection = sections.find((section) => section.name === "Culture");

  // Flatten all items from categories for search
  const allSlides = cultureSection.categories.flatMap((category) =>
    category.items.map((item) => ({
      name: item.name,
      embedLink: item.embedLink,
      image: item.image,
    }))
  );

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">{cultureSection.name}</h1>
      <p className="mb-6">{cultureSection.description}</p>
      <CategoryNavigator
        data={sections}
        currentCategory={"Culture"}
        baseURL=""
      />

      {/* Search Box */}
      <SearchBox items={allSlides} />

      {/* Render Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 justify-items-center">
        {cultureSection.categories.map((category) => (
          <Link
            key={category.name}
            href={`/culture/${category.name
              .toLowerCase()
              .replace(" & ", "-")
              .replace(" ", "-")}`}
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
