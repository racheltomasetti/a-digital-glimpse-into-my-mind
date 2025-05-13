"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col items-center"
      style={{ background: "#fffcef" }}
    >
      <div className="flex flex-col items-center mt-8 mb-8">
        <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-light text-gray-700 tracking-widest uppercase text-center mt-4">
          building ki / building me
        </h2>
        <hr className="w-3/3 border-t-1 border-gray-700 my-4" />
        <div className="relative flex items-center justify-center w-fit">
          <Image
            src="/logo.png"
            alt="Logo"
            width={224}
            height={224}
            className="w-24 sm:w-32 md:w-44 lg:w-56 h-auto z-10"
            priority
          />
          <Image
            src="/flower.png"
            alt="Flower Left"
            width={64}
            height={128}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 w-14 sm:w-16 md:w-20 lg:w-24 h-auto z-20"
            priority
          />
          <Image
            src="/flower.png"
            alt="Flower Right"
            width={64}
            height={128}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-14 sm:w-16 md:w-20 lg:w-24 h-auto scale-x-[-1] z-20"
            priority
          />
        </div>
      </div>
      {/* Content goes here */}
    </main>
  );
}
