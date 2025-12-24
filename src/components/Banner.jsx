import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useBanner } from '../api/hooks/useBanner';

export default function AcademyHeroSlider() {
    const { data: banners, isLoading } = useBanner();

    if (isLoading) {
        return <div className="w-full h-96 md:h-[550px] bg-gray-200 animate-pulse"></div>;
    }

    return (
        <section className="relative w-full h-96 md:h-[550px] overflow-hidden">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                className="w-full h-full"
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={false}
                pagination={{ clickable: true }}
            >
                {banners?.map((banner) => (
                    <SwiperSlide key={banner._id}>
                        <div className="relative w-full h-full">
                            
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ 
                                    backgroundImage: `url(${banner.image?.url || banner.imageUrl || "https://placehold.co/1200x600?text=No+Image"})` 
                                }}
                            ></div>

                            <div className="absolute inset-0 bg-black/30"></div>

                             {/* Uncomment this if you want to show the Title from DB */}
                             {/* <div className="relative z-10 h-full grid items-end justify-items-start text-white p-4">
                                <div>
                                    <h1 className="mb-3 text-xl md:text-3xl font-bold px-6 py-3 rounded-lg">
                                        {banner.title}
                                    </h1>
                                </div>
                             </div> 
                             */}

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}