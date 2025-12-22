import React from 'react'
import Carousel from './Carousel'
import { groceriesImages } from '../utils/data'

const ShopGroceries = () => {
    return (
        <Carousel
            title="Shop groceries on Instamart"
            items={groceriesImages}
            rows={1}
            autoScroll
            autoScrollDelay={3000}
            renderItem={(item) => (
                <div
                    className=" w-[144px]
                        rounded-xl overflow-hidden shadow"
                >
                    <img
                        src={item.img}
                        alt="food"
                        className=" 
                        h-[180px] object-cover"
                        loading="lazy"
                    />
                    <div className="w-full object-cover font-bold text-xl text-center my-5 text-[rgba(2,6,12,0.75)]">{item.title}</div>
                </div>
            )}
        />
    )
}

export default ShopGroceries