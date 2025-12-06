import React from 'react'
import { Link } from 'react-router'
import { MdArrowOutward } from "react-icons/md";

const HomeNavbar = () => {
    return (
        <div className='p-8 w-full'>
            <div className='w-[85%] mx-auto flex justify-between items-center '>
                <div>
                    <img className='h-12 w-40' loading='lazy' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="" />
                </div>
                <div className='flex items-center gap-8 text-white font-bold'>
                    <Link>Swiggy Corporate</Link>
                    <Link>Partner with us</Link>
                    <Link className='py-4 px-4 flex gap-1 items-center border border-white rounded-xl'>Get the App <MdArrowOutward className='h-6 w-6' /></Link>
                    <Link className='py-3 px-5 bg-black rounded-2xl '>  <button className='py-1 px-6'>Sign in</button></Link>
                </div>
            </div>
        </div>
    )
}

export default HomeNavbar