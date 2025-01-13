import Card from '@/components/Card';

export default function Language() {
  const subsections = [
    {
      name: 'Vocabulary',
      description: 'Learn and practice essential Japanese words.',
      href: '/language/vocabulary',
      image: '/images/vocabulary.jpg',
    },
    {
      name: 'Expression',
      description: 'Master common Japanese phrases and expressions.',
      href: '/language/expression',
      image: '/images/expression.jpg',
    },
    {
      name: 'Hiragana & Katakana',
      description: 'Explore the basics of Japanese writing systems.',
      href: '/language/hiragana-katakana',
      image: '/images/hiragana-katakana.jpg',
    },
  ];

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Language</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subsections.map((sub) => (
          <Card
            key={sub.name}
            title={sub.name}
            description={sub.description}
            href={sub.href}
            image={sub.image}
            alt={`${sub.name} image`}
          />
        ))}
      </div>
    </main>
  );
}
