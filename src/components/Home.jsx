import React from 'react';
import './styles.css';
import img2 from '../assets/img2.png'

const Home = () => {
    return (
        <div className='md:px-10 px-7 my-14 md:h-screen bg-[#1a1a29]' id='home'>
            <div>
                <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                    <div className='text-white'>
                        <h6 className='text-primary text-3xl mt-12'>Hello, I'm</h6>
                        <h1 className='text-tertiary font-semibold md:text-5xl my-4 text-3xl'>Anurag Dutta</h1>
                        <li className='text-light md:w-93'>Fullstack Web developer</li>
                        <li className='text-light md:w-93'>Open-Souce Enthusiast</li>
                        <li className='text-light md:w-93'>Competative Coder</li>
                        <br></br>
                        
                        <div className='text-tertiary font-semibold md:text-4xl my-4 text-3xl'>Developer Intern @The Bengal Studio</div>
                        <button className='resume'><a href="https://drive.google.com/file/d/1i3YWc-a4fpjOVePMjUC9AAXu9Jou6PvK/view?usp=sharing">Resume</a></button>
                    </div>
                    {/* img */}
                    <div className='order-first md:order-last relative'>
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>
            <div className='h-24 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block'>
            </div>
        </div>
    );
};

export default Home;