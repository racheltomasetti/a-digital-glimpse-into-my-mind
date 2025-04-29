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
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Bridging the mind and body through hormonal self-awareness —
              helping women trust the wisdom within.
            </h1>
            <div className="w-full h-px bg-black/10 mt-6"></div>
          </div>
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
          <div>
            <h2 className="text-xl font-bold">My Why</h2>
            <div className="w-full h-px bg-black/10 mt-2"></div>
          </div>
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
          <div>
            <h2 className="text-xl font-bold">My Curiosities</h2>
            <div className="w-full h-px bg-black/10 mt-2"></div>
          </div>
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
          <div>
            <h2 className="text-xl font-bold">Building Ki</h2>
            <div className="w-full h-px bg-black/10 mt-2"></div>
          </div>
          <div className="space-y-6 text-tx-2">
            <p>Building Ki has been a journey of learning in every sense.</p>
            <p>
              I didn't start this project already knowing how to build it — I
              had to teach myself how to build, while simultaneously discovering
              what to build.
            </p>
            <p>
              It has been an ongoing cycle of exploration, creation, feedback,
              and iteration — learning technical skills, deepening my
              understanding of women's health, and refining how technology can
              truly serve us, not just track us.
            </p>

            <div className="space-y-4">
              <p className="font-medium text-lg">
                At the heart of Ki's design process:
              </p>

              <div className="space-y-6">
                <div className="p-4 border border-black/10 rounded-lg hover:border-black/20 transition-all">
                  <p className="font-semibold text-black/80 mb-2">
                    Listening First
                  </p>
                  <p className="text-black/70">
                    Understanding real experiences, needs, and frustrations of
                    women navigating their health.
                  </p>
                </div>

                <div className="p-4 border border-black/10 rounded-lg hover:border-black/20 transition-all">
                  <p className="font-semibold text-black/80 mb-2">
                    Designing with Purpose
                  </p>
                  <p className="text-black/70">
                    Every feature stems from a simple question — how can this
                    help a woman better trust her body today?
                  </p>
                </div>

                <div className="p-4 border border-black/10 rounded-lg hover:border-black/20 transition-all">
                  <p className="font-semibold text-black/80 mb-2">
                    Building for Alignment
                  </p>
                  <p className="text-black/70">
                    Ensuring that Ki bridges the mind and body, helping women
                    live more connected, empowered lives.
                  </p>
                </div>

                <div className="p-4 border border-black/10 rounded-lg hover:border-black/20 transition-all">
                  <p className="font-semibold text-black/80 mb-2">
                    Iterating Constantly
                  </p>
                  <p className="text-black/70">
                    No single solution is final. Every prototype, every test is
                    a stepping stone toward deeper insight and better design.
                    And just like we are constantly evolving, Ki is too — a
                    living system that will continue to grow, learn, and adapt
                    alongside the women it serves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="space-y-6">
          <div>
            <h2 className="text-xl font-bold">FAQ</h2>
            <div className="w-full h-px bg-black/10 mt-2"></div>
          </div>
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
                We combine modern technology with body literacy principles to
                help women understand the patterns behind their cycles — not
                just dates. Our focus is intuitive tracking, tailored insights,
                and true mind-body alignment.
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-lg text-black/80 border-b border-black/10 pb-1">
                Is Ki only for women with menstrual cycles?
              </p>
              <p className="pl-4 text-black/70">
                Ki is designed for anyone seeking deeper hormonal
                self-awareness, across different life stages — including
                perimenopause, post-menopause, and hormonal conditions. Our
                mission is to empower all users to understand and work with
                their bodies, wherever they are in their journey.
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-lg text-black/80 border-b border-black/10 pb-1">
                How does Ki protect user privacy?
              </p>
              <p className="pl-4 text-black/70">
                Privacy is foundational to Ki’s design. All health data is
                securely stored and never sold to third parties. Users have full
                ownership of their data — we believe bodily autonomy extends to
                digital autonomy.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Connect */}
        <section id="connect" className="space-y-4 text-center">
          <div>
            <h2 className="text-xl font-bold">Let's Connect</h2>
            <div className="w-full h-px bg-black/10 mt-2"></div>
          </div>
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
