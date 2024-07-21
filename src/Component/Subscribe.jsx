import React from 'react'
import { NavLink } from 'react-router-dom'

const Subscribe = () => {
  return (
    <div>
       
    <div className="font-royal bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 flex-col  h-[100vh] w-[100vw] flex text-3xl text-sky-300 justify-center items-center "> 
    <h1 className='absolute top-20 text-5xl text-white'>Digital Launchpad Nepal</h1>
      <div className='flex flex-col py-10 justify-center items-center'>
      <div>     
         <h1 className='pb-20 text-white'>Join our journey</h1>
</div>
      <div className='pb-20 text-white  top-36 '>
    
    <p className='text-center'>Enhancing the IT road-map <br /> for innovation & growth.</p>
    </div>
    </div>
    <div className='flex justify-center items-center'>
        <NavLink to='/form'>
          <button className=' p-10 rounded-[50px]  bg-yellow-300 text-blue-500 text-3xl hover:bg-yellow-500  hover:text-blue-900 focus:bg-sky-600'>Enroll Now</button>
        </NavLink>
    </div>
     </div> 

    </div>
  )
}

export default Subscribe
