'use client';

import React, { useState, useEffect, useRef } from 'react';

const images = [
  { src: '/chauffeurs.png', text: 'Fast & Reliable Transport' },
  { src: '/chauffeurs.png', text: 'Affordable Pricing' },
  { src: '/chauffeurs.png', text: '24/7 Customer Support' },
];

// Duplicate first image at the end for smooth transition
const extendedImages = [...images, images[0]];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === images.length) {
      setTimeout(() => {
        setCurrentIndex(0);
        if (sliderRef.current) {
          sliderRef.current.style.transition = 'none'; // Disable transition for instant reset
        }
      }, 500); // Delay reset to match transition time
    } else if (sliderRef.current) {
      sliderRef.current.style.transition = 'transform 0.5s ease-in-out'; // Smooth slide transition
    }
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <div
        ref={sliderRef}
        className="slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {extendedImages.map((item, index) => (
          <div key={index} className="slide">
            <img src={item.src} alt={`Service ${index + 1}`} />
            <div className="overlay">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
