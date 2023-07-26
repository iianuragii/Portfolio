import React from "react";

const Footer = () => {
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2023 | Anurag Dutta</p>
        <p className="hidden sm:block">Fullstack Web Developer</p>
        <p className="hidden sm:block">Open-Source Enthusiast</p>
        <p className="hidden sm:block">Competitive Coder</p>
      </div>
    </div>
  );
};

export default Footer;