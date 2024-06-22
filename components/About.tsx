/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const About = () => {
  return (
    <div id="why" className="bg-amber-100 min-h-screen flex items-center justify-center py-10">
      <div className="flex max-w-7xl mx-auto flex-col items-center justify-center gap-4 md:flex-row px-10 md:px-[10%]">
        <div className="flex w-full text-black flex-col items-center justify-center p-5">
          <div className="relative flex h-full w-full items-center">
            <div className="font-marker text-4xl text-center w-full mb-5 font-black">
              <p className="underline underline--2">WHY PAGIR?</p>
            </div>
          </div>
          <p className="text-lg font-normal text-center ">
            Pagir, in Tamil means “share”. Growing is hard at every age, but the transition into what society calls “adulthood” can really do a number on us. Educational and allied institutions of competitive learning are the primary places of care we have for young people today. It's clear that we need more.
            <br /> <br />
            பகிர் is a small response to this need, born of our collective experiences in the sectors of education, corporate, non-profit, technology, and the arts. It is a space for support, learning and coming together.
            <br /> <br />
            At பகிர், we want to co-create a space of support and exploration for all of us, as a community, which involves sharing, listening, and playing together. Our vision is to centre young people, whilst also weaving together a community space of art and creative nourishment for all age groups.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
