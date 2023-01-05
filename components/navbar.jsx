/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { IoMdNotificationsOutline } from 'react-icons/io';
import Image from 'next/image';


const Navbar = () => {
  return (
    <div className='fixed top-0 left-[351px] bg-white h-20 min-w-full'>
      <div className='flex items-center justify-between p-4 '>

        <label for="simple-search" class="sr-only">Search or type</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input type="text" id="simple-search" class="bg-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " placeholder="Search" required />
        </div>


        <div className="items-center flex gap-4 mr-[360px]">
          <button type="button"
            className=' text-3xl text-gray-600 cursor-pointer relative duration-300 ease-in-out hover:scale-110'>
            <IoMdNotificationsOutline />
            <span className=' absolute bg-[#f02d34] w-[8px] h-[8px] rounded-lg items-center top-1'
            ></span>
          </button>
          <div>
            <Image src='/assets/profile-02.png' 
            className='rounded-full'
            width='50' height='50' alt='this is my image' />
          </div>
        </div>


      </div>
    </div>
  )
}

export default Navbar