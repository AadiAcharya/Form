import React from 'react';
import { NavLink } from 'react-router-dom';

const FirstPage = () => {
  return (
    <div className="font-royal bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 flex flex-col h-screen w-screen text-sky-300 justify-center items-center p-4 md:p-8 lg:p-12">
      <h1 className='text-3xl md:text-4xl lg:text-5xl text-white mb-4'>
        Digital Launchpad Nepal
      </h1>
      <div className='flex flex-col justify-center items-center text-center'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl text-white mb-4'>
          Join our journey
        </h2>
        <p className='text-base md:text-lg lg:text-xl text-white mb-6'>
          Enhancing the IT road-map <br /> for innovation & growth.
        </p>
      </div>
      <NavLink to='/form'>
        <button className='bg-yellow-300 text-blue-500 text-lg md:text-xl lg:text-2xl rounded-full p-4 md:p-6 lg:p-8 hover:bg-yellow-400 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-yellow-300'>
          Enroll Now
        </button>
      </NavLink>
    </div>
  );
};

export default FirstPage;
