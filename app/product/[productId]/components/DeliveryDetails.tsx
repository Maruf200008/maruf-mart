import { AiOutlineInfoCircle } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
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
        <div className=" flex items-center justify-between ">
          <div className=" flex items-center gap-2">
            <div className=" text-2xl">
              <SlLocationPin />
            </div>
            <p className=" text-[16px]">
              Dhaka, Dhaka North, Banani Road No. 12 - 19
            </p>
          </div>
          <div className=" pl-7">
            <p className=" text-[#009999]">CHANGE</p>
          </div>
        </div>
      </div>
    </div>
  );
};
