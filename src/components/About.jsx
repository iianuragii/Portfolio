import React from "react";
import Services from "./Services";

const About = () => {
  const skills = [
    { name: "Java" },
    { name: "ReactJs" },
    { name: "MUI",},
    { name: "NodeJS",},
    { name: "MongoDb",},
    { name: "Sql",},
    { name: "C++",},   
    { name: "Git",},
  ];
  return (
    <div className="md:px-10 px-7 sm:-mt-30" id="aboutme">
      <h1 className="text-tertiary font-semibold text-3xl mt-5">About me:</h1>
      <div className="my-3 text-white1 md:w-2/3 leading-[2]">
        Hii, my name is Anurag Dutta. I'm a B.Tech 4th year Computer Science Engg.
        Undergrad at Heritage Institute of Technology Kolkata.
      </div>
      <div className="my-3 text-white1 md:w-2/3 leading-[2]">
        I am fluent in well known languages like Java and C++.         
        My area of interest lies in Web Development and Gen AI. I am also an Open-Source Enthusiast. 
      </div>
      <div className="my-3 text-white1 md:w-2/3 leading-[2]">  
        Apart fom coding I love to play Cricket and do photography in my free time.
      </div>
      <div className="md:flex my-7 items-center">
        <div className="text-primary text-8xl font-bold">2.0+</div>
        <p className="text-white text-2xl md:ml-5">
          Years of academic and internship experience. Specialised in building Web apps, softwares and contributions in Open-Source World.
        </p>
      </div>

      {/* skills */}
      <div className="text-white1 text-4xl font-bold">Skills:-</div>
      <div className="flex flex-col md:flex-row ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="md:w-[150px] md:h-[70px] bg-tertiary hover:bg-primary flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500 cursor=pointer"
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