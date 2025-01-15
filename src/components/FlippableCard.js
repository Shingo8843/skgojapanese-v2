"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function FlippableCard({
  frontImage,
  backText,
  alt,
  isReset,
  isFlipped,
  onFlip,
}) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (isReset) setFlipped(false);
  }, [isReset]);

  useEffect(() => {
    setFlipped(isFlipped);
  }, [isFlipped]);

  const handleFlip = () => {
    if (!flipped) {
      setFlipped(true);
      if (onFlip) onFlip(); // Notify parent on flip
    }
  };

  return (
    <div
      className={`relative w-full h-40 cursor-pointer rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 ${
        flipped ? "rotate-y-180" : ""
      }`}
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
          className="object-cover rounded-lg"
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
    </div>
  );
}
