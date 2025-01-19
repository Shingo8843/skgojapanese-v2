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
    <main className="px-4 md:px-8 lg:px-16 py-8">
      <div id="aboutUs">
        <section id="banner" className="text-center">
          <div className="content">
            <h2 className="text-2xl md:text-3xl font-bold">
              Mission statement / ミッションステートメント
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              One word changes everything.
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              たったひとつの単語で、世界は変わる。
            </h2>
          </div>
        </section>
      </div>

      <section id="main" className="mt-8">
        <div className="container mx-auto">
          <div className="row grid gap-8">
            <div className="col-12">
              <section className="box features">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Our story / 私たちの物語
                  </h2>
                  <div className="row mt-6">
                    <div className="col-12 text-center">
                      <h2 className="text-4xl md:text-5xl font-bold">
                        WEBSITE OF THE STUDENT BY THE STUDENT FOR THE STUDENT
                      </h2>
                      <h2 className="text-xl md:text-2xl text-right mt-4">
                        SKGO Japanese WAS FOUNDED BY JAPANESE STUDENTS.
                      </h2>
                      <h2 className="text-4xl md:text-5xl font-bold mt-6">
                        学生の、学生による、学生のためのウェブサイト
                      </h2>
                      <h2 className="text-xl md:text-2xl text-right mt-4">
                        SKGO Japaneseは、日本人の学生によって設立されました。
                      </h2>
                    </div>
                  </div>

                  <div
                    className="mt-12 p-6 rounded-lg relative bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/images/AboutUs.png')",
                      aspectRatio: "1113/621",
                    }}
                  >
                    <h2 className="text-2xl md:text-3xl font-bold bg-opacity-50 bg-gray-600 p-4 rounded text-white inline-block">
                      What We Believe / 私たちが信じていること
                    </h2>
                    <div className="bg-opacity-50 bg-gray-600 p-4 mt-6 rounded text-white">
                      <p className="text-lg">
                        Knowing just one word can literally change everything.
                        It may sound silly, but we&apos;ve all had the experience of
                        making a friend just by saying &quot;hello.&quot;
                      </p>
                      <p className="text-lg mt-4">
                        たった一つの言葉を知るだけで、文字通り全てが変わる。バカバカしいと思うかもしれませんが、&quot;こんにちは&quot;と挨拶しただけで友達ができたという経験は、誰にでもあると思うんです。
                      </p>
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mt-12">
                    Project Member / メンバー
                  </h2>

                  <div className="mt-8 grid grid-cols-1 gap-8 py-16">
                    {/* Shingo Morita */}
                    <div className="flex gap-6">
                      <div
                        className="bg-cover bg-center rounded aspect-[3/4] w-1/3"
                        style={{
                          backgroundImage: "url('/images/Shingo.jpeg')",
                        }}
                      ></div>
                      <div>
                        <h3 className="text-2xl font-bold">
                          Shingo Morita - Project Leader / 守田真悟
                        </h3>
                        <p className="mt-2">
                          University of Southern California, Master of Science
                          in Computer Science
                          <br />
                          南カリフォルニア大学コンピューターサイエンス修士課程
                        </p>
                        <p className="mt-2">
                          San Diego State University, Bachelor of Science in
                          Computer Engineering
                          <br />
                          サンディエゴ州立大学情報工学学部
                        </p>
                        <div className="mt-4">
                          <a
                            href="https://www.linkedin.com/in/smorita/"
                            className="text-blue-600 hover:underline"
                          >
                            LinkedIn
                          </a>
                          <br />
                          <a
                            href="https://shingomorita.com/"
                            className="text-blue-600 hover:underline"
                          >
                            Portfolio
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 grid grid-cols-1 gap-8 py-16">
                    {/* Keigo Morita */}
                    <div className="flex gap-6">
                      <div
                        className="bg-cover bg-center rounded aspect-[3/4] w-1/3"
                        style={{
                          backgroundImage: "url('/images/Keigo.jpg')",
                        }}
                      ></div>
                      <div>
                        <h3 className="text-2xl font-bold">
                          Keigo Morita - Website Manager / Student Volunteer Organization Leader / 守田圭吾
                        </h3>
                        <p className="mt-2">
                          San Diego State University, Computer Science Major, Weber Honors College
                          <br />
                          サンディエゴ州立大学コンピューターサイエンス学部専攻、ウェバーオナーズカレッジ
                        </p>
                        <p className="mt-2">
                          Patrick Henry High School
                          <br />
                          パトリック・ヘンリー高校
                        </p>
                        <div className="mt-4">
                          <a
                            href="https://www.linkedin.com/in/keigom/"
                            className="text-blue-600 hover:underline"
                          >
                            LinkedIn
                          </a>
                          <br />
                          <a
                            href="https://shingomorita.com/"
                            className="text-blue-600 hover:underline"
                          >
                            Portfolio
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container mx-auto pt-16">
                      <h2 className="text-3xl md:text-4xl font-bold">Project Members / メンバー</h2>
                      <div className="mt-8 grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                        {members.map((member, index) => (
                          <div key={index} className="flex gap-6">
                            {/* <div
                              className="bg-cover bg-center rounded aspect-[4/5] w-1/3"
                              style={{ backgroundImage: `url('${member.image}')` }}
                            ></div> */}
                            <Image src={member.image} width={300} height={400} className="rounded" alt={member.name} />
                            <div>
                              <h3 className="text-2xl font-bold">
                                {member.name} - {member.role}
                              </h3>
                              {member.nameJP && (
                                <h4 className="text-lg mt-1">
                                  {member.nameJP} - {member.roleJP}
                                </h4>
                              )}
                              {member.education && (
                                <div className="mt-4">
                                  {member.education.map((edu, eduIndex) => (
                                    <p key={eduIndex} className="text-sm">
                                      {edu}
                                    </p>
                                  ))}
                                </div>
                              )}
                              {member.links && (
                                <div className="mt-4">
                                  {member.links.map((link, linkIndex) => (
                                    <a
                                      key={linkIndex}
                                      href={link.url}
                                      className="text-blue-600 hover:underline block"
                                    >
                                      {link.label}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
