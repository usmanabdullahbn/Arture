import React, { useEffect, useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import img1 from "../asserts/img2.webp";
import img2 from "../asserts/img1.webp";
import img3 from "../asserts/img4.webp";
import img4 from "../asserts/img3.webp";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showComponent, setShowComponent] = useState(true);
  const data = [img1, img2, img3, img4];

  const preSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 3 ? 3 : prev + 1));
  };
 useEffect(() => {
    const handleResize = () => {
      setShowComponent(window.innerWidth >= 750);
    };

    handleResize(); // Check initial screen width

    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      // Automatically change to the next slide every 5 seconds
      nextSlide();
    }, 10000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, []);

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-full h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          {data.map((image, index) => (
            <img
              key={index}
              className="w-screen h-full object-cover"
              src={image}
              alt={`Img${index}`}
            />
          ))}
        </div>
        <div className="absolute left-0 right-0 mx-auto bottom-16 sm:bottom-44 flex justify-center gap-8">
          {/* ... (previous and next buttons) */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
