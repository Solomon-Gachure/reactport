import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home'className='w-full h-screen bg-black'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
<h1 className='text-orange-400'>Hello there, my name is</h1>
<h1 className='text-4xl sm:text-2xl font-bold text-green-400'>Solomon Gachure</h1>
              <h2 className='text-4xl sm:text-2xl font-bold text-green-400'>I am a FrontEnd Developer</h2>
<p className='text-green-200 py-4 max-w-[700px]'>I am FrontEnd Developer who creates exciting and helpful website applications with a vision of solving everyday problem through code.</p>
              <div>
                  <button className='text-white group border-2 px-4 py-3 my-2 flex items-center hover:bg-green-500 hover:border-green-500'>View Work 
                  <span className='group-hover:rotate-90 duration-300'>
                      <HiArrowNarrowRight className='ml-3 ' />
                      </span>
                      </button>
              </div>
        </div>
        
    </div>
  )
}

export default Home