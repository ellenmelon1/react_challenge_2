import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import '../Styling/carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { fetchCarouselImages } from '../api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
          <SwiperSlide key={`slide-${index + 1}`}>
            <div
              style={{
                backgroundImage: `linear-gradient(to right, #000000B3, #00000000), url(${element.ImageUrl})`,
              }}
              className="custom_swiper_slide"
            >
              <div className="swiper_text">
                <h2>{element['Title']}</h2>
                <p>{element['Subtitle']}</p>
                <Link to="/contact-us">
                  <button>Contact us</button>
                </Link>
              </div>
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
