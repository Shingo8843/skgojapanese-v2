import Link from "next/link";
import Image from "next/image";

export default function Card({
  title,
  description,
  href,
  image,
  alt,
  onClick,
  className = "", // Default value set to an empty string
}) {
  const Wrapper = href ? Link : "div"; // Use Link for navigation, div for actions
  const wrapperProps = href
    ? { href, className: `block ${className}` }
    : { onClick, role: "button", className: `block cursor-pointer ${className}` };

  return (
    <Wrapper
      {...wrapperProps}
      className={`p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      <div className="relative w-full h-40 overflow-hidden rounded-md">
        {image && (
          <Image
            src={image}
            alt={alt || title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-md object-cover"
            priority
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
