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
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div
        className="text-center space-y-8 p-8 rounded-xl transition-all duration-300 hover:scale-105"
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      >
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          {message}
        </h1>

        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full bg-blue-500 animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        <div className="text-gray-600 text-sm mt-4">
          {clicks > 0 &&
            `You've clicked ${clicks} time${clicks === 1 ? "" : "s"}!`}
        </div>

        <div className="text-gray-500 text-sm mt-2">(Click me!)</div>
      </div>
    </main>
  );
}
