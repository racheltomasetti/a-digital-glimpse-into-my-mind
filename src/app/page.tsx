"use client";
import Image from "next/image";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col items-center"
      style={{ background: "#fffcef" }}
    >
      <div className="w-full flex flex-col lg:flex-row justify-center items-stretch max-w-6xl mx-auto">
        {/* Left column (empty for now) */}
        <div className="hidden lg:block flex-[1_1_20%] lg:mx-4" />
        {/* Center column */}
        <div className="flex flex-col items-center justify-center py-11 lg:mx-4 flex-[3_1_60%]">
          <div className="relative flex items-center justify-center w-full mb-8">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
              <Image
                src="/glow.png"
                alt="Glow background"
                width={200}
                height={200}
                className="w-60 sm:w-80 md:w-[22rem] lg:w-[26rem] h-auto opacity-55"
                aria-hidden="true"
              />
            </div>
            <h2 className="relative z-10 text-xxl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light text-gray-700 tracking-widest uppercase text-center mb-0 whitespace-nowrap">
              building ki
            </h2>
          </div>
          <hr className="w-full border-t-2 border-gray-400 my-8" />

          <section className="max-w-2xl mx-auto text-gray-800 text-base sm:text-lg leading-relaxed mb-10 px-2">
            <p className="mb-6 font-medium">
              Hi, I'm Rachel Tomasetti. This is the story of how I've been
              building myself—and how that path led me to explore how we can use
              technology to{" "}
              <span className="font-bold italic">unlock the mind</span>. That
              exploration is now guiding my mission:{" "}
              <span className="font-bold">building Ki</span>, a tool to help
              women understand their inner patterns and{" "}
              <span className="font-bold italic">
                unlock their full potential
              </span>{" "}
              through technology.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-2">
              The Shift
            </h3>
            <hr className="w-3/4 border-t-2 border-gray-400 my-4" />
            <p className="mb-4">
              When I moved to Miami for college, I didn't have a roadmap. I was
              finally on my own, and I ran with that freedom—oftentimes in the
              wrong direction. I made decisions that left me feeling{" "}
              <span className="font-bold ">
                disconnected, burned out, and unsure of who I was
              </span>
              . <br />
              <br />
              At the time, I couldn’t explain why I felt so off. I was going
              through the motions, but none of it felt like me. By the end of
              sophomore year, I had completely lost touch with myself. That was
              the moment I started asking:{" "}
              <span className="font-bold italic">
                what if this isn't how it has to be?
              </span>
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-2">
              Looking Inward
            </h3>
            <hr className="w-3/4 border-t-2 border-gray-400 my-4" />
            <p className="mb-4">
              I started journaling. Running. Learning how to eat in a way that
              fueled my body instead of punishing it. Day by day, habit by
              habit, I was slowly rebuilding myself. I became obsessed with the
              <span className="font-bold "> process of growth</span>—what made
              me feel better, stronger, more grounded.
            </p>
            <p className="mb-4">
              And as I started learning how my body actually works, I realized
              something much bigger:{" "}
              <span className="font-bold italic">
                no one had ever really taught me this
              </span>
              . I didn't know how my hormones affected my energy, focus, or
              motivation. I didn't understand my cycle beyond "you get your
              period once a month." That gap wasn't just mine—it was{" "}
              <span className="underline font-bold">everywhere</span>.
            </p>
            <p className="mb-4">
              Most women grow up disconnected from what's happening inside their
              bodies. And we don't even realize it—until we start paying
              attention and see how much has been left out.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-2">
              Becoming Through Building
            </h3>
            <hr className="w-3/4 border-t-2 border-gray-400 my-4" />
            <p className="mb-4">
              While I was rebuilding myself, I was also learning how to build.
              As I slowly began to understand the potential of technology, I
              started to see what this tool could truly become—a space to
              explore the Self.{" "}
              <span className="font-bold">A yoga mat for the mind.</span>
            </p>
            <p className="mb-4">
              That's where Ki began. Not just as an idea, but as a personal
              mission. Ki is a tool for self-awareness. It combines{" "}
              <span className="italic">
                behavioral journaling and cycle tracking,{" "}
                <span className="font-bold">super-charged with AI </span>
              </span>
              into one system designed to help women understand themselves more
              deeply.
            </p>
            <p className="mb-2">Ki helps users:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Track how they feel, move, and eat across their cycle</li>
              <li>Set goals that align with their natural rhythm</li>
              <li>
                Reflect and surface patterns that were previously hard to see
              </li>
              <li>
                And most importantly, develop the self-awareness to make
                <span className="font-bold"> intentional, lasting change.</span>
              </li>
            </ul>
            <p className="mb-4">
              The more data users log, the smarter the system gets—connecting
              dots over time and giving them insight into how they actually
              work, not how they're supposed to work.
            </p>
            <p className="mb-4">
              At its core, Ki is a tool for{" "}
              <span className="font-bold italic">unlocking the Self</span>
              —cutting through the noise and tuning back into{" "}
              <span className="italic">your own internal rhythm</span>.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-2">
              My Why
            </h3>
            <hr className="w-3/4 border-t-2 border-gray-400 my-4" />
            <p className="mb-4">
              Ki didn't come from a sudden idea. It came from lived
              experience—months of tracking, reflecting, and realizing how much
              of my potential was going unused until I started understanding my
              body.
            </p>
            <p className="mb-4">
              The more I aligned with my own rhythm, the more everything started
              to make sense. Patterns appeared. Decisions became easier. I felt
              <span className="italic"> stronger</span>, more{" "}
              <span className="italic">clear</span>, more{" "}
              <span className="italic font-bold">myself</span>.
            </p>
            <p className="mb-4">
              That's when it hit me: this isn't just personal—it's systemic.
              Most women are walking around with an entire layer of intelligence
              they've{" "}
              <span className="underline italic">
                never been given the tools to access
              </span>
              .
            </p>
            <p className="mb-4">
              <span className="font-bold">My mission is to change that.</span>
              <br />
              <br />I want to create a tool that gives women access to something
              they've always had: their{" "}
              <span className="italic">own body's intelligence</span>
              .
              <br />
              <br />I want to make self-understanding not just accessible, but
              intuitive. Seamless. A process that{" "}
              <span className="font-bold italic">feels like magic.</span>
            </p>
            <p className="mb-4">
              {" "}
              <span className="font-bold">
                {" "}
                This isn't just a project. It's a mirror
              </span>
              . <br /> <br />
              Building Ki has been a reflection of building myself—learning what
              I'm capable of, while learning what technology is capable of. And
              somewhere in the middle of that process, the two journeys met.{" "}
              <br />
              <br />
              <span className="font-bold italic">
                That intersection is where Ki lives.
              </span>
              <br />
              <br />
              It's where self-discovery meets creation. Because once you see
              what's possible—within you, and through what you can build—you
              can't unsee it.{" "}
              <span className="font-bold ">
                And I believe{" "}
                <span className="italic">
                  every woman deserves to feel that clarity and power within
                  herself.
                </span>
              </span>
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-2">
              The Future We Are Building
            </h3>
            <hr className="w-3/4 border-t-2 border-gray-400 my-4" />
            <p className="mb-4">
              <span className="font-bold italic">
                We are just at the beginning.
              </span>
            </p>
            <p className="mb-4">
              We're starting with a{" "}
              <span className="font-bold italic">
                intentional and intuitive system
              </span>{" "}
              that helps women track their cycles, habits, and
              reflections—capturing the{" "}
              <span className="underline">daily context</span> behind how they
              feel and function. But this is only the surface layer.
            </p>
            <p className="mb-4">
              The long-term vision is to build the{" "}
              <span className="font-bold italic">
                intelligence layer for women's health
              </span>
              .
            </p>
            <p className="mb-4">
              We're creating a{" "}
              <span className="italic">personalized system</span> that doesn't
              just collect data—{" "}
              <span className="font-bold">it connects it</span>. Building a
              network of AI agents that work together to understand your
              patterns, anticipate your needs, and guide you toward{" "}
              <span className="italic">alignment</span>. Not just with your
              health, <span className="underline">but with your life.</span>
            </p>
            <p className="mb-4">
              Over time, Ki will continue evolving into a toolkit designed to
              be:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>
                <span className="font-bold italic">
                  A personalized operating system
                </span>{" "}
                that adapts to your rhythm—syncing your inputs, behaviors, and
                biology
              </li>
              <li>
                <span className="italic font-bold">
                  A self-learning framework
                </span>{" "}
                that helps women make better decisions without the cognitive
                overload
              </li>
              <li>
                <span className="font-bold italic">A health platform</span> that
                doesn't just react to symptoms, but proactively supports
                well-being across{" "}
                <span className="italic">mental, physical, and emotional</span>{" "}
                dimensions
              </li>
              <li>
                <span className="italic font-bold">
                  A foundational infrastructure
                </span>{" "}
                for behavior-aware tools that plug into wearables, calendars,
                nutrition logs, and reflections to deliver truly{" "}
                <span className="italic">personalized guidance</span>
              </li>
            </ul>
            <p className="mb-4">
              We're not building another tracker or a surface-level app. We're
              building a{" "}
              <span className="font-bold italic">holistic experience</span>
              —rooted in design, powered by AI, and deeply focused on the end
              user. What starts as a journaling tool becomes an{" "}
              <span className="italic">intelligent, adaptive assistant</span>
              —one that{" "}
              <span className="italic font-bold underline">
                learns how to help you learn, live, and thrive
              </span>
              .
            </p>
            <p className="mb-4">
              And at its core, Ki is still what it started as:{" "}
              <span className="font-bold italic">a mirror</span>. A space for
              women to <span className="italic">understand themselves</span>,{" "}
              <span className="italic">trust themselves</span>, and{" "}
              <span className="font-bold">
                unlock the potential that's{" "}
                <span className="underline">been there all along</span>.
              </span>
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-2">
              What's Next: Into the Unknown
            </h3>
            <hr className="w-3/4 border-t-2 border-gray-400 my-4" />
            <p className="mb-4">
              <span className="italic">
                This is personal. But it's also massive
              </span>
              . Women's health is a $1T+ market that's been{" "}
              <span className="font-bold">
                underserved and overlooked for decades
              </span>
              . The future of health is{" "}
              <span className="italic">
                personal, proactive, and intelligent
              </span>
              . Ki is building the foundation—starting from the inside out.{" "}
              <br />
              <br />{" "}
              <span className="font-bold italic">
                Because I've learned: when you understand your Self,{" "}
                <span className="underline">you unlock everything else.</span>
              </span>
            </p>
          </section>
          <hr className="w-full border-t-2 border-gray-400 my-8" />
          <div className="relative flex items-center justify-center w-full mb-8">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
              <Image
                src="/glow.png"
                alt="Glow background"
                width={200}
                height={200}
                className="w-60 sm:w-80 md:w-[22rem] lg:w-[26rem] h-auto opacity-55"
                aria-hidden="true"
              />
            </div>
            <h2 className="relative z-10 text-xxl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light text-gray-700 tracking-widest uppercase text-center mb-8 whitespace-nowrap">
              building me
            </h2>
          </div>
          {/* <div className="flex flex-1 items-center justify-center w-full min-h-[400px]">
            <Image
              src="/logo.png"
              alt="Logo"
              width={400}
              height={400}
              className="w-60 sm:w-80 md:w-[22rem] lg:w-[26rem] h-auto z-10 mx-auto"
              priority
            />
          </div> */}
        </div>
        {/* Right column (AboutMe) */}
        <div className="flex flex-col items-center justify-center lg:mx-4 flex-[1_1_20%]">
          {/* <AboutMe /> */}
        </div>
      </div>
    </main>
  );
}
