"use client";

import { useRef } from "react";
import Image from "next/image";

export default function ExpressionCard({ title, explanation, image, alt, audioSrc }) {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="relative w-64 h-108 cursor-pointer rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 flex flex-col justify-between">
      {/* Image */}
      <div className="relative w-full h-40 overflow-hidden rounded-md">
        <Image
          src={image}
          alt={alt}
          layout="fill"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain rounded-md"
          priority
        />
      </div>

      {/* Title and Explanation */}
      <div className="flex-grow mt-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-600">{explanation}</p>
      </div>

      {/* Audio Player */}
      <div className="mt-4">
        <button
          onClick={playAudio}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Play Voice
        </button>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={audioSrc} />
    </div>
  );
}
