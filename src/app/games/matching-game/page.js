"use client";

import Link from "next/link";
import data from "@/data/vocabulary.json"; // JSON file path
import Card from "@/components/Card";

export default function MatchingGamePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Matching Game Categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 justify-items-center">
      {data.map((category) => (
          <Link key={category.name} href={`/games/matching-game/${category.name.toLowerCase()}`}>
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
