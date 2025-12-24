import React from 'react';
import { useEvents } from '../api/hooks/useEvents';
import { useNotification } from '../api/hooks/useNotification';

// 1. Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';

export default function Notification() {
    const { data: events } = useEvents();
    const { data: notifications } = useNotification();

    // 2. Get the last 4 events (slice takes the first 4 items)
    const latestEvents = events ? events.slice(0, 4) : [];

    return (
        <section className="p-6 m-5 md:m-10 md:p-10">
            <h1 className="mb-8 text-4xl font-semibold md:text-5xl">Activities & Events</h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

                {/* === COLUMN 1: Event Slider (Left Side) === */}
                <article className="md:col-span-2 min-h-[400px]"> {/* Added min-height to prevent collapse */}
                    
                    {latestEvents.length > 0 ? (
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            loop={latestEvents.length > 1} // Only loop if more than 1 event
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            pagination={{ clickable: true }}
                            className="h-full overflow-hidden rounded-lg shadow-lg"
                        >
                            {latestEvents.map((event) => (
                                <SwiperSlide key={event._id} className="flex flex-col h-full bg-white">
                                    
                                    {/* Slide Image Section */}
                                    <div 
                                        className="relative p-6 md:p-8 text-white h-[300px] flex flex-col justify-end bg-cover bg-center"
                                        style={{ 
                                            backgroundImage: event.image?.url 
                                                ? `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1)), url(${event.image.url})` 
                                                : 'linear-gradient(to top, #4CAF50, #81C784)' 
                                        }}
                                    >
                                        <div className="absolute px-3 py-1 text-xs font-medium rounded-full top-4 right-4 bg-black/50">
                                            {new Date(event.createdAt).toLocaleDateString()}
                                        </div>

                                        <h3 className="mt-4 text-2xl font-bold leading-tight md:text-3xl">
                                            {event.title}
                                        </h3>
                                        <p className="mt-1 text-lg font-medium opacity-80">
                                            Shamsul Huda Academy
                                        </p>
                                    </div>

                                    {/* Slide Text Section */}
                                    <div className="flex-grow p-4 bg-white md:p-6">
                                        <h4 className="text-xl font-semibold text-gray-800 truncate">
                                            {event.title}
                                        </h4>
                                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                                            {event.description}
                                        </p>
                                    </div>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-500 bg-gray-100 rounded-lg">
                            No Upcoming Events
                        </div>
                    )}
                </article>

                {/* === COLUMN 2: Notification List (Right Side) === */}
                <aside className="md:col-span-1">
    <div className="h-full p-5 bg-white border-t-4 border-orange-500 rounded-lg shadow-xl">
        <div className="flex items-center mb-4">
            <img 
                src="/images/SHAMSUL HUDA LOGO PNG.png" // Replace this with your actual file name
                alt="Notification Icon" 
                className="object-contain w-8 h-8 mr-3" // Adjust width/height (w-8 h-8) as needed
            />
            
            <h3 className="text-2xl font-semibold text-orange-600">Notification</h3>
        </div>

        <ul className="space-y-4 text-sm text-gray-700 max-h-[400px] overflow-y-auto pr-2">
            {notifications?.map((note) => (
                <li key={note._id} className="pb-2 border-b border-gray-100 last:border-0">
                    <p className="font-medium">
                        {note.title || note.message}
                    </p>
                    <span className="block mt-1 text-xs text-gray-400">
                        {new Date(note.createdAt).toLocaleDateString()}
                    </span>
                </li>
            ))}
            
            {(!notifications || notifications.length === 0) && (
                <p className="italic text-gray-400">No new notifications.</p>
            )}
        </ul>
    </div>
</aside>

            </div>
        </section>
    );
}