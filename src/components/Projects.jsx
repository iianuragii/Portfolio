import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Flickfile",
      description:
        "A decentralized drive that aims to create a peer-to-peer network where users can upload files and grant or revoke access without relying on a central server...",
      photo: "images/flickfile.PNG",
      link1: "https://github.com/iianuragii/Technoverse2k24",
    },
    {
      title: "PujoQio",
      description:
        "A real-time web application to guide users through Durga Puja, India's largest festival.",
      photo: "images/pujoqio.PNG",
      link1: "https://github.com/iianuragii/PujoQio",
    },
    {
      title: "Anushoopy",
      description:
        "An e-commerce shopping application (Payment option under progress).",
      photo: "images/img2.jpeg",
      link1: "https://github.com/iianuragii/AnuShoopy",
    },
  ];

  return (
    <div
      id="projects"
      style={{
        padding: '2.5rem 1.75rem',
        backgroundColor: '#12121a',
        color: '#ffffff',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          color: '#ff9800',
          fontWeight: '700',
          fontSize: '2.5rem',
          marginBottom: '1.25rem',
        }}
      >
        My Projects:
      </h1>
      <p
        style={{
          margin: '1rem auto',
          color: '#d1d1d1',
          maxWidth: '75%',
          lineHeight: '1.75',
        }}
      >
        Here are a few of my projects, either completed or currently in progress.
      </p>

      {/* Featured Projects */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', // Default to three columns
          gap: '1.75rem',
          marginTop: '1.5rem',
          justifyContent: 'center', // Center the grid items horizontally
        }}
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link1}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#31313F',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              color: 'inherit',
              height: '100%',
              maxWidth: '300px',
            }}
            className="hover:shadow-xl hover:scale-105"
          >
            <img
              src={project.photo}
              alt={project.title}
              style={{
                width: '100%',
                height: '12rem',
                objectFit: 'cover',
                borderRadius: '0.375rem',
                marginBottom: '1rem',
                transition: 'transform 0.3s ease',
              }}
              className="hover:scale-105"
            />
            <h3
              style={{
                color: '#ff9800',
                fontWeight: '600',
                fontSize: '1.25rem',
                marginBottom: '0.5rem',
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                color: '#d1d1d1',
                fontSize: '0.875rem',
              }}
            >
              {project.description}
            </p>
          </a>
        ))}
      </div>

      {/* Responsive adjustments */}
      <style>
        {`
          @media (max-width: 768px) {
            #projects > div {
              grid-template-columns: repeat(2, 1fr); /* Two columns on tablets */
            }
          }

          @media (max-width: 480px) {
            #projects > div {
              grid-template-columns: 1fr; /* Single column on mobile */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Projects;
