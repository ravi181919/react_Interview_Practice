import React from "react";
import mainLogo from "/mainLogo.avif";
const Intro = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center m-auto relative">
      <img
        loading="lazy"
        src={mainLogo}
        alt="Intro-image"
        className="w-60 h-60 object-cover"
      />
    </div>
  );
};

export default Intro;
