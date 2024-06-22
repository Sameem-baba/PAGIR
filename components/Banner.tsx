"use client";

import Link from "next/link";
import React, { Suspense } from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(/bgImage.jpg)`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
      className="text-white snap-center min-h-screen md:h-screen w-full text-center overflow-x-hidden flex flex-col items-center justify-center  relative md:py-0"
    >
      <div
        className="absolute bottom-0 z-0 h-[100vh] w-full "
        style={{
          background: "rgba(0,0,0,0.2)",
          backgroundImage: `linear-gradient(to top, rgba(0,0,0, 4) 0, rgba(0,0,0,0) 60%, rgba(0,0,0,0.2) 100%)`,
        }}
      />
      <div className="w-full z-10  justify-center items-center px-4 md:px-0  flex flex-col space-y-3">
        <p className="uppercase tracking-widest text-xl font-bold text-[#008000]">
          exploration and discovery of our many different selves through art        </p>
        <h1 className="text-3xl uppercase tracking-wide font-medium">
          community space enabling safe creative expression for young people        </h1>
        <div className="flex flex-col space-y-4 items-center justify-center md:space-y-0 md:flex-row md:space-x-4">
          <Link
            href="#about"
            className="px-4 py-2 rounded-lg flex items-center justify-center uppercase tracking-widest border-2 border-[#008000] bg-[#008000] transition-all duration-200 ease-in"
          >
            More About us
          </Link>
          <Link
            href="mailto:pagir44.41@gmail.com"
            className="px-4 py-2 rounded-lg flex items-center justify-center uppercase tracking-widest border-2 border-[#008000] transition-all duration-200 ease-in"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
