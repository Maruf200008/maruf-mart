import { BiSolidOffer } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="max-w-screen-2xl  flex flex-wrap items-center  mx-auto p-4">
      <div className=" flex items-center justify-between w-full">
        <div className="text-gray-500">
          <p>Assignment of AIDE</p>
        </div>
        <div className=" flex items-center gap-5">
          <div className=" flex items-center gap-2">
            <div className=" text-[#008ECC] text-2xl">
              <IoLocationOutline />
            </div>
            <p className=" text-gray-500">
              Deliver to <span className=" font-semibold">423651</span>
            </p>
          </div>
          <div className=" flex items-center gap-2">
            <div className=" text-[#008ECC]  text-2xl">
              <CiDeliveryTruck />
            </div>
            <p className=" text-gray-500">Track your order</p>
          </div>
          <div className=" flex items-center gap-2">
            <div className=" text-[#008ECC]  text-2xl">
              <BiSolidOffer />
            </div>
            <p className=" text-gray-500">All Offers</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
