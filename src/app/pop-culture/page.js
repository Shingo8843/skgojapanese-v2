"use client";

import Link from "next/link";
import sections from "@/data/sections.json";
import Card from "@/components/Card";
import CategoryNavigator from "@/components/CategoryNavigator";
export default function PopCulturePage() {
  // Find the Pop Culture section
  const popCultureSection = sections.find((section) => section.name === "Pop Culture");



  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">{popCultureSection.name.replace("-", " ")}</h1>
      <p className="mb-6">{popCultureSection.description}</p>
      <CategoryNavigator data={sections} currentCategory={"Pop Culture"} baseURL="" />
      {/* Render Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 justify-items-center">
      {popCultureSection.categories.map((category) => (
          <Link
            key={category.name}
            href={`/pop-culture/${category.name.toLowerCase().replace(" & ", "-").replace(" ", "-")}`}
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
