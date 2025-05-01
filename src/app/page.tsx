"use client";
import { useState } from "react";

export default function Home() {
  const [clicks, setClicks] = useState(0);
  const [message, setMessage] = useState("Under Construction");

  const funMessages = [
    "Building something amazing...",
    "Laying the foundation...",
    "Adding some magic...",
    "Polishing the details...",
    "Almost there...",
    "Just a bit longer...",
    "Making it perfect...",
    "Under Construction",
  ];

  const handleClick = () => {
    setClicks((prev) => prev + 1);
    setMessage(funMessages[clicks % funMessages.length]);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
      <div
        className="text-center space-y-8 p-8 rounded-xl transition-all duration-300 hover:scale-105"
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-rose-700 bg-clip-text text-transparent">
          {message}
        </h1>

        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full bg-indigo-500/80 animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        <div className="text-purple-800 text-sm mt-4">
          {clicks > 0 &&
            `You've clicked ${clicks} time${clicks === 1 ? "" : "s"}!`}
        </div>

        <div className="text-indigo-700 text-sm mt-2">(Click me!)</div>
      </div>
    </main>
  );
}
