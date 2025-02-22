// components/ImageSlider.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Import modules from 'swiper/modules'
import "swiper/css"; // Core Swiper CSS
import "swiper/css/pagination"; // Pagination CSS
import "swiper/css/navigation"; // Navigation CSS

const ImageSlider = () => {
  const slides = [
    {
      image: "/house1.jpeg",
      title: "Beautiful Villas",
      description: `"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam fugiat consequuntur nemo! Magnam aperiam quibusdam, maxime"`,
    },
    {
      image: "/house10.webp",
      title: "Amazing Apartments",
      description:
        '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam fugiat consequuntur nemo! Magnam aperiam quibusdam, maxime"',
    },
    {
      image: "/house5.jpeg",
      title: "Beautiful Cottages",
      description:
        '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam fugiat consequuntur nemo! Magnam aperiam quibusdam, maxime"',
    },
    {
      image: "/call2.jpg",
      title: "24/7 Customer Support",
      description:
        '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam fugiat consequuntur nemo! Magnam aperiam quibusdam, maxime"',
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]} // Add the modules here
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="px-4"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              //   backgroundPosition: 'center',
              height: "720px",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "20px",
                borderRadius: "10px",
                maxWidth: "35rem",
              }}
            >
              <h2 className="bold-2 font-5 py-4">{slide.title}</h2>
              <p className="px-lg-5 block text-left">
                <i>{slide.description}</i>
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
