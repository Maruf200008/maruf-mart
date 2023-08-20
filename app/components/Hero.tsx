import Image from "next/image";
import image1 from "../images/01.jpg";

const Hero = () => {
  return (
    <div className=" h-[500px] overflow-hidden">
      <Image src={image1} alt="image1" />
    </div>
  );
};

export default Hero;
