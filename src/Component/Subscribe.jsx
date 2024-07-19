import React from 'react'
import { NavLink } from 'react-router-dom'
const Subscribe = () => {
  return (
    <div>
          <div className=" bg-blue-600 flex-col h-[100vh] w-[100vw] flex justify-center items-center "> 
    
    <div className='flex justify-center items-center'>
    <input type="Email" placeholder='Enter your Email ' className='text-3xl rounded-[50px]   h-[100px] w-[40vw]' />
    <NavLink to='/form'>
    <button className=' p-10 rounded-[50px] text-2xl bg-yellow-400 text-blue-400 hover:bg-slate-600  hover:text-blue-600 focus:bg-slate-600'>Subscribe</button>
    </NavLink>
    </div>
     </div> 

    </div>
  )
}

export default Subscribe
