"use client";

import { useEffect, useState } from "react";

// Renders the current year on the client so it stays correct without a
// rebuild (the layout is statically prerendered at build time on Vercel).
export default function CopyrightYear() {
  const [year, setYear] = useState(() => new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
}
