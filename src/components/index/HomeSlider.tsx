import React from 'react';
import ImageSlider from './SwiperSlide';

const HomeSlider = () => {
  return (
    <div className="block border">
      <div
        className="block holder"
        style={{
          height: '40rem',
          backgroundImage: 'url(/chauffeurs.png)',
          backgroundRepeat: 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          aspectRatio: 'auto',
        }}
      >
        {/* <img src="" className="img-fit" /> */}
        <ImageSlider />
      </div>
    </div>
  );
};
export default HomeSlider;
