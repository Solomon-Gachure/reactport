import React from 'react'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-400 bg-black'>
<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-400 border-yellow-500'>Work</p>
        <p className='py-6'>Check out my work portfolio as below</p>
    </div>
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <div>
            <div>
                <span></span>
                <div>
                   <a href="/">
                    <button></button>
                    </a>
                              <a href="/">
                                  <button></button>
                              </a> 
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  );
}

export default Work;