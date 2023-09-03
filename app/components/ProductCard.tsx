import Image from "next/image";
const ProductCard = ({ product }) => {
  const { price, oldPrice, sold, title, img } = product;
  console.log(product);
  return (
    <div className=" bg-white border border-neutral-200 rounded-md">
      <div className=" p-4 flex items-center flex-col gap-3">
        <Image height={250} width={250} src={img} alt="productImg" />
        <div className=" space-y-3 ">
          <h3 className=" font-semibold text-[16px]">
            {title.length > 20 ? title.slice(0, 40) + "..." : title}
          </h3>
          <div className="">
            <p className=" font-bold text-[#009999]">৳{price}</p>
            <p className=" text-sm text-neutral-400 line-through">
              ৳{oldPrice}
            </p>
            <p className=" text-orange-600 font-semibold">
              {sold === 0 ? "Almost sold out" : `${sold} sold`}{" "}
            </p>
          </div>

          <div className=" mx-auto py-2 cursor-pointer  text-center border-2 rounded-md hover:bg-[#009999] transition hover:text-white border-[#009999]">
            <p>Add to cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
