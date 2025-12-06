import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import HomeHeader from '../components/HomeHeader'

const Home = () => {
    return (
        <div className='bg-[#ff5200] scroll-smooth overflow-x-hidden'>
            <HomeNavbar />

            <HomeHeader />

        </div>
    )
}

export default Home