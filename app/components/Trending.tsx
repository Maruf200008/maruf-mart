import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductCards from "./ProductCards";

const Trending = () => {
  return (
    <div className="  max-w-screen-2xl space-y-5    mx-auto p-4">
      <div className=" flex justify-between items-center ">
        <p className=" text-2xl font-bold text-neutral-700">Trending Now</p>
        <div className=" flex items-center justify-center gap-4">
          <p>See All</p>
          <div className=" cursor-pointer border-2 border-neutral-300 p-2 rounded-lg bg-neutral-50">
            <IoIosArrowBack />
          </div>
          <div className="cursor-pointer border-2 border-neutral-300 p-2 rounded-lg">
            <IoIosArrowForward />
          </div>
        </div>
      </div>

      <ProductCards />
    </div>
  );
};

export default Trending;
