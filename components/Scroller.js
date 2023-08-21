
import { useEffect, useState } from 'react';

const Scroller = () => {
  const carouselItems = [
    "https://www.cxtoday.com/wp-content/uploads/2022/03/ecommerce-3.png",
    "https://dashwire.com/wp-content/uploads/2022/04/the-complete-guide-to-mobile-app-development-2021.png",
    "https://www.analyticsinsight.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg",
    
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const moveToNextSlide = () => {
    setCurrentSlideIndex((currentSlideIndex + 1) % carouselItems.length);
  };

  useEffect(() => {
    const interval = setInterval(moveToNextSlide, 2000);
    return () => clearInterval(interval);
  }, [currentSlideIndex]);

  return (
    <div className="relative w-full" data-carousel="static">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`duration-200 ease-linear ${
              index === currentSlideIndex ? '' : 'hidden'
            }`}
            data-carousel-item
          >
            <img
              src={item}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Carousel Item ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* ... (slider controls) */}
    </div>
  );
};

export default Scroller;
