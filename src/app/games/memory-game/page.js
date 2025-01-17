"use client";
import Card from "@/components/Card";
import Link from "next/link";
import data from "@/data/vocabulary.json";
import CategoryNavigator from "@/components/CategoryNavigator";
import sections from "@/data/sections.json";
export default function MemoryGame() {
  const currentSection = sections.find((section) => section.name === "Games");
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Memory Game Categories</h1>
      <CategoryNavigator
        data={currentSection.subsections}
        currentCategory={"Memory Game"}
        baseURL="/games"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 justify-items-center">
      {data.map((category) => (
          <Link key={category.name} href={`/games/memory-game/${category.name.toLowerCase()}`}>
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
