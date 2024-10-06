import React from 'react';
import { IoIosArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <div className='absolute z-10 w-full flex items-center justify-between bg-gradient-to-b from-black to-transparent p-4'>
      <img
        className='h-28 w-auto mx-8'
        src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
        alt="Netflix"
      />
      <div className='flex items-center mx-8'>
        <IoIosArrowDropdown className='text-white h-6 w-6' />
        <p className='mx-2 text-xl font-semibold text-white'>Rohit Lad</p>
        <button className='bg-red-500 text-white px-4 py-2 rounded-md mx-2 hover:bg-lime-600'>
          SignOut
        </button>
        <button className='bg-red-500 text-white px-4 py-2 rounded-md mx-2 hover:bg-lime-600'>
          Search Movie
        </button>
      </div>
    </div>
  );
};

export default Header;
