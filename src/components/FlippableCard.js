"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRef } from "react";

export default function FlippableCard({
  frontImage,
  backText,
  alt,
  isReset,
  isFlipped,
  onFlip,
  audioSrc = null,
}) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (isReset) setFlipped(false);
  }, [isReset]);

  useEffect(() => {
    setFlipped(isFlipped);
  }, [isFlipped]);

  const handleFlip = () => {
    
    setFlipped(!flipped);
    if (onFlip) onFlip(); // Notify parent on flip
    playAudio();
    
  };
  const audioRef = useRef(null);
  
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  return (
    <div
      className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 cursor-pointer rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500"
      onClick={handleFlip}
      style={{ perspective: "1000px" }}
    >

      {/* Front of the card */}
      <div
        className={`absolute inset-0 bg-white backface-hidden rounded-lg ${
          flipped ? "hidden" : "flex"
        }`}
      >
        <Image
          src={frontImage}
          alt={alt || "Card Front"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain rounded-lg"
          style={{ aspectRatio: "1 / 1" }} // Maintain square aspect ratio
        />
      </div>

      {/* Back of the card */}
      <div
        className={`absolute inset-0 bg-gray-200 flex items-center justify-center rounded-lg backface-hidden ${
          flipped ? "block" : "hidden"
        }`}
      >
        <p className="text-xl font-bold">{backText}</p>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={audioSrc} />
    </div>
  );
}
