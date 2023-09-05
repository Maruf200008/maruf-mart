import {
  AiOutlineInfoCircle,
  AiOutlineSafetyCertificate,
} from "react-icons/ai";

import { GiMoneyStack } from "react-icons/gi";
import { SlLocationPin } from "react-icons/sl";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
export const DeliveryDetails = () => {
  return (
    <div className=" p-4">
      <div className=" space-y-5">
        <div className=" flex items-center justify-between">
          <p className=" text-sm text-neutral-400">Delivery</p>
          <div className=" text-neutral-400  cursor-pointer">
            <AiOutlineInfoCircle />
          </div>
        </div>
        <div className=" flex items-center justify-between border-b pb-3 ">
          <div className=" flex items-center gap-2">
            <div className=" text-2xl">
              <SlLocationPin />
            </div>
            <p className=" text-[16px]">
              Dhaka, Dhaka North, Banani Road No. 12 - 19
            </p>
          </div>
          <div className=" pl-7">
            <p className=" text-[#009999] text-[15px] cursor-pointer">CHANGE</p>
          </div>
        </div>
        <div className="  border-b pb-3 space-y-4">
          <div className=" flex items-center justify-between ">
            <div className=" flex items-center gap-2">
              <div className=" text-2xl text-neutral-500">
                <TbTruckDelivery />
              </div>
              <div className=" flex items-center gap-5">
                <div>
                  <p className=" text-[15px] font-semibold ">
                    Standard Delivery
                  </p>
                  <p className=" text-[12px]">8 - 15 day(s)</p>
                </div>
                <p className=" text-[12px]  ">13 Sep - 20 Sep</p>
              </div>
            </div>
            <div className=" pl-7">
              <p className=" text-[14px]">৳ 55</p>
            </div>
          </div>
          <div className=" flex items-center ">
            <div className=" flex items-center gap-2">
              <div className=" text-2xl text-neutral-500">
                <GiMoneyStack />
              </div>
              <div className=" flex items-center gap-5">
                <div>
                  <p className=" text-[15px]">Cash on Delivery Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  border-b pb-3 space-y-4">
          <div className=" flex items-center justify-between">
            <p className=" text-sm text-neutral-600">Service</p>
            <div className=" text-neutral-400  cursor-pointer">
              <AiOutlineInfoCircle />
            </div>
          </div>
          <div className=" flex items-center justify-between ">
            <div className=" flex items-center gap-2">
              <div className=" text-2xl text-neutral-500">
                <TbTruckReturn />
              </div>
              <div className=" flex items-center gap-5">
                <div>
                  <p className=" text-[15px] font-semibold ">7 Day Return</p>
                  <p className=" text-[12px]">Change of mind applicable</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex items-center ">
            <div className=" flex items-center gap-2">
              <div className=" text-2xl text-neutral-500">
                <AiOutlineSafetyCertificate />
              </div>
              <div className=" flex items-center gap-5">
                <div>
                  <p className=" text-[15px]">Warranty not available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
