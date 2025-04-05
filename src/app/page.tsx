"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [duration, setDuration] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);
  const [taskText, setTaskText] = useState("");
  const [activeSection, setActiveSection] = useState("welcome");

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      setIsFlashing(true);
      // Play notification sound
      const audio = new Audio("/notification.mp3");
      audio.play().catch((e) => console.log("Audio playback failed:", e));

      // Flash the card for 3 seconds
      setTimeout(() => {
        setIsFlashing(false);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    setTimeLeft(duration * 60); // Convert minutes to seconds
    setIsRunning(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <main className="min-h-screen p-4 sm:p-8">
      <div className="flex items-center gap-8 mb-6">
        <div className="flex items-center gap-4">
          <img
            src="/signature.png"
            alt="Signature"
            className="h-16 sm:h-20 md:h-24 w-auto"
          />

          <div className="flex items-center gap-1">
            <img
              src="/whiteflower.png"
              alt="Flower"
              className="h-20 sm:h-24 md:h-32 w-auto"
            />
            <img
              src="/flippedwhiteflower.png"
              alt="Flower"
              className="h-20 sm:h-24 md:h-32 w-auto"
            />
            <img
              src="/whiteflower.png"
              alt="White Flower"
              className="h-20 sm:h-24 md:h-32 w-auto"
            />
            <img
              src="/flippedwhiteflower.png"
              alt="Flower"
              className="h-20 sm:h-24 md:h-32 w-auto"
            />
            <img
              src="/whiteflower.png"
              alt="White Flower"
              className="h-16 sm:h-20 md:h-24 w-auto"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Navigation Sidebar */}
        <nav className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 sticky top-4">
            <h3 className="text-lg font-semibold mb-4">
              <em>Rachel's Mind</em>
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveSection("welcome")}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                    activeSection === "welcome"
                      ? "bg-amber-500/20 text-amber-600 dark:text-amber-400"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <em>A Warm Welcome</em>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection("now")}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                    activeSection === "now"
                      ? "bg-amber-500/20 text-amber-600 dark:text-amber-400"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <strong>Now.</strong>
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="flex-grow">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="prose dark:prose-invert max-w-none">
              {activeSection === "welcome" && (
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Welcome to My Mind</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      This is a space where I document my journey of
                      self-discovery and personal growth. It's a window into my
                      thoughts, explorations, and the development of my personal
                      toolkit for understanding and improving myself.
                    </p>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg space-y-4">
                    <h3 className="text-xl font-semibold">About Me</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      [Your introduction and essential information about who you
                      are]
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-500 pl-4 space-y-4">
                    <h3 className="text-xl font-semibold">Core Beliefs</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      [Your fundamental beliefs and principles that guide your
                      journey]
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg space-y-4">
                    <h3 className="text-xl font-semibold">My Approach</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      [How you approach personal growth and self-development]
                    </p>
                  </div>
                </div>
              )}

              {activeSection === "now" && (
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Current Explorations</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      This is where I document what I'm currently thinking
                      about, learning, and exploring in my journey of personal
                      growth.
                    </p>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg space-y-4">
                    <h3 className="text-xl font-semibold">Current Focus</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      [What you're currently focused on and exploring]
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-500 pl-4 space-y-4">
                    <h3 className="text-xl font-semibold">
                      Questions I'm Exploring
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      [Current questions and curiosities you're investigating]
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg space-y-4">
                    <h3 className="text-xl font-semibold">
                      Recent Discoveries
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      [Recent insights and learnings from your explorations]
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
