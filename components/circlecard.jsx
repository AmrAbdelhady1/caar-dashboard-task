import React from 'react'
import { GiElectric } from 'react-icons/gi'
import { TbArrowsVertical } from 'react-icons/tb'
import {BiCoin} from 'react-icons/bi'
import {IoIosWater} from 'react-icons/io'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircleCard = () => {
    return (
        <div className=' flex gap-10 items-center min-w-full'>
            <div className='bg-purple-500 w-1/4 rounded-xl h-[300px] text-white'>
                <div className='flex  flex-col gap-6 items-center py-4'>
                    <p className='bg-slate-300 bg-opacity-20 rounded-full p-2 text-lg'><GiElectric /></p>
                    <h1 className=' text-2xl font-medium'>Energy</h1>
                    <div className='w-28'>
                        <CircularProgressbar circleRatio={0.75}
                            value='45'
                            text='45%'
                            styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                textSize: "24px",
                                textColor: "white",
                                pathColor: "white",
                                trailColor: "#C5C5C5"
                            })}
                        />
                    </div>
                </div>
            </div>
            <div className='bg-white w-1/4 rounded-xl h-[300px]'>
                <div className='flex  flex-col gap-6 items-center py-4'>
                    <p className='bg-rose-400 bg-opacity-20 rounded-full p-2 text-rose-400 text-lg'><TbArrowsVertical /></p>
                    <h1 className=' text-2xl font-medium'>Range</h1>
                    <div className='w-28'>
                        <CircularProgressbar circleRatio={0.75}
                            value='60'
                            text='157k%'
                            styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                textSize: "24px",
                                textColor: "black",
                                pathColor: "#FB8DA0",
                                trailColor: "#C5C5C5"
                            })}
                        />
                    </div>
                </div>
            </div>
            <div className='bg-white w-1/4 rounded-xl h-[300px]'>
                <div className='flex  flex-col gap-6 items-center py-4'>
                    <p className='bg-purple-500 text-purple-500 bg-opacity-20 rounded-full p-2 text-lg'><IoIosWater /></p>
                    <h1 className=' text-2xl font-medium'>Break fluid</h1>
                    <div className='w-28'>
                        <CircularProgressbar circleRatio={0.75}
                            value='9'
                            text='9%'
                            styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                textSize: "24px",
                                textColor: "black",
                                pathColor: "purple",
                                trailColor: "#C5C5C5"
                            })}
                        />
                    </div>
                </div>
            </div>
            <div className='bg-white w-1/4 rounded-xl h-[300px]'>
                <div className='flex  flex-col gap-6 items-center py-4'>
                    <p className='bg-opacity-20 rounded-full bg-yellow-500 text-yellow-400 p-2 text-lg'><BiCoin/></p>
                    <h1 className=' text-2xl font-medium'>Tire Wear</h1>
                    <div className='w-28'>
                        <CircularProgressbar circleRatio={0.75}
                            value='25'
                            text='25%'
                            styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                textSize: "24px",
                                textColor: "black",
                                pathColor: "yellow",
                                trailColor: "#C5C5C5"
                            })}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CircleCard