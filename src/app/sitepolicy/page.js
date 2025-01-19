"use client";
import Image from "next/image";
import { useState } from "react";
export default function SitePolicy() {
    const [language, setLanguage] = useState("en"); // 'en' for English, 'jp' for Japanese

    const toggleLanguage = () => {
      setLanguage((prevLanguage) => (prevLanguage === "en" ? "jp" : "en"));
    };
    return (
      <section id="main" className="py-8">
        <div className="container mx-auto px-4">
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleLanguage}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {language === "en" ? "日本語へ切り替え" : "Switch to English"}
          </button>
          </div>
          <div className="row">
                <div className="col-12">
                    <section className="box features">
                    {language == "en" && (
                        <>

                            {/* Site Policy Section */}
                            <h2 className="major text-4xl font-bold my-8 text-center">
                                <span>Site Policy</span>
                            </h2>
                            <p className="mb-6">
                                The Japanese learning for students is operated by Shingo
                                Morita & Keigo Morita based on the following rules of use.
                                People who access and use this site are deemed to agree with
                                this site policy.
                            </p>
            
                            {/* Copyrights Section */}
                            <h2 className="major text-4xl font-bold my-8 text-center">
                                <span>Copyrights</span>
                            </h2>
                            <p className="mb-6">
                                (1) The copyrights (or intellectual property rights) for
                                information carried on this site, all belong to us unless
                                otherwise stated.
                                <br />
                                (2) All or part of the information carried on this site cannot
                                be reprinted or reproduced for any purpose other than private
                                use.
                                <br />
                                (3) The information carried on this site can be quoted mainly
                                for educational purposes, etc., and within the scope specified
                                by law.
                            </p>
            
                            {/* Responsibility Section */}
                            <h2 className="major text-4xl font-bold my-8 text-center">
                                <span>Exemption of Responsibility</span>
                            </h2>
                            <p className="mb-6">
                                (1) The utmost care is given to security on this site.
                                However, this does not guarantee that the possibility of
                                mistaken contents resulting from uncontrollable factors, such
                                as falsification by a third party, is completely eliminated.
                                We do not bear responsibility for any damage to persons
                                resulting from the use of this site or information on this
                                site.
                                <br />
                                (2) To facilitate the convenience of people using this site,
                                this site includes contents, links, and other information
                                suggested by third parties and translations of these items
                                carried out by us for which we do not have responsibility.
                            </p>
            
                            {/* Privacy Policy Section */}
                            <h2 className="major text-4xl font-bold my-8 text-center">
                                <span>Basic Privacy Policy</span>
                            </h2>
                            <p className="mb-6">
                                We will use the opinions and impressions of users collected
                                via the &apos;Contact us&apos; section as a reference when managing the
                                site and to help in its continuous improvement. We may contact
                                users via the email address they provide. We will not
                                intentionally reveal information collected from users that can
                                identify an individual to a third party. However, this
                                excludes the following two exceptional cases:
                                <br />
                                (1) If information is requested on the basis of legal grounds.
                                <br />
                                (2) If, when the processing of information collected by us is
                                consigned to an outside business, information is revealed
                                within the scope necessary for the performance of the said
                                work.
                            </p>
            
                            {/* Security Section */}
                            <h2 className="major text-4xl font-bold my-8 text-center">
                                <span>Security</span>
                            </h2>
                            <p className="mb-6">
                                We adopt rational measures to prevent the accidental
                                disclosure of collected information to a third party. However,
                                please understand that the security measures taken by us do
                                not guarantee complete security regarding the leakage of
                                information that can identify individual users.
                            </p>
            
                            {/* Other Section */}
                            <h2 className="major text-4xl font-bold my-8 text-center">
                                <span>Other</span>
                            </h2>
                            <p className="mb-6">
                                (1) This site&apos;s information and URL may change or be removed
                                without notice.
                                <br />
                                (2) While we take care to ensure the accuracy of the
                                information on this site, we assume no responsibility for any
                                actions taken by users of this site.
                                <br />
                                (3) Due to technical limitations of electronic media, fonts,
                                etc., might differ from those in printed publicity materials
                                (for example, machine-dependent characters, personal names).
                                <br />
                                (4) Due to system disorder or maintenance, the supply of
                                information from this site might be temporarily suspended.
                            </p>
            
                            {/* Links Section */}
                            <h2 className="major text-4xl font-bold my-8 text-center">
                                <span>Link</span>
                            </h2>
                            <p className="mb-6">
                                This website is link-free. Linking does not require notice.
                                Our original banners are also offered here for your
                                convenience.
                            </p>
                            <div className="flex justify-center">
                                <Image
                                src="/images/logo.png"
                                alt="Site Logo"
                                className="w-40 h-auto"
                                width={400}
                                height={400}
                                />
                            </div>                                
                        </>
                    )}
                    {language=="jp" && (<>
                        <h2 className="major text-4xl font-bold my-8 text-center">
                            <span>サイトポリシー</span>
                        </h2>
                        <p className="mb-6">
                            「Japanese learning for students」ウェブサイト(以下当サイトという)は、Shingo Morita & Keigo Moritaにより以下の利用規約に基づいて運営されています。
                            当サイトを利用される皆様におかれましては、当サイトにアクセスしてこれを利用した場合は、このサイトポリシーに同意したものとみなします。
                        </p>

                        <h2 className="major text-4xl font-bold my-8 text-center">
                            <span>著作権に関して</span>
                        </h2>
                        <p className="mb-6">
                            (1) 当サイト上の掲載情報の著作権は、特に記載されているもの以外は、全てShingo Morita & Keigo Moritaに帰属しています。
                            <br />
                            (2) 当サイト上の掲載情報の全部または一部について、私的使用以外の目的で転載、複製することはできません。
                            <br />
                            (3) 当サイト上の掲載情報を主に教育などの目的や法律で明示的に認められている範囲において引用できます。
                        </p>

                        <h2 className="major text-4xl font-bold my-8 text-center">
                            <span>免責に関して</span>
                        </h2>
                        <p className="mb-6">
                            (1) 当サイトのセキュリティには細心の注意を払っておりますが、コンテンツの誤り、第三者による人為的改ざん等の不可抗力によるコンテンツの誤り等が発生する可能性を全て排除することを保証するものではなく、当サイトを利用される皆様が本サイト及び本サイトの情報を利用することによって生じるいかなる損害についても責任を負うものではありません。
                            <br />
                            (2) 当サイトには、当サイトを利用される皆様の便宜のため、私達の責任の及ばない第三者が提示したコンテンツ、リンク、及びその他の情報ならびに私達が行ったそれらの翻訳が含まれます。
                        </p>

                        <h2 className="major text-4xl font-bold my-8 text-center">
                            <span>プライバシーに関する基本的な考え方</span>
                        </h2>
                        <p className="mb-6">
                            「おといあわせ」で収集したご意見・ご感想などは、今後のサイトの運営、改善の参考とさせていただきます。
                            ご記入いただいたメールアドレスは、こちらからの連絡に利用させて頂くことがあります。
                            個人を特定できるような情報を意図的に第三者に開示することはありません。ただし、
                            <br />
                            (1) 法的根拠に基づいて請求された場合
                            <br />
                            (2) 収集した情報の処理に関して業者等に委託する際に、当該業務の履行に必要な範囲において開示する場合
                            <br />
                            の２つの例外的な場合を除きます。
                            <br />
                            <br />
                            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
                            このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
                            このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
                            この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
                            この規約に関して、詳しくはGoogle アナリティクス利用規約にてご確認ください。
                        </p>

                        <h2 className="major text-4xl font-bold my-8 text-center">
                            <span>セキュリティについて</span>
                        </h2>
                        <p className="mb-6">
                            私達は、収集した情報が偶然に第三者へ開示されることを防ぐために合理的な措置を講じています。
                            しかしながら、私達の講じているセキュリティ手段にかかわらず、利用者各位の個人を特定できる情報漏洩等について、完全にセキュリティを保障するものではありませんので、ご了承願います。
                        </p>

                        <h2 className="major text-4xl font-bold my-8 text-center">
                            <span>その他</span>
                        </h2>
                        <p className="mb-6">
                            (1) 当サイトの情報及びURLは予告なしに変更又は削除する場合があります。
                            <br />
                            (2) 当サイトの掲載情報の正確性については気をつけておりますが、利用者が当サイトを利用して行う一切の行為について何ら責任を負うものではありません。
                            <br />
                            (3) 電子媒体の技術的な制約のため、紙媒体とは字体等が異なる場合があります（例：機種依存文字、人名表記）。
                            <br />
                            (4) システムの障害やメンテナンスなどのため、当サイトからの情報提供を一時的に停止する場合があります。
                        </p>

                        <h2 className="major text-4xl font-bold my-8 text-center">
                            <span>リンクについて</span>
                        </h2>
                        <p className="mb-6">
                            当サイトへのリンクは自由です。リンクをする際に連絡は必要ありません。
                            下のバナー画像をお使いください。
                        </p>
                        <div className="flex justify-center">
                            <Image src="/images/logo.png" alt="サイトロゴ" className="w-40 h-auto" width={400} height={400} />
                        </div>
                        </>
                    )}
                    </section>
                </div>
            </div>
        </div>
      </section>
    );
  }
  