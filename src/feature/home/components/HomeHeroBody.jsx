import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router';
import HomeHeroCards from './HomeHeroCards';
import { homeHeroCardDataURL } from '../utils/data';

const HomeHeroBody = () => {
    return (
        <>
            <div className='w-full pt-16 pb-8 '>
                <div className='w-full px-3'><h1 className='w-[60%] mx-auto pl-3 text-5xl text-white font-bold text-center'>Order food & groceries. Discover best restaurants. Swiggy it!</h1></div>
                <div className="flex w-full pt-6 gap-4 justify-center px-4 z-10">
                    {/* Location input */}
                    <div className="flex items-center gap-3 w-[302px] h-[60px] px-3 bg-white rounded-2xl border border-gray-200 shadow-sm 
                  focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-100 transition">
                        <IoLocationSharp className="text-orange-500 text-xl h-6 w-6" />
                        <input
                            type="search"
                            name="searchLocation"
                            placeholder="Enter your delivery location"
                            className="flex-1 bg-transparent text-sm  outline-none caret-amber-600 placeholder:text-gray-400 placeholder:font-medium placeholder:text-[16px]"
                        />

                        <IoIosArrowDown className="text-gray-500 text-lg  cursor-pointer h-6 w-6" />
                    </div>

                    {/* Restaurant search */}
                    <div className=" w-[408px] h-[60px] bg-white rounded-2xl border border-gray-200 shadow-sm 
                  focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-100 transition">
                        <Link className='w-full h-full px-3 flex items-center justify-between gap-3'>
                            <p className='text-[18px] font-medium text-gray-400'>Search for restaurant, item or more</p>
                            <CiSearch className="text-gray-500 text-2xl mr-2 cursor-pointer h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className=' items-center px-2 pb-5 max-w-[80%] mx-auto'>
                <div className="overflow-x-scroll flex justify-center gap-3">
                    {
                        homeHeroCardDataURL.map((imgSrc, index) => (
                            <HomeHeroCards key={index} imgSrc={imgSrc} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default HomeHeroBody