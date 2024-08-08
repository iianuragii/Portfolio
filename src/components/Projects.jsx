import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Flickfile",
      description:
        "A decentralized drive aims to create a peer-to-peer network where users can upload files and grant and revoke access without relying on a central server...",
      photo: "images/img1.jpeg",
      link1: "https://github.com/iianuragii/Technoverse2k24",
    },
    {
      title: "Anushoopy",
      description:
        "E-commerce - Shopping Application(Payment option under progress)",
      photo: "images/img2.jpeg",
      link1: "https://anushoopy.netlify.app/",
    },
    {
      title: "Anu-Chatify",
      description:
        "Video-Chatting Application designed with seamless UI",
      photo: "images/img3.png",
      link1: " https://github.com/iianuragii/ANU-CHATIFY",
    },
  ];
  return (
    <div className="mpd:px-10 px-7 my-8" id="projects">
      <h1 className="text-primary font-semibold text-3xl mt-16">
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