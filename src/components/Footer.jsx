import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section id="footer" className="z-10 relative">
      <div className="container-lg w-screen h-full rounded-t-[40px] bg-[#E0D4C6] text-[#1C1B1A]">
        <div className=" py-[5%] flex flex-col gap-[6vw]">
          <div className="w-full relative">
            <div className="flex items-center justify-center gap-[1vw] absolute left-0 top-0">
              <div className="relative h-[1vw] w-[1vw] flex items-center justify-center bg-[#1C1B1A] rounded-full p-[2vw] overflow-hidden ">
                <div className="relative h-full w-full p-[1vw]">
                  <Image
                    src="/Images/icons/facebook.svg"
                    fill
                    alt="facebook-icon"
                  />
                </div>
              </div>
              <div className="relative h-[1vw] w-[1vw] flex items-center justify-center bg-[#1C1B1A] rounded-full p-[2vw] overflow-hidden">
                <div className="relative h-full w-full p-[1vw]">
                  <Image
                    src="/Images/icons/twitter.svg"
                    fill
                    alt="twitter-icon"
                  />
                </div>
              </div>
              <div className="relative h-[1vw] w-[1vw] flex items-center justify-center bg-[#1C1B1A] rounded-full p-[2vw] overflow-hidden">
                <div className="relative h-full w-full p-[1vw]">
                  <Image
                    src="/Images/icons/instagram.svg"
                    fill
                    alt="instagram-icon"
                  />
                </div>
              </div>
              <div className="relative h-[1vw] w-[1vw] flex items-center justify-center bg-[#1C1B1A] rounded-full p-[2vw] overflow-hidden">
                <div className="relative h-full w-full p-[1vw]">
                  <Image
                    src="/Images/icons/linkedin.svg"
                    fill
                    alt="linkedin-icon"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className=" flex items-center justify-center h-[5vw] w-[15vw] absolute left-[50%] translate-x-[-50%]">
                <div className="relative h-full w-full ">
                  <Image
                    src="/Images/icons/logo-black.svg"
                    fill
                    alt="logo-img"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="absolute h-[3vw] w-[3vw] flex items-center justify-center bg-[#1C1B1A] rounded-full p-[2vw] overflow-hidden right-0">
                <div className="relative h-full w-full p-[1vw]">
                  <Image
                    src="/Images/icons/CaretRight.svg"
                    fill
                    alt="CaretRight-icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div>
                <div>
                    <p className=" text-[3.4vw] font-medium">(+234) 7046336078</p>
                </div>
                <div>
                    <p className="text-[3.4vw] font-medium">
                    nigeria@dmtca.com
                    </p>
                </div>
            </div>

          </div>

          <div className="flex items-center justify-between">
            <div className="w-[15%]">
                <p className="text-[1.1vw]  uppercase ">All rights reserved @2024 dmtca</p>
            </div>
            <div className="w-[30%]">
                <p className="text-[1.1vw] leading-[1.2] text-center">315b Akin Ogunlewe Rd, Victoria Island, Lagos & No. 1, Adekunle Owobiyi Close, Ogba, Lagos, Nigeria</p>
            </div>
            <div>
                <p className="text-[1.1vw]  uppercase">PRIVACY POLICY</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;