import Image from "next/image";
import React from "react";
import PrimaryButton from "./Button/PrimaryButton";
import Link from "next/link";
import EnquiryForm from "./Enquiryform";

const Hero = () => {
  return (
    <>
      <section id="hero" className="">
        <div className="w-screen h-[130vw] relative overflow-hidden container-lg pt-[3%]">
          <Link href={"#"}>
            <Image quality={100}
              src="/images/logo.png"
              alt="logo-img"
              width={170}
              height={170}
              className="object-contain" />
          </Link>

          <Image
            quality={100}
            data-scroll
            data-scroll-speed="-0.7"
            src="/Images/hero-image.png"
            alt="Hero Image"
            fill
            className="object-cover w-full h-full object-top relative z-[-1]"
          />
          <div className="w-[55%] flex flex-col gap-[6vw] mt-[15vw] mb-[8vw]">
            <p className="text-[1.5vw] text-white tracking-wide opacity-90 w-[80%]">Experience Iconic Luxury Living at Dubai’s Most Prestigious and Exclusive Address</p>

            <div className="w-full h-[1px] bg-white"></div>
          </div>
          <div className="relative z-10">
            <h1 className="text-white text-[10vw] leading-none text-head font-light uppercase flex flex-col gap-[1vw] opacity-90">
              <span>Live</span>
              <span>In</span>
              <div className="flex items-center gap-[1.5vw]">

                <span>Grandeur</span>
                <span className="w-fit h-fit p-[2vw] rounded-full flex justify-center items-center border-[2px] border-white cursor-pointer">
                  <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-icon rotate-90 w-[3vw] h-[3vw]">
                    <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className="btn-path" fill="white" />
                    <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className="btn-path" fill="white" />
                  </svg>
                </span>
              </div>
            </h1>
          </div>
          <div className="flex flex-col my-[10vw] gap-[6vw]">

            <PrimaryButton link={"#"} btnText={"Enquire Today"} className="shadow-2xl drop-shadow-2xl" />
            <p className="text-[1.5vw] text-white opacity-90 tracking-wide w-[40%]">We Elevate Your Lifestyle With World-Class Architectural Creations</p>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
};

export default Hero;
