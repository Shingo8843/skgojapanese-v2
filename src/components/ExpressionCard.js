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
    <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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
      <div className="mt-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-600">{explanation}</p>
      </div>

      {/* Audio Player */}
      <button
        onClick={playAudio}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        Play Voice
      </button>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={audioSrc} />
    </div>
  );
}
