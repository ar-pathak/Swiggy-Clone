import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import HomeHeader from '../components/HomeHeader'
import BestFoodOptions from '../components/BestFoodOptions'
import ShopGroceries from '../components/Shopgroceries'

const Home = () => {
    return (
        <>
            <div className='bg-[#ff5200] scroll-smooth overflow-x-hidden'>
                <HomeNavbar />
                <HomeHeader />
            </div>
            <BestFoodOptions />
            <ShopGroceries />
        </>
    )
}

export default Home