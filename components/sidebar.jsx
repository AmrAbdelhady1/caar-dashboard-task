import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { SiMega } from 'react-icons/si';
import { barlinksTop, barlinksBot } from '../data/sidebarlinks';


const Sidebar = () => {

  const actlink ='flex items-center gap-2 text-lg px-2 mb-2 p-1 bg-gray-200 rounded-lg duration-300';
  const link ='flex items-center gap-2 text-lg px-2 mb-2 p-1';
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className=' flex flex-col w-[350px] top-0 fixed overflow-hidden min-h-screen bg-white p-4'>
      <div className='mb-10'>
        <Link className=' flex items-center gap-2 text-4xl font-bold' href='/'>
          <span className=' text-purple-600'><SiMega /></span>
          Motiv.
        </Link>
      </div>
      <div className=' flex flex-col gap-64 text-gray-700 w-[250px]'>
      <div>
          {barlinksTop.map((item) => {
           return(
            <div
            key={item.key}>
              <Link
              className={currentRoute === item.path ? actlink : link} 
              href={item.path}>
                <span>{item.icon}</span>
                {item.linkname}
              </Link>
            </div>
           )
          })}
      </div>
      <div>
      {barlinksBot.map((item) => {
           return(
            <div
            key={item.key}>
              <Link
              className={currentRoute === item.path ? actlink : link} 
              href={item.path}>
                <span>{item.icon}</span>
                {item.linkname}
              </Link>
            </div>
           )
          })}
      </div>
      </div>
    </div>
  )
}

export default Sidebar