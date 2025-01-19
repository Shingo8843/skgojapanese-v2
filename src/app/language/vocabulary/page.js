"use client";

import Link from "next/link";
import data from "@/data/vocabulary.json"; // JSON file path

import Card from "@/components/Card";
import CategoryNavigator from "@/components/CategoryNavigator";
import sections from "@/data/sections.json";
export default function VocabularyPage() {
  const currentSection = sections.find((section) => section.name === "Language");
  return (
    <main className="px-4 md:px-8 lg:px-16 py-8">
      <h1 className="text-3xl font-bold mb-6">Vocabulary Categories</h1>
      <CategoryNavigator data={currentSection.subsections} currentCategory={"Vocabulary"} baseURL="/language" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 justify-items-center">
      {data.map((category) => (
          <Link key={category.name} href={`/language/vocabulary/${category.name.toLowerCase().replaceAll(" ", "-")}`} passHref>
            <Card
              title={category.name}
              description="Click to explore"
              image={category.image}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
