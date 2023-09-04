"use client";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiSolidShareAlt } from "react-icons/bi";

import Image from "next/image";
import ReactStars from "react-rating-star-with-type";
import img from "../../../../server/categories/accessories.jpg";

export const ProductDetails = () => {
  const [star, setStar] = useState(4.2);
  const [isFavourite, setIsFavourite] = useState(false);
  const [count, setCount] = useState(5);
  const handleIncrement = (value) => {
    setCount(value + 1);
  };
  const handleDecrement = (value) => {
    setCount(value - 1);
  };

  const onChange = (nextValue) => {
    setStar(nextValue);
  };
  return (
    <div className=" bg-white p-5">
      <div className=" grid grid-cols-12 gap-4">
        <div className=" col-span-4">
          <Image src={img} alt="img" width={350} />
        </div>
        <div className=" col-span-8 space-y-4">
          <h1 className=" text-xl font-semibold">
            I7S Double Dual Mini Wireless 4.1 Bluetooth Earphone With Power Case
            - White
          </h1>
          <div className=" flex items-center justify-between border-b pb-5">
            <div className=" space-y-2">
              <div className=" flex items-center gap-2 text-[12px] text-[#009999]  ">
                <ReactStars
                  onChange={onChange}
                  value={star}
                  isEdit={true}
                  activeColors={["orange"]}
                />
                <p className="border-r pr-3 border-neutral-600 hover:underline cursor-pointer">
                  1460 Ratings
                </p>
                <p className="hover:underline cursor-pointer">
                  813 Answered Questions
                </p>
              </div>
              <div className=" flex items-center gap-2">
                <p className="text-[12px] text-neutral-400">Brand:</p>
                <p className="text-[12px] text-[#009999] hover:underline border-r border-neutral-600 pr-3 cursor-pointer">
                  No Brand
                </p>
                <p className="text-[12px] text-[#009999] hover:underline cursor-pointer">
                  More Audio from No Brand
                </p>
              </div>
            </div>
            <div className=" flex items-center gap-4">
              <div className=" text-2xl text-neutral-400 cursor-pointer">
                <BiSolidShareAlt />
              </div>
              <div
                onClick={() => setIsFavourite(!isFavourite)}
                className=" text-2xl text-neutral-400 cursor-pointer"
              >
                {isFavourite ? (
                  <div className=" text-red-600">
                    <AiFillHeart />
                  </div>
                ) : (
                  <AiOutlineHeart />
                )}
              </div>
            </div>
          </div>
          <div className=" border-b pb-5">
            <h2 className=" text-[30px] text-orange-600">৳ 274</h2>
            <h2 className=" text-[15px] text-neutral-500 line-through">
              ৳ 1,050
            </h2>
          </div>
          <div className=" flex items-center gap-5">
            <p className=" text-neutral-500 text-[14px]">Quantity</p>
            <div className=" flex items-center gap-3">
              {count === 1 ? (
                <button
                  disabled
                  onClick={() => handleDecrement(count)}
                  className=" bg-neutral-200 px-4  text-neutral-500 text-[30px]"
                >
                  {" "}
                  -{" "}
                </button>
              ) : (
                <button
                  onClick={() => handleDecrement(count)}
                  className=" bg-neutral-200 px-4  text-neutral-500 text-[30px]"
                >
                  {" "}
                  -{" "}
                </button>
              )}
              <p className=" text-lg">{count}</p>
              {count === 5 ? (
                <button
                  disabled
                  onClick={() => handleIncrement(count)}
                  className=" bg-neutral-200 px-3 text-neutral-500 text-[30px]"
                >
                  {" "}
                  +{" "}
                </button>
              ) : (
                <button
                  onClick={() => handleIncrement(count)}
                  className=" bg-neutral-200 px-3 text-neutral-500 text-[30px]"
                >
                  {" "}
                  +{" "}
                </button>
              )}
            </div>
          </div>
          <div className=" mt-5 clear-left flex items-center gap-5">
            <button className=" bg-[#009999] text-white hover:bg-[#009999]/75 transition px-14 py-3">
              Buy Now
            </button>
            <button className=" bg-orange-600 text-white hover:bg-orange-600/75 transition px-14 py-3">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
