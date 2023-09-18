import React from 'react';
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import ReactImg from "../assets/react.png";
import JavaScript from "../assets/javascript.png";
import Tailwind from "../assets/tailwind.png";
import Github from "../assets/github.png";
const Skills = () => {
    return (
        <div name='skills' className='bg-black w-full h-screen  text-gray-400'>
            <div className='max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold ml-10 inline border-b-4 border-yellow-400'>Skills</p>
                    <p className='ml-10 py-4'>These are the technologies that I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                        <p className='my-4'>TAILWIND</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Github} alt="HTML icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;