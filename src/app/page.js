import Card from '@/components/Card';
import sections from '@/data/sections';
export default function LandingPage() {
  return (
    <main className="px-4 md:px-8 lg:px-16 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 justify-items-center">
        {sections.map((section) => (
          <Card
            key={section.name}
            title={section.name}
            description={section.description}
            href={section.href}
            image={section.image}
            alt={`${section.title} image`}
          />
        ))}
      </div>
    </main>
  );
}
