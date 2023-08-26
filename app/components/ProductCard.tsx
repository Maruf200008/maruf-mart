import Image from "next/image";
import productImg from "../images/product1.png";
const ProductCard = () => {
  return (
    <div className=" bg-white border border-neutral-200 rounded-md">
      <div className=" p-4 flex items-center flex-col gap-3">
        <Image height={250} src={productImg} alt="productImg" />
        <div className=" space-y-3 ">
          <h3 className=" font-semibold text-[16px]">
            Rupchanda Fortified Pure Soybean Oil for Cooking
          </h3>
          <p className=" text-sm text-neutral-400">5 Liter</p>
          <p className=" font-bold text-[#009999]">৳422.75</p>
          <div className=" mx-auto py-2 cursor-pointer  text-center border-2 rounded-md border-[#009999]">
            <p>Add to cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
