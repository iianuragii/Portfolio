import React from "react";
import linkedin from '../assets/socials/linkedin.png';
import github from '../assets/socials/github.svg';
import twitter from '../assets/socials/twitter.png';
import ScrollToTop from "react-scroll-to-top";
import './styles.css';

const Contact = () => {
  return (
    <div className="main-foot" id="contact">
      <div className="feet">
        <h1 className="text-primary font-semibold text-3xl mt-16">
          GET IN TOUCH
        </h1>
      </div>
      <br></br>
      <br></br>
      {/* social icons */}
      <div className="items">
        <a className="foot1" href="https://www.linkedin.com/in/anurag-dutta-522777245/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="" />
        </a>
        <a className="foot2" href="https://github.com/iianuragii" target="_blank" rel="noreferrer">
        <img src={github} alt="" />
        </a>
        <a className="foot3" href="https://twitter.com/_iianuragii_" target="_blank" rel="noreferrer">
        <img src={twitter} alt="" />
        </a>
      </div>
      <ScrollToTop smooth />
    </div>
  );
};

export default Contact;