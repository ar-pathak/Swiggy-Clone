import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import HomeHeader from '../components/HomeHeader'
import BestFoodOptions from '../components/BestFoodOptions'

const Home = () => {
    return (
        <>
            <div className='bg-[#ff5200] scroll-smooth overflow-x-hidden'>
                <HomeNavbar />
                <HomeHeader />
            </div>
            <BestFoodOptions />
        </>
    )
}

export default Home