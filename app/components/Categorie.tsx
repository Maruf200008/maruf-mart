import Image from "next/image";
import product1 from "../images/juarcy.jpg";

const Categorie = () => {
  return (
    <div className=" border-2 border-neutral-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition p-3">
      <div className=" flex items-center flex-col justify-center">
        <Image src={product1} alt="product1" height={150} />
        <div>
          <p className=" text-lg font-semibold">Jerseys</p>
        </div>
      </div>
    </div>
  );
};

export default Categorie;
