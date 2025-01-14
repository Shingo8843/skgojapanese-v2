import Link from "next/link";
import Image from "next/image";

export default function Card({ title, description, href, image, alt, onClick }) {
  const Wrapper = href ? Link : "div"; // Use Link for navigation, div for actions
  const wrapperProps = href
    ? { href, className: "block" }
    : { onClick, role: "button", className: "block cursor-pointer" };

  return (
    <Wrapper
      {...wrapperProps}
      className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative w-full h-40 overflow-hidden rounded-md">
        {image && (
          <Image
            src={image}
            alt={alt || title}
            fill // Enables responsive layout
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust sizes for different screen widths
            className="rounded-md object-cover"
            priority // Ensures the image is preloaded for key pages
          />
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Wrapper>
  );
}
