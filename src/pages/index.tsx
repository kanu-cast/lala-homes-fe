import React from "react";
import AboutUs from "@/components/index/AboutUs";
import WhyUsSection from "@/components/index/WhyUsSection";
import ProductList from "@/components/index/ProductList";
import EndorsementList from "@/components/index/EndorsementList";
import ImageSlider from "@/components/index/SwiperSlide";

export default function IndexWrapper() {
  return (
    <div
      className="card block shadow-stable br-3 mt-3"
      style={{ minHeight: "100vh" }}
    >
      <ImageSlider />
      <div className="block px-lg-5">
        <AboutUs />
      </div>
      <div className="block px-lg-5 text-center">
        <ProductList />
      </div>
      <div className="block px-lg-5">
        <WhyUsSection />
      </div>
      <div className="block px-lg-5 px-0">
        <EndorsementList />
      </div>
    </div>
  );
}
