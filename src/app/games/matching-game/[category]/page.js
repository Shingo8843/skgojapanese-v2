"use client";

import { use, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";
import Card from "@/components/Card";
import data from "@/data/vocabulary.json";
import CategoryNavigator from "@/components/CategoryNavigator";
// Shuffle function
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

export default function CategoryPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const { category } = params;
  const router = useRouter();

  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [setCount, setSetCount] = useState(2);
  const [showModal, setShowModal] = useState(false);

  const categoryIndex = data.findIndex(
    (cat) => cat.name.toLowerCase() === category.toLowerCase().replaceAll("%20", " ").replaceAll("-", " ")  
  );
  const selectedCategory = data[categoryIndex];

  const resetGame = useCallback(() => {
    if (selectedCategory) {
      const allCards = selectedCategory.items
        .slice(0, setCount)
        .flatMap((item) => [
          { id: `${item.name}-1`, img: item.img1, name: item.name },
          { id: `${item.name}-2`, img: item.img2, name: item.name },
        ]);
      setCards(shuffleArray(allCards)); // Shuffle cards on reset
      setMatchedCards([]);
      setSelectedCards([]);
    }
  }, [selectedCategory, setCount]);

  useEffect(() => {
    resetGame();
  }, [resetGame]);

  const handleCardClick = (id) => {
    if (selectedCards.length === 2 || matchedCards.includes(id)) return;

    const currentCard = cards.find((card) => card.id === id);
    const newSelectedCards = [...selectedCards, currentCard];

    setSelectedCards(newSelectedCards);

    if (newSelectedCards.length === 2) {
      const [first, second] = newSelectedCards;

      if (first.name === second.name) {
        // Match found
        setMatchedCards((prev) => [...prev, first.id, second.id]);
        setSelectedCards([]);

        // Check if all cards are matched
        if (matchedCards.length + 2 === cards.length) {
          setTimeout(() => setShowModal(true), 200); // Small delay before showing the modal
        }
      } else {
        // No match, clear selection after a delay
        setTimeout(() => setSelectedCards([]), 200);
      }
    }
  };

  const handleModalClose = () => {
    resetGame();
    if (setCount < selectedCategory.items.length) {
      setSetCount((prev) => prev + 1);
    } else {
    //   alert("Congratulations! You've completed all levels!");
    console.log("Congratulations! You've completed all levels!");
    }
    setShowModal(false);
  };

  // Automatically hide the modal after 3 seconds
  useEffect(() => {
    if (showModal) {
      resetGame(); // Reset the game on modal close
      const timer = setTimeout(() => {
        if (setCount < selectedCategory.items.length) {
          setSetCount((prev) => prev + 1);
        } else {
        //   alert("Congratulations! You've completed all levels!");
        console.log("Congratulations! You've completed all levels!");
        }
        setShowModal(false);
      }, 3000);

      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [showModal, setCount, selectedCategory, resetGame]);

  if (!selectedCategory) {
    return <p className="text-center text-xl text-gray-600">Category not found</p>;
  }
  
  return (
    <main className="px-4 md:px-8 lg:px-16 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{selectedCategory.name}</h1>
      <CategoryNavigator data={data} currentCategory={selectedCategory.name} baseURL="/games/matching-game" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 justify-items-center">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={""}
            description=""
            image={card.img}
            onClick={() => handleCardClick(card.id)}
            className={`${
              selectedCards.some((selected) => selected.id === card.id)
                ? "border-4 border-yellow-400"
                : matchedCards.includes(card.id)
                ? "border-4 border-green-500"
                : "border border-gray-200"
            }`}
          />
        ))}
      </div>

      <button
        onClick={resetGame}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Reset Game
      </button>

      {showModal && (
        <Modal onClose={handleModalClose}>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
            <p className="text-lg">You matched all the cards!</p>
          </div>
        </Modal>
      )}
    </main>
  );
}
