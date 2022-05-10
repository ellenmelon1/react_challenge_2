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
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    fetchCarouselImages()
      .then((images) => {
        setSlides(images);
        let slidesArray = [];
        for (const [index, element] of images.entries()) {
          slidesArray.push(
            <SwiperSlide key={`slide-${index + 1}`}>
              <div
                style={{
                  backgroundImage: `linear-gradient(to right, #000000B3, #00000000), url(${element.ImageUrl})`,
                }}
                className={`custom_swiper_slide custom_slide${index + 1}`}
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
      })
      .catch((err) => {
        setErrorMessage(err);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <div className="carousel_loading">
      <p>Loading...</p>
    </div>
  ) : errorMessage ? (
    <div className="carousel_error_message">
      <p>{errorMessage}</p>
    </div>
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
