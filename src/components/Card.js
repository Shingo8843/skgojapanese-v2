"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
export default function Card({
  title,
  description,
  href,
  image,
  alt,
  onClick,
  className = "", // Default value set to an empty string
  audioSrc = null,
}) {
  const Wrapper = href ? Link : "div"; // Use Link for navigation, div for actions
  const wrapperProps = href
    ? { href, className: `block ${className}` }
    : { onClick, role: "button", className: `block cursor-pointer ${className}` };
  const audioRef = useRef(null);
  
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  return (
    <Wrapper
      {...wrapperProps}
      className={`relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 cursor-pointer rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 ${className}`}
    >
      <div className="relative w-full h-full overflow-hidden rounded-md">
        {image && (
          <Image
            src={image}
            alt={alt || title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain rounded-md"
            priority
          />
        )}
      </div>
      {title && (
      <div className="absolute bottom-0 left-0 w-full p-2 bg-white bg-opacity-70 backdrop-blur-sm rounded-b-lg">
        <h3 className="text-sm sm:text-base font-bold">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-600">{description}</p>
      </div>
      )}
      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={audioSrc} />
    </Wrapper>
  );
}
