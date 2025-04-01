import Card from "@/components/Card";
import sections from "@/data/sections";

export default function LandingPage() {
  return (
    <main className="py-8 px-4 md:px-8 lg:px-16">
      {/* Main Content */}
      <h2 className="text-6xl text-center" id="Index">
        <span>INDEX</span>
      </h2>
      <div
        id="main"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 justify-items-center mt-8 "
      >
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
      <div className="mt-8">
        <h2 className="text-6xl text-center pt-16" id="topicOfMonth">
          <span>Topic of the Month</span>
        </h2>
        <div className="w-full">
          <div className="google-slides-container">
            <iframe
              src="https://view.officeapps.live.com/op/embed.aspx?src=https://skgojapanese.com/powerpoint/都心と郊外の比較.pptx"
              frameBorder="0"
              width="100%"
              height="569"
              allowFullScreen
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
