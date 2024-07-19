import React from 'react'
import ImageUpload from './ImageUpload'
import { NavLink } from 'react-router-dom'

const Form = () => {
  return (
    <div className=' bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... form flex flex-col justify-center text-2xl items-center gap-10 w-11/12'>
      <h1 className='flex text-4xl mt-4 '>Contact Detail <hr/> </h1>
    <p>Please fill your information so we can get in touch with you.</p>


      <div className=''>  
        <h2>Name</h2>
        <div className="relative">
        <input type="name" placeholder='Your Full Name' className='h-10 shadow-sm opacity-70 p-2' />
        <div className=" absolute right-2 top-1">
        <img src="./src/assets/phone.png" alt="" className='' />
        </div>
        </div>
      </div>


      <div>
        <h2>Email</h2>
        <div className="relative">
        <input type="email" placeholder='Your Email Address ' className='h-10 shadow-sm opacity-70 p-2' />
        <div className=" absolute right-2 top-3 ">
        <img src="./src/assets/mail.png" alt="" />
        </div>
        </div>
      </div>

      <div>
        <h2>Phone Number</h2>
        <div className="relative">
        <input type="number" placeholder='Your contact info' className='h-10 shadow-sm opacity-70 p-2' />
        <div className=" absolute right-2 top-1">
        <img src="./src/assets/phone.png" alt="" />
        </div>
        </div>
      </div>


      <div>
        <h2>College</h2>
      
        <div className='relative'>
        <input type="text" placeholder='Your College Name' className='h-10 shadow-sm opacity-70 p-2' />
        <div className='absolute right-2 top-1'>
        <img src="./src/assets/building.png"  alt=""  className=''/>
        </div>
        </div>
        
        </div>



        <div>
        <h2>Message</h2>
      
        <div className='relative'>
        <textarea id="big-text-input" name="big-text-input" rows="10" class="mt-2 h-24 form-textarea  w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400  opacity-70 p-2 focus:ring-opacity-50"></textarea>
      
        </div>
        
        </div>


<div className="button gap-10px pt-10">
<NavLink to='/imageupload'>
<button className='bg-blue-600 text-white text-2xl border-none rounded-[45px] p-3 hover:text-[#FFFF00] hover:bg-blue-300 shadow-sm ' onClick={<ImageUpload />}>Next Step</button>
</NavLink>
</div>


    </div>
  )
}

export default Form
