import React from 'react'
import MainNavbar from './MainNavbar'
import { API_URLS, APP_CONFIG, SERVICE_CARDS } from '../config/constants'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const MainHeader = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAyYzQuNDE4IDAgOC0zLjU4MiA4LThzLTMuNTgyLTgtOC04LTggMy41ODItOCA4IDMuNTgyIDggOCA4em0wIDJjLTUuNTIzIDAtMTAgNC40NzctMTAgMTBzNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTAtNC40NzctMTAtMTAtMTB6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==')]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Top Navigation */}
                <div className="flex justify-between items-center py-4 sm:py-6">
                    <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
                        <img src={APP_CONFIG.LOGO_PATH} alt="Logo" className="h-8 sm:h-10" />
                        <nav className="hidden md:flex space-x-6 lg:space-x-8">
                            <a href={APP_CONFIG.NAVIGATION.CORPORATE.path} 
                               className="text-white hover:text-orange-100 transition-colors duration-300 text-base lg:text-lg">
                                {APP_CONFIG.NAVIGATION.CORPORATE.label}
                            </a>
                            <a href={APP_CONFIG.NAVIGATION.PARTNER.path} 
                               className="text-white hover:text-orange-100 transition-colors duration-300 text-base lg:text-lg">
                                {APP_CONFIG.NAVIGATION.PARTNER.label}
                            </a>
                        </nav>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
                        <button className="px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 text-orange-600 bg-white rounded-full font-medium hover:bg-orange-50 transition-colors duration-300 text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl">
                            Sign In
                        </button>
                        <button className="px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl">
                            Get the App
                        </button>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="relative pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-24">
                    {/* Decorative Images */}
                    <img 
                        className="absolute top-0 left-0 w-48 sm:w-56 lg:w-72 opacity-90 animate-float hidden sm:block" 
                        src={`${API_URLS.BASE_URL}${API_URLS.IMAGES.VEGGIES}`}
                        alt="Left-IMG" 
                    />
                    <img 
                        className="absolute top-0 right-0 w-48 sm:w-56 lg:w-72 opacity-90 animate-float hidden sm:block" 
                        src={`${API_URLS.BASE_URL}${API_URLS.IMAGES.SUSHI}`}
                        alt="Right-IMG" 
                    />

                    {/* Main Content */}
                    <div className="flex flex-col items-center justify-center relative z-10">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-8 sm:mb-10 lg:mb-12 max-w-4xl leading-tight px-4">
                            Order food. Discover best restaurants. Swiggy it!
                        </h1>
                        
                        {/* Search Section */}
                        <div className="w-full max-w-2xl sm:max-w-2xl lg:max-w-3xl rounded-2xl shadow-2xl p-4 sm:p-5 lg:p-6 mb-12 sm:mb-14 lg:mb-16 bg-white/10 backdrop-blur-sm mx-4">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1 bg-white relative rounded-xl overflow-hidden">
                                    <input 
                                        type="text" 
                                        placeholder="Enter your delivery location" 
                                        className="w-full px-4 sm:px-5 lg:px-6 py-3 sm:py-3.5 lg:py-4 border-0 focus:outline-none focus:ring-2 focus:ring-orange-500 text-base sm:text-lg"
                                    />
                                </div>
                                <div className="flex-1 bg-white relative rounded-xl overflow-hidden">
                                    <input 
                                        type="text" 
                                        placeholder="Search for restaurant, item or more" 
                                        className="w-full px-4 sm:px-5 lg:px-6 py-3 sm:py-3.5 lg:py-4 border-0 focus:outline-none focus:ring-2 focus:ring-orange-500 text-base sm:text-lg"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Service Cards */}
                        <div className="w-full max-w-6xl px-4">
                            {/* Mobile Slider */}
                            <div className="lg:hidden">
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    spaceBetween={16}
                                    slidesPerView={1.2}
                                    centeredSlides={true}
                                    pagination={{ clickable: true }}
                                    navigation
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                    }}
                                    className="service-swiper"
                                >
                                    {Object.values(SERVICE_CARDS).map((service, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-7 hover:shadow-3xl transition-all duration-300 group hover:bg-white/20 h-full">
                                                <div className="relative">
                                                    <img 
                                                        src={service.image}
                                                        alt={service.title} 
                                                        className="w-full h-40 sm:h-48 object-cover rounded-xl mb-4 sm:mb-5 shadow-lg"
                                                    />
                                                    <span className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-orange-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                                                        {service.discount}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">{service.title}</h3>
                                                <p className="text-orange-100 mb-4 sm:mb-6 text-base sm:text-lg">{service.description}</p>
                                                <button className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg">
                                                    {service.ctaText}
                                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            {/* Desktop Grid */}
                            <div className="hidden lg:grid grid-cols-3 gap-8">
                                {Object.values(SERVICE_CARDS).map((service, index) => (
                                    <div key={index} 
                                         className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 group hover:bg-white/20">
                                        <div className="relative">
                                            <img 
                                                src={service.image}
                                                alt={service.title} 
                                                className="w-full h-56 object-cover rounded-xl mb-6 shadow-lg"
                                            />
                                            <span className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                                                {service.discount}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                                        <p className="text-orange-100 mb-6 text-lg">{service.description}</p>
                                        <button className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-lg">
                                            {service.ctaText}
                                            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Swiper Styles */}
            <style jsx global>{`
                .service-swiper {
                    padding: 20px 10px 40px;
                }
                .service-swiper .swiper-pagination-bullet {
                    background: white;
                    opacity: 0.5;
                }
                .service-swiper .swiper-pagination-bullet-active {
                    opacity: 1;
                }
                .service-swiper .swiper-button-next,
                .service-swiper .swiper-button-prev {
                    color: white;
                }
                .service-swiper .swiper-button-next:after,
                .service-swiper .swiper-button-prev:after {
                    font-size: 24px;
                }
            `}</style>
        </div>
    )
}

export default MainHeader       