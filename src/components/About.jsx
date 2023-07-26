import React from "react";
import Services from "./Services";

const About = () => {
  const skills = [
    { name: "ReactJs" },
    { name: "Java" },
    { name: "C",},
    { name: "Python",},
    { name: "MongoDb",},
    { name: "MySql",},
    { name: "NodeJS",},
    { name: "Softskills",},
  ];
  return (
    <div className="md:px-10 px-7 sm:-mt-24" id="about">
      <h1 className="text-primary font-semibold text-3xl mt-5">About me:</h1>
      <p className="my-3 text-white md:w-2/3 leading-[2]">
        Hii, my name is Anurag Dutta. I'm a BTech Computer Science
        Undergrad at Heritage Institute of Technology Kolkata.
        I'm a Full-Stack web developer, 
        Competitve Coder and a Open-Source Enthusiast. Apart 
        from coding I love to play Guitar and do photography in my free time.
      </p>
      <div className="md:flex my-7 items-center">
        <div className="text-primary text-8xl font-bold">1.5+</div>
        <p className="text-white text-2xl md:ml-5">
          Years of experience. Specialised in building Web apps and contributions in Open-Source World.
        </p>
      </div>

      {/* skills */}
      <div className="text-light text-4xl font-bold">Skills:-</div>
      <div className="flex flex-col md:flex-row ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="md:w-[150px] md:h-[70px] bg-primary hover:bg-light flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500 cursor=pointer"
          >
            
            <p className="mt-3 text-2xl text-white font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* services section */}
      <Services/>
    </div>
  );
};

export default About;