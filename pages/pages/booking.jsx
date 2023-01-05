import React from 'react';

import carData from "../../data/cars.js";
import {CarItem} from '../../components';
import { RxDashboard } from 'react-icons/rx';
import {CiSliderHorizontal} from 'react-icons/ci'

const Bookings = () => {
  return (
    <div className="py-7 pb-12 ml-[400px] mr-10 min-h-screen">
      <div className="mt-[70px]">
        <h2 className="text-4xl mb-8 font-semibold">Booking</h2>

        <div className=' flex justify-between items-center'>
          <div className="flex items-center gap-6 text-gray-500">
            <div className="px-2 py-2 cursor-pointer mb-8 rounded-full bg-white">
              <select>
                <option value="New">New</option>
                <option value="Popular">Popular</option>
                <option value="Upcoming">Upcoming</option>
              </select>
            </div>

            <div className="px-2 py-2 cursor-pointer mb-8 rounded-full bg-white">
              <select className="px-2">
                <option value="toyota">Toyota</option>
                <option value="bmw">Bmw</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div className=' flex items-center gap-3 mb-6'>
            <span className=' bg-white w-10 rounded-full h-10 items-center'>
              <p className=' m-[7px] text-2xl'><RxDashboard /></p>
            </span>
            <span className=' bg-purple-500 text-white w-10 rounded-full h-10 items-center'>
              <p className=' m-[7px] text-2xl'><CiSliderHorizontal /></p>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {carData?.map((item) => (
            <CarItem item={item} key={item.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;