import React from 'react';

const Services = () => {
    const services = [
    
        {id:1, name:'WEB DEVELOPMENT', description:'I am a FULL stack Web developer with an expertise in MERN.', image:'images/code.png'},
        {id:2, name:'PROBLEM SOLVING', description:'I have solved over 230 problems at leetcode. I am a 5* coder at Hackerrank and have also solved over 100 questions at gfg. The programming languages that I know are Java and C++.', image:'images/android.png'},
        {id:3, name:'OPEN-SOURCE CONTRIBUTOR', description:'I have over 400+ contributions in Github and have participated in open source events like Hacktoberfest, GSSOC and SWOC.', image:'images/git-repo.png'},
    ];
    return (
        <div>
              <h1 className="text-primary font-semibold text-3xl mt-14">My Area of expertise:-</h1>
              <div className='grid md:grid-cols-3 my-8 gap-5'>
              {
                services.map(service => <div key={service.id} className='service-card flex flex-col justify-center items-center p-6 text-center text-white1'>
                    <img src={service.image} alt="" className='mb-3' />
                    <h6 className='text-primary text-2xl mb-4'>{service.name}</h6>
                    <p className='text-base'>{service.description}</p>
                </div>)
              }
              </div>
        </div>
    );
};

export default Services;