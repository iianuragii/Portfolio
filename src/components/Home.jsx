import React from 'react';
import img2 from '../../public/images/profile.png';

const Home = () => {
    return (
        <section
            id="home"
            style={{
                background: 'linear-gradient(to bottom, #1a1a29, #12121a)',
                color: '#ffffff',
                padding: '1rem',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    maxWidth: '1200px',
                    height: '100%',
                    textAlign: 'center',
                    gap: '2rem',
                }}
            >
                {/* Text Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                        textAlign: 'center',
                    }}
                >
                    <h6
                        style={{
                            color: '#ff9800',
                            fontSize: '1.5rem',
                            marginTop: '2rem',
                        }}
                    >
                        Hello, I'm
                    </h6>
                    <h1
                        style={{
                            color: '#ffffff',
                            fontWeight: '600',
                            fontSize: '2.5rem',
                            // margin: '1rem 0',
                        }}
                    >
                        Anurag Dutta
                    </h1>
                    {/* <ul
                        style={{
                            color: '#d1d1d1',
                            listStyle: 'none',
                            padding: '0',
                            marginBottom: '1.5rem',
                            fontSize: '1rem',
                            lineHeight: '1.5',
                        }}
                    >
                        <li>Fullstack Web Developer</li>
                        <li>Problem Solver</li>
                        <li>Open-Source Enthusiast</li>
                    </ul> */}
                    
                    {/* Internships */}
                    <div
                        style={{
                            fontSize: '1rem',
                            fontWeight: '500',
                            color: '#d1d1d1',
                            marginBottom: '1.5rem',
                            lineHeight: '1.5',
                        }}
                    >
                        <div>Software Engineer Intern @ Siemens EDA</div>
                        <div>Frontend Developer Intern @ A2D Innovations Pvt Ltd</div>
                        <div>FullStack Developer Intern @ The Bengal Studio</div>
                    </div>
                    
                    {/* Resume Button */}
                    <a
                        href="https://drive.google.com/file/d/1ntDjF-wEo-gJlS3pWLOlHhe6y82CTWLv/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.5rem',
                            backgroundColor: '#ff9800',
                            color: '#ffffff',
                            borderRadius: '9999px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            textDecoration: 'none',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        View Resume
                    </a>
                </div>

                {/* Profile Image */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src={img2}
                        alt="Profile"
                        style={{
                            width: '12rem',
                            height: '12rem',
                            borderRadius: '50%',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                            transform: 'scale(1)',
                            transition: 'transform 0.3s ease',
                        }}
                        className="profile-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;
