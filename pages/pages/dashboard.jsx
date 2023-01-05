import React from 'react';
import { CarChart, CircleCard, MileChart, RecommendCarCard} from '../../components';
import recommend from "../../data/recommended.js";


const Dashboard = () => {
    return (
        <div className='py-10 pb-12 ml-[400px] mr-10 min-h-screen'>
            <div className='mt-[70px] flex flex-col gap-6'>
                <CircleCard />
                <div className=' flex min-w-full gap-8'>
                    <div className='p-5 pb-24 bg-white h-[350px] rounded-xl w-1/2'>
                        <h1 className=' text-4xl'><span className=' font-semibold'>Miles</span> Statistics</h1>
                        <div className='text-lg flex mt-8 justify-between items-center'>
                        <div className='flex items-center gap-3 w-[171px] h-5'>
                            <button 
                            className='px-6 py-1 rounded-3xl bg-[#2884FF] text-white'>Day</button>
                            <button 
                            className='px-6 py-1 rounded-3xl'>Week</button>
                            <button 
                            className='px-6 py-1 rounded-3xl'>Month</button>
                        </div>
                        <h1>256 Miles</h1>
                        </div>
                        <MileChart/>
                    </div>
                    <div className='p-5 pb-24 bg-white h-[350px] rounded-xl w-1/2'>
                        <h1 className=' text-4xl'><span className=' font-semibold'>Car</span> Statistics</h1>
                        <div className='text-lg mt-8 flex justify-between items-center'>
                        <h1>20 February 2022</h1>
                        <div className='flex items-center gap-3 h-5'>
                            <button 
                            className='px-6 py-1 rounded-3xl bg-orange-400 text-white'>Day</button>
                            <button 
                            className='px-6 py-1 rounded-3xl'>Week</button>
                            <button 
                            className='px-6 py-1 rounded-3xl'>Month</button>
                        </div>
                        
                        </div>
                        <CarChart/>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    {recommend?.map((item) => (
                        <RecommendCarCard item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard