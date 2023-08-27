"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import hero1 from "../images/hero1.jpg";
import hero2 from "../images/hero2.jpg";
import hero3 from "../images/hero3.jpg";
import hero4 from "../images/hero4.jpg";
import hero5 from "../images/hero5.jpg";

const sliderImages = [hero1, hero2, hero3, hero4, hero5];

const Hero = () => {
  return (
    <div className="max-w-screen-2xl space-y-5  flex flex-wrap items-center  mx-auto p-4">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className=" h-[500px] rounded-xl overflow-hidden">
              <Image src={image} alt="heroImg" />{" "}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
