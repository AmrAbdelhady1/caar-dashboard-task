/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {BsHeart} from 'react-icons/bs'
import {RxPerson} from 'react-icons/rx'
import {AiOutlineRetweet} from 'react-icons/ai'


const CarItem = (props) => {
  const { category, type, rentPrice, imgUrl, carName, groupSize, bg } = props.item;
  return (
    <div className={`p-5 rounded-xl ${bg}`}>
      <div className='mb-4'>
        <div className='flex items-center justify-between'>
          <h3 className="text-2xl font-normal">{carName}</h3>
          <span className='text-xl text-gray-500'><BsHeart/></span>
        </div>
        <p className=' font-normal text-sm text-gray-500'>{category}</p>
      </div>

      <div className="mb-5">
        <img 
          className=' mx-auto h-28'
        src={imgUrl} alt="" />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-gray-500 font-light">
          <span className=' text-purple-600'><RxPerson/></span>
          <p className='mr-5'> {groupSize}
          </p>
          <span className=' text-purple-600'><AiOutlineRetweet/></span>
          <p className=''>
            {type}
          </p>
        </div>
        <div className=' flex items-center'>
        <p className="text-xl">${rentPrice}</p><p className=' text-gray-500'>/d</p>
        </div>
      </div>
    </div>
  );
};

export default CarItem;