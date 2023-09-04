import { DeliveryDetails } from "./components/DeliveryDetails";
import { ProductDetails } from "./components/ProductDetails";

export default function Product() {
  return (
    <div className="bg-neutral-100">
      <div className="max-w-screen-xl space-y-5  mx-auto p-4 ">
        <div>
          <div className=" grid w-full grid-cols-12 gap-5">
            <div className=" col-span-8">
              <ProductDetails />
            </div>
            <div className=" col-span-4 bg-white">
              <DeliveryDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
