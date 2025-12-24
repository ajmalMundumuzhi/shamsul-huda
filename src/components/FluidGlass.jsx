'use client';

import { useState, useEffect, useRef } from 'react';

export default function FluidGlassCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  const slides = [
    {
      title: "Our Philosophy",
      content: "Shamsul Huda is founded upon the educational philosophy of Islam which in turn is inspired by the principles of hierarchy and unity of knowledge in its intents, contents, and methods. Therefore, our philosophy is based on recognizing the Almighty Allah as the fountain-source of all knowledge as well as acknowledging Him as the ultimate end of every human endeavor; and believing that His guidance (Hidaya) is an absolute essentiality for human development. Hence, we stand with a clear-cut philosophy that the knowledge should be acquired, internalized, and propagated (Talim, Tarbiyah, Dawah) for the sake of the Almighty Allah and for the benefit of the self and people."
    },
    {
      title: "Our Vision",
      content: "To develop an Islamic educational framework in order to prepare religious scholars who acquire, practice and propagate Islam, and to be a center for intellectual leadership for holistic empowerment of society rooted in moral values and principles and to offer a comprehensive educational system to provide opportunities for students of different walks of the society instilled with skill and values."
    },
    {
      title: "Our Mission",
      content: "To provide quality Islamic education that combines traditional knowledge with contemporary understanding, fostering spiritual growth and intellectual development while serving the community through educational programs, outreach initiatives, and character building activities that promote Islamic values and contribute positively to society."
    }
  ];

  // Auto-play effect with pause capability
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length, isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#d97706] p-6">
      {/* Main Carousel Container */}
      <div 
        ref={carouselRef}
        className="relative w-full max-w-4xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        



        {/* Slides Container */}
        <div className="relative overflow-hidden rounded-[50px]">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
              >
                {/* Slide Card */}
                <div className="
                  w-full bg-[#f59e0b] rounded-[50px]  p-12 md:p-16 flex flex-col items-center text-center shadow-xl lg:min-h-[550px]
                ">
                  
                  {/* Heading */}
                  <h2 className="flex items-center gap-2 text-4xl md:text-5xl font-extrabold text-white mb-8 lg:mt-15 tracking-tight">
                    {slide.title.split(' ')[0]}
                    <span className="relative flex items-center">
                      <span className="ml-1">{slide.title.split(' ').slice(1).join(' ')}</span>
                    </span>
                  </h2>

                  {/* Paragraph Text */}
                  <p className="text-white text-sm md:text-base leading-loose max-w-2xl font-medium opacity-95">
                    {slide.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}