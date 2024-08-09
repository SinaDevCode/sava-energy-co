import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import banner1 from "../images/banners/banner1.png";
import banner2 from "../images/banners/banner2.png";
import banner3 from "../images/banners/banner3.png";
import banner4 from "../images/banners/banner4.png";

function Slider() {
  return (
    <Swiper
      className="flex w-full h-[80vh]"
      style={{
        "--swiper-navigation-color": "#1ebdb8",
        "--swiper-pagination-color": "#1ebdb8",
      }}
      autoplay={{
        delay: 4000,
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
}

export default Slider;
