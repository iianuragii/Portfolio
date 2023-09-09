import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Weather Website",
      description:
        "A Website used to display the temperature and other climatic behaviors of any cities you want..",
      photo: "images/img1.jpeg",
      link1: "https://anuragsweatherwebsite.netlify.app/",
    },
    {
      title: "Anushoopy",
      description:
        "E-commerce - Shopping Application(Payment option under progress)",
      photo: "images/img2.jpeg",
      link1: "https://anushoopy.netlify.app/",
    },
    {
      title: "Anuchatify",
      description:
        "Chatting Application designed with seamless UI",
      photo: "images/img3.png",
      link1: " https://github.com/iianuragii/node-chat-app",
    },
    {
      title: "Url shortener",
      description:
        "Used to shorten URL links(Front-end Under Progress)",
      photo: "images/img4.avif",
      link1: "https://github.com/iianuragii/Link-shortener",
    },
  ];
  return (
    <div className="mpd:px-10 px-7 my-8" id="projects">
      <h1 className="text-rimary font-semibold text-3xl mt-16">
          My Projects:
      </h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
        Here are my few projects which I have either completed or is still under progress.
      </p>
      {/* featured projects */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
            >
              <a
                href={project.link1}
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <img src={project.photo} alt={project.title} />
              
              <h3 className="text-primary font-semibold text-lg">
                {project.title}
              </h3>
              <p className=" text-white1 mt-1">{project.description}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;