import React from "react";
import Carousel from "./Carousel";

const foodImages = Array.from({ length: 36 }, (_, i) => ({
    id: i + 1,
    img: `https://source.unsplash.com/300x200/?food&sig=${i}`,
}));

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
                    className="w-[140px] sm:w-[180px] md:w-[220px]
                     h-[120px] sm:h-[140px] md:h-[160px]
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
