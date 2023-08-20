import {
  AiOutlineBars,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiSolidOffer } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="max-w-screen-2xl space-y-5  flex flex-wrap items-center  mx-auto p-4">
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
      <div className=" w-full">
        <div className=" flex justify-between">
          <div>
            <h2 className=" text-xl font-semibold text-[#008ECC]">
              Maruf Mart
            </h2>
          </div>
          <div className=" w-[750px]">
            <form className="flex items-center">
              <label className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#008ECC] text-xl">
                  <AiOutlineSearch />
                </div>
                <input
                  type="text"
                  id="voice-search"
                  className=" text-sm rounded-lg   w-full pl-10 p-2.5 focus:outline-none bg-[#F3F9FB] border-2 border-[#008ECC]  "
                  placeholder="Search essentials, groceries and more..."
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#008ECC] text-xl"
                >
                  <AiOutlineBars />
                </button>
              </div>
            </form>
          </div>
          <div className=" flex items-center gap-5">
            <div className=" flex items-center gap-2 ">
              <div className=" text-[#008ECC] text-xl">
                <AiOutlineShoppingCart />
              </div>
              <p className=" mr-3 text-gray-600 font-semibold">Cart</p>
            </div>
            <div className=" flex items-center gap-2 border-r border-gray-300">
              <div className=" text-[#008ECC] text-xl">
                <FiUser />
              </div>
              <p className=" mr-3 text-gray-600 font-semibold">
                Sign Up/Sign In
              </p>
            </div>
            <div className=" flex items-center gap-2 border-r border-gray-300">
              <div className=" text-[#008ECC] text-xl">
                <FiUser />
              </div>
              <p className=" mr-3 text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
