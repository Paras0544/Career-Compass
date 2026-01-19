import React, { useState, useEffect } from 'react';

const AutoWallpaperCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample wallpaper data - replace with your actual images
  const wallpapers = [
    'https://static.vecteezy.com/system/resources/previews/012/865/505/non_2x/idyllic-mountain-panoramic-landscape-fresh-green-meadows-and-blooming-wildflowers-sun-ray-beautiful-nature-countryside-view-rural-sunny-outdoor-natural-bright-banner-nature-spring-summer-panorama-photo.jpg',
    'https://static.vecteezy.com/system/resources/previews/012/865/505/non_2x/idyllic-mountain-panoramic-landscape-fresh-green-meadows-and-blooming-wildflowers-sun-ray-beautiful-nature-countryside-view-rural-sunny-outdoor-natural-bright-banner-nature-spring-summer-panorama-photo.jpg',
    'https://static.vecteezy.com/system/resources/previews/012/865/505/non_2x/idyllic-mountain-panoramic-landscape-fresh-green-meadows-and-blooming-wildflowers-sun-ray-beautiful-nature-countryside-view-rural-sunny-outdoor-natural-bright-banner-nature-spring-summer-panorama-photo.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % wallpapers.length);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, [wallpapers.length]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden z-[-10]">
      {/* Carousel Slides */}
      <div
        className="flex transition-transform duration-[3000ms] ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {wallpapers.map((wallpaper, index) => (
          <div key={index} className="relative flex-shrink-0 w-full h-[600px]">
            <img
              src={wallpaper}
              alt={`Wallpaper ${index + 1}`}
              className="w-full h-[600px] object-cover"
            />
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
        ))}
      </div>

      {/* Title and Subtitle */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold md:text-6xl">
          Career Compass: Navigate Your Path to Success
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          Personalized Career Guidance to Help You Make Informed, Confident Decisions
        </p>
      </div>

      {/* Dot Indicators */}
      <div className="absolute flex space-x-2 -translate-x-1/2 bottom-6 left-1/2">
        {wallpapers.map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-full transition ${
              currentSlide === index ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoWallpaperCarousel;


