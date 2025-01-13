import Link from 'next/link';
import Image from 'next/image';

export default function Card({ title, description, href, image, alt }) {
  return (
    <Link href={href} className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-40 overflow-hidden rounded-md">
        {image && (
          <Image
            src={image}
            alt={alt || title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            priority
          />
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
