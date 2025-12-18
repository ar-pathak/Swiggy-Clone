import React, { useRef, useState, useEffect, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Carousel = ({
    title,
    items = [],
    renderItem,
    rows = 2,
    autoScroll = false,
    autoScrollDelay = 3000,
    skeletonCount = 8,
}) => {
    const sliderRef = useRef(null);
    const autoScrollRef = useRef(null);

    const [loading, setLoading] = useState(true);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    /* ---------------- Skeleton Loading ---------------- */
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    /* ---------------- Scroll State ---------------- */
    const checkScroll = useCallback(() => {
        const el = sliderRef.current;
        if (!el) return;

        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    }, []);

    /* ---------------- Manual Scroll ---------------- */
    const scrollLeft = () => {
        sliderRef.current?.scrollBy({ left: -360, behavior: "smooth" });
    };

    const scrollRight = () => {
        sliderRef.current?.scrollBy({ left: 360, behavior: "smooth" });
    };

    /* ---------------- Auto Scroll ---------------- */
    const startAutoScroll = useCallback(() => {
        if (!autoScroll || !sliderRef.current) return;

        clearInterval(autoScrollRef.current);

        autoScrollRef.current = setInterval(() => {
            const el = sliderRef.current;
            if (!el) return;

            if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
                el.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                el.scrollBy({ left: 360, behavior: "smooth" });
            }

            checkScroll();
        }, autoScrollDelay);
    }, [autoScroll, autoScrollDelay, checkScroll]);

    useEffect(() => {
        startAutoScroll();
        return () => clearInterval(autoScrollRef.current);
    }, [startAutoScroll]);

    /* ---------------- Initial Scroll Sync ---------------- */
    useEffect(() => {
        if (!loading) checkScroll();
    }, [loading, checkScroll]);

    return (
        <div className="w-[90%] mx-auto mt-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#02060c]">
                    {title}
                </h2>

                <div className="flex gap-3">
                    <button
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                        aria-label="Scroll left"
                        className={`p-2 rounded-full transition
              ${canScrollLeft
                                ? "bg-[rgba(2,6,12,0.25)]"
                                : "bg-[rgba(2,6,12,0.1)] cursor-not-allowed"
                            }`}
                    >
                        <FaArrowLeft />
                    </button>

                    <button
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                        aria-label="Scroll right"
                        className={`p-2 rounded-full transition
              ${canScrollRight
                                ? "bg-[rgba(2,6,12,0.25)]"
                                : "bg-[rgba(2,6,12,0.1)] cursor-not-allowed"
                            }`}
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>

            {/* Skeleton */}
            {loading ? (
                <div
                    style={{ gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }}
                    className="grid grid-flow-col gap-4"
                >
                    {Array.from({ length: skeletonCount }).map((_, i) => (
                        <div
                            key={i}
                            className="w-[140px] h-[120px] sm:w-[180px] sm:h-[140px]
                         rounded-xl bg-gray-200 animate-pulse"
                        />
                    ))}
                </div>
            ) : (
                <div
                    ref={sliderRef}
                    style={{ gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }}
                    onScroll={checkScroll}
                    onMouseEnter={() => clearInterval(autoScrollRef.current)}
                    onMouseLeave={startAutoScroll}
                    onTouchStart={() => clearInterval(autoScrollRef.current)}
                    onTouchEnd={startAutoScroll}
                    className="
            grid grid-flow-col gap-4
            overflow-x-auto scroll-smooth
            snap-x snap-mandatory
            [scrollbar-width:none]
            [-webkit-overflow-scrolling:touch]
          "
                >
                    {items.map((item) => (
                        <div key={item.id} className="snap-start">
                            {renderItem(item)}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Carousel;
