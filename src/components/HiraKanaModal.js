"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function HiraKanaModal({ isVisible, onClose, content }) {
  useEffect(() => {
    let audio;
    if (isVisible && content.audio) {
      try {
        audio = new Audio(content.audio);
        audio.play();
      } catch (error) {
        console.error("Failed to play audio:", error);
      }
      return () => {
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      };
    }
  }, [isVisible, content.audio]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✖
        </button>
        <h2 id="modal-title" className="text-xl font-bold mb-4 text-center">
          Hiragana Character
        </h2>
        <div className="relative w-full h-40 mb-4">
          <Image
            src={content.image || "/placeholder.jpg"}
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
