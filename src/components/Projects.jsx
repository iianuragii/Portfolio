import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Weather Website",
      description:
        "A Website used to display the temperature and other climatic behaviors of any cities you want..",
      photo: "/src/assets/projects/img1.jpeg",
    },
    {
      title: "Anushoopy",
      description:
        "E-commerce - Shopping Application",
      photo: "/src/assets/projects/img2.jpeg",
    },
    {
      title: "Anuchatify",
      description:
        "Chatting Application designed with seamless UI",
      photo: "/src/assets/projects/img3.png",
    },
    {
      title: "Url shortener",
      description:
        "Used to shorten URL links",
      photo: "/src/assets/projects/img4.avif",
    },
  ];
  return (
    <div className="md:px-10 px-7 my-8" id="projects">
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
                href={project.photo}
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <img src={project.photo} alt={project.title} />
              </a>
              <h3 className="text-primary font-semibold text-lg">
                {project.title}
              </h3>
              <p className=" text-white mt-1">{project.description}</p>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;