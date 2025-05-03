import React, { useState } from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";

const MainNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='w-full px-2 xs:px-4 sm:px-6 lg:px-8 py-3 sm:py-6'>
            <div className='flex justify-between items-center max-w-7xl mx-auto'>
                {/* Logo */}
                <div className="logo">
                    <img 
                        className='w-24 xs:w-28 sm:w-32 md:w-40' 
                        src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" 
                        alt="Logo" 
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className='hidden md:flex items-center space-x-4 lg:space-x-6'>
                    <a href="#" className='px-3 py-2 text-amber-50 font-medium hover:text-white transition-colors duration-300'>
                        Swiggy Corporate
                    </a>
                    <a href="#" className='px-3 py-2 text-amber-50 font-medium hover:text-white transition-colors duration-300'>
                        Partner with us
                    </a>
                    <a href="#" className='px-3 py-2 text-amber-50 font-medium border rounded-2xl border-amber-50 flex items-center hover:bg-white/10 transition-colors duration-300'>
                        <span>Get the App</span>
                        <span className="icon pl-2 text-xl"><MdArrowOutward /></span>
                    </a>
                    <a href="#" className='px-3 py-2 text-amber-50 font-medium bg-black rounded-2xl px-6 hover:bg-gray-900 transition-colors duration-300'>
                        Sign in
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    className='md:hidden text-amber-50 p-1.5'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div 
                className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} fixed top-[60px] left-0 right-0 bg-orange-600 shadow-lg z-50`}
                style={{ maxHeight: 'calc(100vh - 60px)', overflowY: 'auto' }}
            >
                <nav className='flex flex-col p-3 xs:p-4 space-y-2 xs:space-y-4'>
                    <a href="#" className='px-3 xs:px-4 py-2.5 xs:py-3 text-amber-50 text-sm xs:text-base font-medium hover:bg-white/10 rounded-lg transition-colors duration-300'>
                        Swiggy Corporate
                    </a>
                    <a href="#" className='px-3 xs:px-4 py-2.5 xs:py-3 text-amber-50 text-sm xs:text-base font-medium hover:bg-white/10 rounded-lg transition-colors duration-300'>
                        Partner with us
                    </a>
                    <a href="#" className='px-3 xs:px-4 py-2.5 xs:py-3 text-amber-50 text-sm xs:text-base font-medium border border-amber-50 rounded-lg flex items-center justify-between hover:bg-white/10 transition-colors duration-300'>
                        <span>Get the App</span>
                        <span className="icon text-lg xs:text-xl"><MdArrowOutward /></span>
                    </a>
                    <a href="#" className='px-3 xs:px-4 py-2.5 xs:py-3 text-amber-50 text-sm xs:text-base font-medium bg-black rounded-lg text-center hover:bg-gray-900 transition-colors duration-300'>
                        Sign in
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default MainNavbar   