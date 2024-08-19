import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import banner1 from "../assets/images/slider/banner1.webp";
import banner2 from "../assets/images/slider/banner2.webp";
import banner3 from "../assets/images/slider/banner3.webp";
import banner4 from "../assets/images/slider/banner4.webp";

const Slider = () => {
  return (
    <Swiper
      className="flex w-full h-[80svh]"
      style={{
        "--swiper-navigation-color": "#dbb13b",
        "--swiper-pagination-color": "#dbb13b",
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{ clickable: true }}
      navigation={{ clickable: true }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <img
          src={banner1}
          alt=""
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={banner2}
          alt=""
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={banner3}
          alt=""
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={banner4}
          alt=""
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
