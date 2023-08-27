import Image from "next/image";
import Link from "next/link";
import { AiFillYoutube, AiOutlineGithub } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import appleStore from "./images/appleStore.png";
import bangladesh from "./images/bangladesh.png";
import bikash from "./images/bikash.png";
import cashOnDelivery from "./images/cashOnDelivery.png";
import dss from "./images/dss.jpg";
import malisiay from "./images/malaysia.png";
import maldiv from "./images/maldiv.png";
import masterCard from "./images/masterCard.png";
import nagad from "./images/nagad.png";
import pakistan from "./images/pakistan.jpg";
import playStore from "./images/playStore.png";
import qrCode from "./images/qrCode.png";
import roket from "./images/rocket.png";
import srilanka from "./images/srilanks.png";
import visa from "./images/visa.png";

const Footer = () => {
  return (
    <div className=" space-y-10">
      <div className=" bg-[#008ECC] p-10">
        <div className="max-w-screen-xl space-y-5 mx-auto p-4">
          <div className=" flex gap-10">
            <div className=" space-y-3">
              <div>
                <h3 className=" text-white font-semibold">Customer Care</h3>
                <ul className=" text-white text-sm">
                  <Link className=" hover:underline" href="#">
                    <li>Help Center</li>
                  </Link>
                  <Link className=" hover:underline" href="#">
                    <li>How to Buy</li>
                  </Link>
                  <Link className=" hover:underline" href="#">
                    <li>Returns & Refunds</li>
                  </Link>
                  <Link className=" hover:underline" href="#">
                    <li>Contact Us</li>
                  </Link>
                  <Link className=" hover:underline" href="#">
                    <li>Terms & Conditions</li>
                  </Link>
                  <Link className=" hover:underline" href="#">
                    <li>CCMS - Central Complain Management System</li>
                  </Link>
                </ul>
              </div>
              <div>
                <h3 className=" text-white font-semibold">Earn With Daraz</h3>
                <ul className=" text-white text-sm">
                  <Link className=" hover:underline" href="#">
                    <li>Maruf Mart University</li>
                  </Link>
                  <Link className=" hover:underline" href="#">
                    <li>Sell on Daraz</li>
                  </Link>
                  <Link className=" hover:underline" href="#">
                    <li>Code of Conduct</li>
                  </Link>
                  <Link className=" hover:underline" href="#">
                    <li>Join the Daraz Affiliate Program</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <h3 className=" text-white font-semibold">Daraz</h3>
                <ul className=" text-white text-sm">
                  <Link className=" hover:underline" href="#">
                    <li>About Maruf Mart</li>
                  </Link>
                  <Link className=" hover:underline" href="#">
                    <li>Digital Payments</li>
                  </Link>
                  <Link className=" hover:underline" href="#">
                    <li>Privacy Policy</li>
                  </Link>
                  <Link className=" hover:underline" href="#">
                    <li>Maruf Mart Exclusives</li>
                  </Link>
                  <Link className=" hover:underline" href="#">
                    <li>Maruf Mart App</li>
                  </Link>
                  <Link className=" hover:underline" href="#">
                    <li>Maruf Mart Donates</li>
                  </Link>
                  <Link className=" hover:underline" href="#">
                    <li>Maruf Mart Cares</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className=" ml-20">
              <div className=" flex  flex-col gap-5">
                <div>
                  <Image src={qrCode} alt="qrCode" height={100} />
                </div>
                <div className=" flex items-center gap-3">
                  <Image src={appleStore} alt="qrCode" width={140} />
                  <Image src={playStore} alt="qrCode" width={140} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-screen-xl space-y-5 mx-auto p-4">
          <div className=" flex gap-10">
            <div>
              <h3 className="font-semibold">Payment Methods :</h3>
              <div className=" grid grid-cols-3 gap-5 mt-5">
                <Image src={cashOnDelivery} alt="cashOnDelivery" width={50} />
                <Image src={visa} alt="cashOnDelivery" width={50} />
                <Image src={masterCard} alt="cashOnDelivery" width={50} />
                <Image src={bikash} alt="cashOnDelivery" width={50} />
                <Image src={roket} alt="cashOnDelivery" width={50} />
                <Image src={nagad} alt="cashOnDelivery" width={50} />
              </div>
              <p className=" pt-5 text-neutral-500 font-semibold ">
                {" "}
                @ Mohammad Maruf
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Maruf Mart International</h3>
              <div className=" flex items-center gap-5 mt-5">
                <Image src={bangladesh} alt="cashOnDelivery" width={35} />
                <Image src={pakistan} alt="cashOnDelivery" width={35} />
                <Image src={srilanka} alt="cashOnDelivery" width={35} />
                <Image src={maldiv} alt="cashOnDelivery" width={35} />
                <Image src={malisiay} alt="cashOnDelivery" width={35} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Follow Us</h3>
              <div className=" flex items-center gap-5 mt-5">
                <Link
                  href="#"
                  className="text-xl border-2 p-2 rounded-full border-[#1877F2] text-[#1877F2]"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="#"
                  className="text-xl border-2 p-2 rounded-full border-neutral-800 text-neutral-800"
                >
                  <AiOutlineGithub />
                </Link>
                <Link
                  href="#"
                  className="text-xl border-2 p-2 rounded-full border-red-600 text-red-600"
                >
                  <AiFillYoutube />
                </Link>
                <Link
                  href="#"
                  className="text-xl border-2 p-2 rounded-full border-[#1877F2] text-[#1877F2]"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Verified by</h3>
              <Image src={dss} alt="dss" className=" mt-3" />
            </div>
            <div>
              <h3 className="font-semibold">DBID</h3>
              <p className=" text-sm mt-3 text-neutral-500">
                Registration Number: 304903094
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
