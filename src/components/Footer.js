import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center space-y-4">
        {/* Navigation Links */}
        <div className="flex justify-center space-x-6">
          <Link href="/aboutus" className="hover:underline">
            About Us
          </Link>
          <Link href="/contactus" className="hover:underline">
            Contact Us
          </Link>
          <Link href="/howto" className="hover:underline">
            How To
          </Link>
          <Link href="/sitepolicy" className="hover:underline">
            Site Policy
          </Link>
          <Link href="/sitemap" className="hover:underline">
            Sitemap
          </Link>
        </div>

        {/* Copyright Text */}
        <div className="text-sm">
          ©2022 Shingo Morita & Keigo Morita. All rights reserved. Icon made by
          Lutfix, Freepik, BomSymbols, Nikita Golubev, Smarshicons, Eucalyp,
          monkik, surang, Ruslan Babkin, Flat Icons, geotatah, max.icons from{" "}
          <a
            href="https://www.flaticon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            www.flaticon.com
          </a>{" "}
          ©2022年 日本語サイアム 教材ダウンロード. All Rights Reserved. Voice material by
          &quot;Amitaro&apos;s Voice Material Studio&quot; Illustration Material By 三日月アルペジオ
          © 2005-2022 STUDIO GHIBLI Inc. Design: HTML5 UP.
        </div>
      </div>
    </footer>
  );
}
