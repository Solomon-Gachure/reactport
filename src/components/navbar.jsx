import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import profile from '../assets/newp.png'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick=()=>setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300'>
            <div>
                <img src={profile} alt="Profile pic" style={{ width: '90px' }} />
            </div>
            <div>
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>
            <ul className={!nav ? 'hidden' :'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'} >
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>
            <div className='flex fixed flex-col top-[35%] left-0'>
<ul>
                    <li className='w-[150px] h-[30px] justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full  text-gray-300'
href="/">
    Linkedin <FaLinkedin size={30}/>
</a>
        </li>
                    <li className='w-[150px] h-[30px] justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
                        <a className='flex justify-between items-center w-full  text-gray-300'
                            href="/">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[150px] h-[30px] justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500'>
                        <a className='flex justify-between items-center w-full  text-gray-300'
                            href="/">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[150px] h-[30px] justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-purple-600'>
                        <a className='flex justify-between items-center w-full  text-gray-300'
                            href="/">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
        </ul>
            </div>
        </div>
    );
};

export default Navbar