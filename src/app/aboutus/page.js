import Image from "next/image";

export default function LandingPage() {
  const members = [
    {
      name: "Yura Yamagishi",
      role: "Content Creation Volunteer & Community Engagement Volunteers",
      image: "/images/Yura.jpeg",
    },
    {
      name: "Riki Ishida",
      role: "Content Creation Volunteer & Community Engagement Volunteers",
      image: "/images/Riki.jpg",
    },
    {
      name: "Yuma Kai",
      role: "Content Creation Volunteer & Community Engagement Volunteers",
      image: "/images/Yuma.png",
    },
    {
      name: "Hagio Miyo",
      role: "Content Creation Volunteer & Community Engagement Volunteers",
      image: "/images/Ohagi.jpeg",
    },
    {
      name: "Akane Ida",
      role: "Voice Volunteer & Community Engagement Volunteers",
      image: "/images/akane.jpeg",
    },
    {
      name: "Riko Nakagawa",
      role: "Community Engagement Volunteers",
      image: "/images/riko.jpg",
    },
    {
      name: "Asaka Ogoe",
      role: "Community Engagement Volunteers",
      image: "/images/Asaka.jpg",
    },
    {
      name: "Kaede Tokumaru",
      role: "Community Engagement Volunteers",
      image: "/images/Kaede.jpg",
    },
    {
      name: "Kai Kikuchi",
      role: "Community Engagement Volunteers",
      image: "/images/Kai.jpeg",
    },
  ];

  return (
    <main className="px-4 md:px-8 lg:px-16 py-12 space-y-16">
      {/* Mission Statement */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          Mission statement / ミッションステートメント
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold">
          One word changes everything.
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold">
          たったひとつの単語で、世界は変わる。
        </h2>
      </section>

      {/* Our Story */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Our Story / 私たちの物語
        </h2>

        <div className="text-center space-y-4">
          <h3 className="text-3xl md:text-4xl font-bold">
            WEBSITE OF THE STUDENT BY THE STUDENT FOR THE STUDENT
          </h3>
          <p className="text-xl md:text-2xl text-right">
            SKGO Japanese WAS FOUNDED BY JAPANESE STUDENTS.
          </p>
          <h3 className="text-3xl md:text-4xl font-bold">
            学生の、学生による、学生のためのウェブサイト
          </h3>
          <p className="text-xl md:text-2xl text-right">
            SKGO Japaneseは、日本人の学生によって設立されました。
          </p>
        </div>

        <div
          className="relative bg-cover bg-center rounded-xl overflow-hidden"
          style={{
            backgroundImage: "url('/images/AboutUs.png')",
            aspectRatio: "1113 / 621",
          }}
        >
          <div className="bg-gray-700 bg-opacity-60 p-6 text-white space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              What We Believe / 私たちが信じていること
            </h2>
            <p className="text-lg">
              Knowing just one word can literally change everything. It may
              sound silly, but we've all had the experience of making a friend
              just by saying "hello."
            </p>
            <p className="text-lg">
              たった一つの言葉を知るだけで、文字通り全てが変わる。"こんにちは"と挨拶しただけで友達ができたという経験は、誰にでもあると思うんです。
            </p>
          </div>
        </div>
      </section>

      {/* Leaders */}
      <section className="space-y-16">
        {[
          ,
          {
            name: "Shingo Nagano",
            role: "Co-Founder / 長野真悟",
            image: "/images/shingo.JPEG",
            education: [
              "University of Southern California, MS in Computer Science",
              "San Diego State University, BS in Computer Engineering",
            ],
            links: [
              {
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/shingon/",
              },
              { label: "Portfolio", url: "https://shingomorita.com/" },
            ],
          },
          {
            name: "Keigo Morita",
            role: "Project Leader / Co-Founder / 守田圭吾",
            image: "/images/Keigo.jpg",
            education: [
              "San Diego State University, CS Major, Weber Honors College",
              "Patrick Henry High School",
            ],
            links: [
              { label: "LinkedIn", url: "https://www.linkedin.com/in/keigom/" },
              { label: "Portfolio", url: "https://keigo.skgojapanese.com/" },
            ],
          }
        ].map((person, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row gap-6 items-start"
          >
            <div className="w-full md:w-1/3">
              <Image
                src={person.image}
                alt={person.name}
                width={300}
                height={400}
                className="rounded object-cover w-full h-auto"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">
                {person.name} - {person.role}
              </h3>
              {person.education.map((edu, i) => (
                <p key={i}>{edu}</p>
              ))}
              <div className="mt-2 space-y-1">
                {person.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    className="text-blue-600 hover:underline block"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Team Members */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Project Members / メンバー
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {members.map((member, index) => (
            <div key={index} className="flex gap-6 items-start">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={280}
                className="rounded object-cover w-1/3 h-auto"
              />
              <div>
                <h3 className="text-xl font-bold">
                  {member.name} - {member.role}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map + Mission Blocks */}
      <section className="space-y-16">
        {[
          {
            title: "Map for an Adventure / 冒険の地図",
            body: [
              "Just as we need a map for an adventure, we need a map to learn a language. Learning a language is like having an adventure. Difficult but fun. Our website is a map to Japanese culture.",
              "冒険に地図が必要なように、語学を学ぶためにも地図が必要だ。私たちのウェブサイトは、海外で学ぶ生徒たちが日本につながるための地図です。",
            ],
          },
          {
            title:
              "A Resource to Support Learning / 学習リソースが学びを支える",
            body: [
              "Learning requires not only classroom experiences, but also learning resources. Our goal is to provide resources that can be accessed from anywhere.",
              "学習には教室での体験だけでなく、自由に利用できるリソースが必要です。",
            ],
          },
          {
            title: "Enjoy Learning Japanese / 日本語学習を楽しむ",
            body: [
              "Provide content that will help you enjoy and love Japanese culture and language.",
              "日本の文化や日本語が好きになれるようなコンテンツの提供をします。",
            ],
          },
          {
            title:
              "For the Japanese Community Around the World / 世界中の日本語学習者のために",
            body: [
              "We are committed to supporting and enlivening the study of Japanese language and culture worldwide.",
              "私たちは、世界における日本語と日本文化の学習を支援します。",
            ],
          },
        ].map((section, idx) => (
          <div key={idx}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {section.title}
            </h2>
            {section.body.map((p, i) => (
              <p key={i} className="text-lg mb-2">
                {p}
              </p>
            ))}
          </div>
        ))}

        {/* Special Thanks */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Special Thanks / スペシャルサンクス
          </h2>
          <p className="text-lg">
            the Gardena Valley Japanese Cultural Institute (GVJCI)
          </p>
          <p className="text-lg">ガーデナ平原日本文化会館(GVJCI)</p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-2">
              <p className="text-lg">
                We began volunteering at GVJCI Japanese Language School to
                support online lectures. We received advice and support from
                teachers to create this website.
              </p>
              <p className="text-lg">
                私たちはGVJCI日本語学校でオンライン授業のサポートボランティアとして活動を始め、このサイトを作るために多くの支援を受けました。
              </p>
            </div>
            <div
              className="bg-cover bg-center rounded-xl"
              style={{
                backgroundImage: "url('/images/JCI Group Photo.jpg')",
                aspectRatio: "4 / 3",
              }}
            ></div>
          </div>
        </div>
      </section>
    </main>
  );
}
