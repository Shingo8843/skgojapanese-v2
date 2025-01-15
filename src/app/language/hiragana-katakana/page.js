"use client";

import { useState } from "react";
import Image from "next/image";
import HiraKanaModal from "@/components/HiraKanaModal";
import kanaData from "@/data/hirakana.json";

export default function HiraganaKatakana() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ image: "", audio: "" });

  const { hiragana, katakana } = kanaData;

  const showModal = (animated, audio) => {
    setModalContent({ image: animated, audio });
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <main className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-4xl font-bold mb-6 text-center p-4 sm:text-6xl lg:text-8xl">Hiragana & Katakana</h1>
      <p className="mb-8 text-gray-700 text-center">
        Welcome to the Hiragana & Katakana section! Click on a character to see the stroke order and hear its pronunciation.
      </p>
      <h2 className="text-5xl font-bold mb-4 text-center sm:pt-8 lg:pt-16">Hiragana</h2>
      <div className="grid grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
        {hiragana.map((item, index) => (
          <div
            key={index}
            onClick={() => showModal(item.animated, item.audio)}
            className="cursor-pointer bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition"
          >
            <h2 className="text-base sm:text-lg lg:text-xl font-medium text-center mb-2">
              {item.title}
            </h2>
            <div className="relative w-full aspect-square">
              <Image
                src={item.static ||  "/placeholder.jpg"}
                alt={item.title || "Hiragana Character"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded object-contain"
              />
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-5xl font-bold mb-4 text-center p-4 pt-16">Katakana</h2>
      <div className="grid grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
        {katakana.map((item, index) => (
          <div
            key={index}
            onClick={() => showModal(item.animated, item.audio)}
            className="cursor-pointer bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition"
          >
            <h2 className="text-base sm:text-lg lg:text-xl font-medium text-center mb-2">
              {item.title}
            </h2>
            <div className="relative w-full aspect-square">
              <Image
                src={item.static || "/placeholder.jpg"}
                alt={item.title || "Katakana Character"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal Component */}
      <HiraKanaModal
        isVisible={modalVisible}
        onClose={closeModal}
        content={modalContent}
      />
    </main>
  );
}
