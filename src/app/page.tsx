"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-4 sm:p-8">
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        <div className="flex justify-center w-full">
          <div className="relative w-40 h-40 sm:w-50 sm:h-50 md:w-60 md:h-60 lg:w-80 lg:h-80 floating">
            <a
              href="https://kyotojournal.org/society/ki-the-vital-force/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Image
                src="/logo.png"
                alt="Ki Logo"
                fill
                className="object-contain"
                priority
              />
            </a>
          </div>
        </div>

        {/* Mission Statement */}
        <section id="mission" className="space-y-4 text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Bridging the mind and body through hormonal self-awareness — helping
            women trust the wisdom within.
          </h1>
        </section>

        {/* Table of Contents */}
        <section className="space-y-4">
          <div className="flex flex-wrap justify-center gap-4 text-tx-2">
            <a
              href="#why"
              className="hover:underline px-4 py-2 rounded-full border border-current transition-all hover:bg-black hover:text-white"
            >
              My Why
            </a>
            <a
              href="#curiosities"
              className="hover:underline px-4 py-2 rounded-full border border-current transition-all hover:bg-black hover:text-white"
            >
              My Curiosities
            </a>
            <a
              href="#building"
              className="hover:underline px-4 py-2 rounded-full border border-current transition-all hover:bg-black hover:text-white"
            >
              Building Ki
            </a>
            <a
              href="#faq"
              className="hover:underline px-4 py-2 rounded-full border border-current transition-all hover:bg-black hover:text-white"
            >
              FAQ
            </a>
            <a
              href="#connect"
              className="hover:underline px-4 py-2 rounded-full border border-current transition-all hover:bg-black hover:text-white"
            >
              Connect
            </a>
          </div>
        </section>

        {/* Founder Story */}
        <section id="why" className="space-y-4">
          <h2 className="text-xl font-bold">My Why</h2>
          <div className="space-y-4 text-tx-2">
            <p>
              For years, I felt disconnected from my body — lost in a search for
              answers no one seemed to have. What I discovered changed
              everything: our bodies carry a profound, innate wisdom. But
              without the right tools, that knowledge remains hidden. Ki is the
              toolkit I needed — and am now building — so no woman has to walk
              that journey alone.
            </p>
          </div>
        </section>

        {/* Curiosities Section */}
        <section id="curiosities" className="space-y-4">
          <h2 className="text-xl font-bold">My Curiosities</h2>
          <div className="space-y-6 text-tx-2">
            <p>
              My life — and my work — are guided by a set of questions I return
              to again and again.
            </p>
            <p>
              Inspired by physicist <i>Richard Feynman's</i>{" "}
              <a
                href="https://fortelabs.com/blog/12-favorite-problems-how-to-spark-genius-with-the-power-of-open-questions/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-black/70 transition-colors"
              >
                12 Favorite Problems
              </a>{" "}
              — questions that quietly shape how we observe, learn, and create —
              I've gathered the guiding questions that define my path. These
              "favorite problems" shape the way I think, build, and live:
            </p>
            <div className="space-y-3">
              <ul className="list-inside space-y-3">
                <li>1. How do I live fully in the present moment?</li>
                <li>2. How can I create beautiful technology?</li>
                <li>
                  3. How can I learn most effectively — and continue evolving?
                </li>
                <li>
                  4. How can I ensure I am doing what is truly best for me right
                  now?
                </li>
                <li>
                  5. How can I free myself from the fear of how others perceive
                  me — and show up fully?
                </li>
                <li>6. How can I live in alignment with my truest Self?</li>
                <li>7. What makes me feel most alive?</li>
                <li>
                  8. How can I optimize my health — of sound mind, body, and
                  community?
                </li>
                <li>9. How can I provide meaningful value to others?</li>
                <li>10. What do I know to be fundamentally true?</li>
                <li>11. How do I find and live my purpose?</li>
                <li>12. Who am I?</li>
              </ul>
            </div>
            <p className="mt-6 italic">
              Ki was born at the intersection of these questions — a step toward
              bridging technology, health, and the timeless search for meaning.
            </p>
          </div>
        </section>

        {/* Building Process Section */}
        <section id="building" className="space-y-4">
          <h2 className="text-xl font-bold">Building Ki</h2>
          <div className="space-y-4 text-tx-2">
            <p>
              Every line of code, every design decision, and every feature is
              shaped by real women's experiences. I'm building Ki iteratively,
              learning from feedback, and evolving the product to truly serve
              our community's needs.
            </p>
            <div className="space-y-2">
              <p>Current Focus:</p>
              <ul className="list-inside space-y-1">
                <li>
                  • Understanding user pain points through research and
                  interviews
                </li>
                <li>• Developing intuitive tracking mechanisms</li>
                <li>• Creating meaningful data visualizations</li>
                <li>• Building a supportive community platform</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="space-y-6">
          <h2 className="text-xl font-bold">FAQ</h2>
          <div className="space-y-6 text-tx-2">
            <div className="space-y-2">
              <p className="font-semibold text-lg text-black/80 border-b border-black/10 pb-1">
                What exactly is Ki tracking?
              </p>
              <p className="pl-4 text-black/70">
                Ki tracking is a holistic approach to understanding your
                hormonal patterns. Unlike traditional period trackers, we focus
                on the complete cycle of hormonal changes and their impact on
                your physical, emotional, and mental well-being.
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-lg text-black/80 border-b border-black/10 pb-1">
                How is Ki different from other period tracking apps?
              </p>
              <p className="pl-4 text-black/70">
                Ki goes beyond simple calendar tracking. We combine modern
                technology with traditional wisdom to help you understand the
                deeper patterns of your body. Our approach emphasizes body
                literacy, intuitive tracking, and personalized insights.
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-lg text-black/80 border-b border-black/10 pb-1">
                Is Ki only for women with menstrual cycles?
              </p>
              <p className="pl-4 text-black/70">
                Ki is designed for anyone looking to better understand their
                hormonal health, including those in different life stages like
                perimenopause, post-menopause, or dealing with hormonal
                conditions.
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-lg text-black/80 border-b border-black/10 pb-1">
                How does Ki protect my privacy?
              </p>
              <p className="pl-4 text-black/70">
                Privacy is at the core of Ki's design. Your intimate health data
                stays private and secure. We follow strict data protection
                standards and never share your personal information with third
                parties.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Connect */}
        <section id="connect" className="space-y-4 text-center">
          <h2 className="text-xl font-bold">Let's Connect</h2>
          <p className="text-tx-2 italic">
            Join us in building a future where every woman has the tools to
            understand and honor her body's wisdom.
          </p>
          <a
            href="https://www.linkedin.com/in/racheltomasetti/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 text-tx-2 border border-current rounded-full transition-all hover:bg-black hover:text-white"
          >
            LinkedIn
          </a>
          <div className="mt-1">
            <a
              href="https://github.com/racheltomasetti"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 text-tx-2 border border-current rounded-full transition-all hover:bg-black hover:text-white"
            >
              Github
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
