import React from "react";
import Carousel from "./Carousel";
import { foodImages } from "../utils/data";



const BestFoodOptions = () => {
    return (
        <Carousel
            title="Order our best food options"
            items={foodImages}
            rows={2}
            autoScroll
            autoScrollDelay={3000}
            renderItem={(item) => (
                <div
                    className="w-[144px] 
                     h-[180px]
                     rounded-xl overflow-hidden shadow"
                >
                    <img
                        src={item.img}
                        alt="food"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
            )}
        />
    );
};

export default BestFoodOptions;
