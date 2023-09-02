"use client";
import Image from "next/image";
import { useState } from "react";
import ReactStars from "react-rating-star-with-type";
import productImg from "../../images/product1.png";

const JFCard = () => {
  const [star, setStar] = useState(5);

  const onChange = (nextValue) => {
    setStar(nextValue);
    console.log(nextValue);
  };
  return (
    <div className=" bg-white cursor-pointer hover:shadow-lg  transition ease-in-out rounded-md ">
      <div className=" p-4 flex items-center flex-col gap-3">
        <Image height={250} src={productImg} alt="productImg" />
        <div className=" space-y-1 ">
          <h3 className=" font-semibold text-[16px]">
            Rupchanda Fortified Pure Soybean Oil for Cooking
          </h3>
          <div className=" flex items-center gap-4">
            <p className=" font-bold text-[#009999]">৳422.75</p>
            <p className=" line-through text-neutral-400 text-[13px]">
              ৳522.75
            </p>
          </div>
          <div className=" flex items-center gap-2">
            <ReactStars
              onChange={onChange}
              value={3.5}
              isEdit={true}
              activeColors={["orange"]}
            />
            <p className=" text-neutral-400 text-[12px]">(211)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JFCard;
