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
        <div className="flex-1 hidden lg:block lg:mx-4" />
        {/* Center column */}
        <div className="flex-1 flex flex-col items-center justify-center py-11 lg:mx-4">
          <h2 className="text-xxl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light text-gray-700 tracking-widest uppercase text-center mb-8 whitespace-nowrap">
            building ki
          </h2>
          <hr className="w-full border-t-2 border-gray-400 my-8" />
          <h2 className="text-xxl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light text-gray-700 tracking-widest uppercase text-center mb-8 whitespace-nowrap">
            building me
          </h2>
          <div className="flex flex-1 items-center justify-center w-full min-h-[400px]">
            <Image
              src="/logo.png"
              alt="Logo"
              width={400}
              height={400}
              className="w-60 sm:w-80 md:w-[22rem] lg:w-[26rem] h-auto z-10 mx-auto"
              priority
            />
          </div>
        </div>
        {/* Right column (AboutMe) */}
        <div className="flex-1 flex flex-col items-center justify-center lg:mx-4">
          {/* <AboutMe /> */}
        </div>
      </div>
    </main>
  );
}
