"use client";

import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const SocialIcons = (props: Props) => {
  const [hoveredIcon, setHoveredIcon] = useState("");

  return (
    <div>
      <div className="items-center flex space-x-2">
        {/* <button className="px-4 text-white font-semibold py-2 rounded-md flex items-center justify-center uppercase  tracking-widest bg-[#008000] transition-all duration-200 ease-in">
          Donate
        </button> */}

        <SocialIcon
          url="mailto:pagir44.41@gmail.com"
          target="_blank"
          onMouseEnter={() => setHoveredIcon("facebook")}
          onMouseLeave={() => setHoveredIcon("")}
          fgColor={hoveredIcon == "facebook" ? "#008000" : "white"}
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/pagirchennai41"
          target="_blank" //so that the link opens in new tab
          onMouseEnter={() => setHoveredIcon("instagram")} //onmouseenter is an inbuilt function for anything when mouse goes on a position
          onMouseLeave={() => setHoveredIcon("")} // this needs to be done or else the icon would stay purple
          fgColor={hoveredIcon == "instagram" ? "#008000" : "white"}
          bgColor="transparent"
        />
      </div>
    </div>
  );
};

export default SocialIcons;
