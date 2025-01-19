"use client";
import Link from "next/link";
import { useState } from "react";
import expressionData from "@/data/expression.json";
import vocabularyData from "@/data/vocabulary.json";
import sectionsData from "@/data/sections.json";
export default function SiteMap() {
  const [expandedSections, setExpandedSections] = useState({});

  // Toggle section visibility
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const cultureSection = sectionsData.find(
    (section) => section.name === "Culture"
  );
  const popCultureSection = sectionsData.find(
    (section) => section.name === "Pop Culture"
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-4 text-gray-800">Site Map</h1>
      <p className="text-gray-600 mb-8">
        Browse through the structure of our website. Click any section to
        expand, and navigate directly using the links.
      </p>

      <div className="space-y-6">
        <Section
          title="Language"
          expanded={expandedSections.language}
          onToggle={() => toggleSection("language")}
        >
          <SubSection title="Expression" data={expressionData} basePath="/language/expression" />
          <SubSection title="Vocabulary" data={vocabularyData} basePath="/language/vocabulary" />
          <SimpleLink title="Hiragana & Katakana" href="/language/hiragana-katakana" />
        </Section>

        <Section
          title="Games"
          expanded={expandedSections.games}
          onToggle={() => toggleSection("games")}
        >
          <SubSection title="Matching Game" data={vocabularyData} basePath="/games/matching-game" />
          <SubSection title="Memory Game" data={vocabularyData} basePath="/games/memory-game" />
        </Section>

        <Section
          title="Culture"
          expanded={expandedSections.culture}
          onToggle={() => toggleSection("culture")}
        >
          {cultureSection.categories.map((category) => (
            <SimpleLink
              key={category.name}
              title={category.name}
              href={`/culture/${category.name.replaceAll(" ", "-")}`}
            />
          ))}
        </Section>

        <Section
          title="Pop Culture"
          expanded={expandedSections.popCulture}
          onToggle={() => toggleSection("popCulture")}
        >
          {popCultureSection.categories.map((category) => (
            <SimpleLink
              key={category.name}
              title={category.name}
              href={`/pop-culture/${category.name.replaceAll(" ", "-")}`}
            />
          ))}
        </Section>

        {/* Static Pages */}
        <Section
          title="Static Pages"
          expanded={expandedSections.staticPages}
          onToggle={() => toggleSection("staticPages")}
        >
          <SimpleLink title="About Us" href="/aboutus" />
          <SimpleLink title="Contact Us" href="/contactus" />
          <SimpleLink title="How To" href="/howto" />
          <SimpleLink title="Site Policy" href="/sitepolicy" />
        </Section>
      </div>
    </div>
  );
}

// Section Component
function Section({ title, children, expanded, onToggle }) {
  return (
    <div className="bg-white shadow-md rounded-md">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full p-4 text-lg font-semibold text-gray-800 hover:bg-gray-100 transition"
      >
        <span>{title}</span>
        <span>{expanded ? "▲" : "▼"}</span>
      </button>
      {expanded && <div className="p-4 space-y-2">{children}</div>}
    </div>
  );
}

// SubSection Component for Dynamic Data
function SubSection({ title, data, basePath }) {
  return (
    <div>
      <p className="text-gray-700 font-medium">{title}</p>
      <ul className="ml-4 space-y-1">
        {data.map((item) => (
          <li key={item.name}>
            <Link
              href={`${basePath}/${item.name.replaceAll(" ", "-")}`}
              className="text-blue-600 hover:underline"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Simple Link Component
function SimpleLink({ title, href }) {
  return (
    <div>
      <Link
        href={href}
        className="text-blue-600 hover:underline"
      >
        {title}
      </Link>
    </div>
  );
}
