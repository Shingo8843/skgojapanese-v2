"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function HiraKanaModal({ isVisible, onClose, content }) {
  useEffect(() => {
    let audio;
    if (isVisible && content.audio) {
      audio = new Audio(content.audio);
      audio.play();
      return () => {
        audio.pause();
        audio.currentTime = 0;
      };
    }
  }, [isVisible, content.audio]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✖
        </button>
        <div className="relative w-full h-40 mb-4">
          <Image
            src={content.image}
            alt="Hiragana Character"
            layout="fill"
            objectFit="contain"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
}
