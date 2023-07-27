import React from "react";
import linkedin from '../assets/socials/linkedin.png';
import github from '../assets/socials/github.png';
import twitter from '../assets/socials/twitter.png';
import ScrollToTop from "react-scroll-to-top";

const Contact = () => {
  return (
    <div className="md:px-10 px-7 my-10" id="contact">
      <div className="flex flex-col md:flex-row">
        {/* text and icons */}
        <div className="md:w-1/2">
        <h1 className="text-primary font-semibold text-3xl mt-16">
      Connect with me:
      </h1>
      <br></br>
      <br></br>
      {/* social icons */}
      <div className="flex ">
        <a className="ml-4" href="https://www.linkedin.com/in/anurag-dutta-522777245/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="" />
        </a>
        <a className="ml-2" href="https://github.com/iianuragii" target="_blank" rel="noreferrer">
        <img src={github} alt="" />
        </a>
        <a className="ml-4" href="https://twitter.com/_iianuragii_" target="_blank" rel="noreferrer">
        <img src={twitter} alt="" />
        </a>
      </div>
      </div>
      </div>
      <ScrollToTop smooth />
    </div>
  );
};

export default Contact;