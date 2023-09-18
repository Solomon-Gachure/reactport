import React from 'react'

const Contact = () => {
  return (
    <div name='contact'className='w-full h-screen bg-black flex justify-center items-center p-4'>
          <form method='POST'action="https://getform.io/f/db96c5fb-9063-4883-a850-e833759e93be" className='flex flex-col max-w-[600px] w-full'>
<div className='pb-8'>
    <p className='text-4xl font-bold inline border-b-4 border-yellow-500 text-gray-400'>Contact</p>
    <p className='text-gray-400 py-4'>Fill out the form below to get in touch with me</p>
</div>
<input className='p-2'type="text" placeholder='Name' name='name' />
              <input className='my-4 p-2' type="text" placeholder='Email' name='email' />
              <textarea className='p-2'name="message" placeholder='Message' rows="10"></textarea>
<button className='text-white border-2 hover:bg-green-500 hover:border-green-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
</form>
    </div>
  )
}

export default Contact;