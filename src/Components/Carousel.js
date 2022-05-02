import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { fetchCarouselImages } from '../api';
import { useState, useEffect } from 'react';

SwiperCore.use([Pagination, Autoplay]);

const Carousel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [slides, setSlides] = useState();

  useEffect(() => {
    fetchCarouselImages().then((images) => {
      setSlides(images);
      let slidesArray = [];
      for (const [index, element] of images.entries()) {
        slidesArray.push(
          <SwiperSlide>
            <img
              src={element.ImageUrl}
              alt={element.alt}
              key={`slide-${index + 1}`}
              className="swiper_img"
            ></img>
            <div className="swiper_text">
              <h2 className="swiper_title">{element['Title']}</h2>
              <p className="swiper_subtitle">{element['Subtitle']}</p>
              <button>Contact us</button>
            </div>
          </SwiperSlide>
        );
      }
      setSlides(slidesArray);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <Swiper
        id="main"
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default Carousel;
