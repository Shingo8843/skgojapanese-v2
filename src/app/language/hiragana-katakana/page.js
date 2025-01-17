"use client";

import { useState } from "react";
import Image from "next/image";
import HiraKanaModal from "@/components/HiraKanaModal";
import kanaData from "@/data/hirakana.json";
import CategoryNavigator from "@/components/CategoryNavigator";
import sections from "@/data/sections.json";
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
  const currentSection = sections.find((section) => section.name === "Language");
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Hiragana & Katakana</h1>
      <CategoryNavigator data={currentSection.subsections} currentCategory={"Hiragana & Katakana"} baseURL="/language" />
      <h2 className="text-5xl font-bold mb-4 text-center sm:pt-8 lg:pt-16">Hiragana</h2>
      <div className="grid grid-cols-5 gap-2 sm:gap-4 lg:gap-8 justify-items-center">
        {hiragana.map((item, index) => (
          <div
            key={index}
            onClick={() => showModal(item.animated, item.audio)}
            className="cursor-pointer bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition w-full"
          >
            <h2 className="text-base sm:text-lg lg:text-xl font-medium text-center mb-2">
              {item.title}
            </h2>
            <div className="relative w-full aspect-square">
              <Image
                src={item.static ||  "/placeholder.jpg"}
                alt={item.title || "Hiragana Character"}
                fill
                className="rounded object-contain w-full"
              />
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-5xl font-bold mb-4 text-center p-4 pt-16">Katakana</h2>
      <div className="grid grid-cols-5 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
        {katakana.map((item, index) => (
          <div
            key={index}
            onClick={() => showModal(item.animated, item.audio)}
            className="cursor-pointer bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition w-full"
          >
            <h2 className="text-base sm:text-lg lg:text-xl font-medium text-center mb-2">
              {item.title}
            </h2>
            <div className="relative w-full aspect-square">
              <Image
                src={item.static || "/placeholder.jpg"}
                alt={item.title || "Katakana Character"}
                fill
                className="rounded object-contain w-full"
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
