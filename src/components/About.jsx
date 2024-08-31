import React from "react";
import Services from "./Services";

const About = () => {
  const skills = [
    { name: "Java" },
    { name: "React.js" },
    { name: "MUI" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "MongoDb" },
    { name: "Sql" },
    { name: "C" },
    { name: "Git" },
  ];

  return (
    <div
      id="aboutme"
      style={{
        padding: '2.5rem 1.75rem',
        backgroundColor: '#12121a',
        color: '#ffffff',
        minHeight: '100vh',
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
        About Me:
      </h1>

      <div
        style={{
          margin: '0 auto 1.25rem auto',
          lineHeight: '1.75',
          color: '#d1d1d1',
          maxWidth: '66%',
        }}
      >
        <p style={{ marginBottom: '1rem' }}>
          Hi, my name is Anurag Dutta. I'm a B.Tech 4th year Computer Science Engineering 
          undergrad at Heritage Institute of Technology Kolkata.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          I am fluent in well-known languages like Java (Proficient), C, and JavaScript. 
          My areas of interest lie in Web Development and Problem Solving. I am also an 
          Open-Source Enthusiast.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Apart from coding, I love to play cricket and do photography in my free time.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '2.5rem 0',
          gap: '1rem',
        }}
      >
        <div
          style={{
            color: '#ff9800',
            fontSize: '6rem',
            fontWeight: '700',
          }}
        >
          2.0+
        </div>
        <p
          style={{
            color: '#ffffff',
            fontSize: '1.5rem',
            maxWidth: '80%',
            margin: '0',
          }}
        >
          Years of academic and internship experience. Specialized in building web apps, 
          software, and contributions to the Open-Source community.
        </p>
      </div>

      {/* Skills Section */}
      <div style={{ margin: '2.5rem 0' }}>
        <h2
          style={{
            color: '#d1d1d1',
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '1.25rem',
          }}
        >
          Skills:
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1.25rem',
            maxWidth: '100%',
            justifyContent: 'center',
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#1a1a29',
                padding: '1.25rem',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                borderRadius: '0.375rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                textAlign: 'center',
                color: '#ffffff',
                fontSize: '1.25rem',
                fontWeight: '600',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ff9800'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1a1a29'}
            >
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <Services />
    </div>
  );
};

export default About;
