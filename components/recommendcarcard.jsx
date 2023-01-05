/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { TbArrowsRandom } from 'react-icons/tb'
import {AiOutlineRetweet} from 'react-icons/ai'
import { SlSettings } from 'react-icons/sl';
import { GiElectric } from 'react-icons/gi'

const RecommendCarCard = (props) => {
  const { carName, retweet, imgUrl, rentPrice, percentage, bg } = props.item;
  return (
    <div className={`p-5 rounded-xl ${bg}`}>
      <div className='mb-4'>
        <div className='flex items-center gap-1'>
          <span className='text-xl text-gray-500'><TbArrowsRandom /></span>
          <h3 className="text-xl font-normal">{percentage}% Recommended</h3>
        </div>
      </div>

      <div className="mb-5">
        <img
          className=' mx-auto h-28'
          src={imgUrl} alt="" />
      </div>

      <h3 className='text-xl font-semibold'>{carName}</h3>

      <div className="flex text-lg items-center justify-between text-gray-500">

        <div className="flex items-center gap-4">
          <p><AiOutlineRetweet/></p>
          <p> {retweet}k</p>
          <p><SlSettings/></p>
          <p><GiElectric/></p>
        </div>

        <div className=' flex items-center'>
          <p>${rentPrice}/d</p>
        </div>

      </div>
    </div>
  );
};

export default RecommendCarCard;