"use client";
import Image from "next/image";
import { useState } from "react";
import ReactStars from "react-rating-star-with-type";

const JFCard = ({ product }) => {
  const { img, price, rating, ratingCount, title } = product;
  const [star, setStar] = useState(rating);
  console.log(product);

  const onChange = (nextValue) => {
    setStar(nextValue);
  };
  return (
    <div className=" bg-white cursor-pointer hover:shadow-lg  transition ease-in-out rounded-md ">
      <div className=" p-4 flex items-center flex-col gap-3">
        <Image height={250} width={250} src={img} alt="productImg" />
        <div className=" space-y-1 ">
          <h3 className=" font-semibold text-[16px]">
            {title.length > 20 ? title.slice(0, 40) + "..." : title}
          </h3>
          <div className=" flex items-center gap-4">
            <p className=" font-bold text-[#009999]">৳{price}</p>
          </div>
          <div className=" flex items-center gap-2">
            <ReactStars
              onChange={onChange}
              value={star}
              isEdit={true}
              activeColors={["orange"]}
            />
            <p className=" text-neutral-400 text-[12px]">({ratingCount})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JFCard;
