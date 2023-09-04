import Image from "next/image";

const Categorie = ({ categori }) => {
  const { img, title } = categori;

  return (
    <div className=" border-2 border-orange-400 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition p-3">
      <div className=" flex items-center flex-col justify-center">
        <Image src={img} alt="product1" height={350} width={350} />
        <div>
          <p className=" font-semibold">
            {title.length > 10 ? title.slice(0, 10) + "..." : title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categorie;
