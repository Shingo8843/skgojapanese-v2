import Card from '@/components/Card';

export default function LandingPage() {
  const sections = [
    {
      title: 'Language',
      description: 'Learn Japanese vocabulary and grammar.',
      href: '/language',
      image: '/images/books.png',
    },
    {
      title: 'Games',
      description: 'Interactive games to practice Japanese.',
      href: '/games',
      image: '/images/card-games.png',
    },
    {
      title: 'Culture',
      description: 'Discover Japanese culture and traditions.',
      href: '/culture',
      image: '/images/temple.png',
    },
    {
      title: 'Pop Culture',
      description: 'Explore anime and modern Japanese pop culture.',
      href: '/pop-culture',
      image: '/images/demonslayer.jpg',
    },
  ];

  return (
    <main className="p-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 justify-items-center">
        {sections.map((section) => (
          <Card
            key={section.title}
            title={section.title}
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
