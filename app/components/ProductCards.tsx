"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useGetFlashSaleQuery } from "../redux/flashSale/flashSaleApi";
import ProductCard from "./ProductCard";

const ProductCards = () => {
  const { isLoading, isError, data } = useGetFlashSaleQuery();

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>Somthing is error</div>;
  } else if (!isLoading && !isError && data.length === 0) {
    content = <div>No categories found!!</div>;
  } else if (!isLoading && !isError && data.length > 0) {
    content = data.map((product) => (
      <SwiperSlide key={product.id}>
        <ProductCard product={product} />
      </SwiperSlide>
    ));
  }
  return (
    <div className=" mx-14 ">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        {content}
      </Swiper>
    </div>
  );
};

export default ProductCards;
