"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("welcome");

  return (
    <main className="min-h-screen p-4 sm:p-8">
      <div className="flex flex-col gap-4 mb-6">
        <p>Hi, welcome.</p>
        <p>I am immensely curious about the power of the mind.</p>
        <p>Here you'll find what's been on my mind.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="/ki" className="hover:font-bold transition-all">
              Ki
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
