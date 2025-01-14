"use client";

import { useState } from "react";
import Card from "@/components/Card";
import ExpressionCard from "@/components/ExpressionCard";

export default function Expression() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      name: "Greetings",
      description: "Learn common Japanese greetings.",
      image: "/images/greetings.jpg",
      alt: "Greetings category",
    },
    {
      name: "Thank Yous",
      description: "Learn how to express gratitude in Japanese.",
      image: "/images/thank-you-category.jpg",
      alt: "Thank Yous category",
    },
    {
      name: "Apologies",
      description: "Learn how to say sorry and excuse me in Japanese.",
      image: "/images/apologies.jpg",
      alt: "Apologies category",
    },
  ];

  const expressionsByCategory = {
    Greetings: [
      {
        title: "こんにちは",
        explanation: "Hello or Good Afternoon.",
        image: "/images/hello.jpg",
        alt: "A friendly hello gesture",
        audioSrc: "/audio/kon-nichi-wa.mp3",
      },
      {
        title: "おはよう",
        explanation: "Good morning.",
        image: "/images/good-morning.jpg",
        alt: "A morning greeting gesture",
        audioSrc: "/audio/ohayo.mp3",
      },
    ],
    "Thank Yous": [
      {
        title: "ありがとう",
        explanation: "Thank you.",
        image: "/images/thank-you.jpg",
        alt: "Thank you gesture",
        audioSrc: "/audio/arigatou.mp3",
      },
      {
        title: "ありがとうございます",
        explanation: "Thank you very much (formal).",
        image: "/images/thank-you-formal.jpg",
        alt: "Formal thank you gesture",
        audioSrc: "/audio/arigatou-gozaimasu.mp3",
      },
    ],
    Apologies: [
      {
        title: "すみません",
        explanation: "Excuse me or Sorry.",
        image: "/images/excuse-me.jpg",
        alt: "Polite bowing gesture",
        audioSrc: "/audio/sumimasen.mp3",
      },
      {
        title: "ごめんなさい",
        explanation: "I'm sorry (casual).",
        image: "/images/sorry.jpg",
        alt: "Casual apology gesture",
        audioSrc: "/audio/gomennasai.mp3",
      },
    ],
  };

  const handleNextCategory = () => {
    if (selectedCategory) {
      const currentIndex = categories.findIndex((cat) => cat.name === selectedCategory);
      const nextIndex = (currentIndex + 1) % categories.length;
      setSelectedCategory(categories[nextIndex].name);
      setSearchQuery("");
    }
  };

  const handlePreviousCategory = () => {
    if (selectedCategory) {
      const currentIndex = categories.findIndex((cat) => cat.name === selectedCategory);
      const prevIndex = (currentIndex - 1 + categories.length) % categories.length;
      setSelectedCategory(categories[prevIndex].name);
      setSearchQuery("");
    }
  };

  const filteredExpressions =
    selectedCategory && searchQuery
      ? expressionsByCategory[selectedCategory].filter((expression) =>
          expression.title.includes(searchQuery)
        )
      : expressionsByCategory[selectedCategory] || [];

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Expressions</h1>

      {!selectedCategory ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card
              key={category.name}
              title={category.name}
              description={category.description}
              image={category.image}
              alt={category.alt}
              onClick={() => setSelectedCategory(category.name)}
            />
          ))}
        </div>
      ) : (
        <div>
          {/* Navigation Buttons */}
          <div className="mb-4 flex items-center justify-between">
            <button
              onClick={handlePreviousCategory}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Previous Category
            </button>
            <button
              onClick={() => setSelectedCategory(null)}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors duration-300"
            >
              Back to Categories
            </button>
            <button
              onClick={handleNextCategory}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Next Category
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search expressions..."
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Expression Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExpressions.map((expression) => (
              <ExpressionCard
                key={expression.title}
                title={expression.title}
                explanation={expression.explanation}
                image={expression.image}
                alt={expression.alt}
                audioSrc={expression.audioSrc}
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
