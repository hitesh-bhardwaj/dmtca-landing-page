import Image from "next/image";
import React from "react";
import PrimaryButton from "./Button/PrimaryButton";
import Link from "next/link";
import EnquiryForm from "./Enquiryform";

const Hero = () => {
  return (
    <>
      <section id="hero" className="">
        <div className="w-screen h-[130vw] relative overflow-hidden container-lg pt-[3%] mobile:h-[120vh] mobile:pt-[7%]">
          <Link href={"#"} className="block fadeup">
            <Image quality={100}
              src="/assets/logo.png"
              alt="logo-img"
              width={170}
              height={170}
              className="object-contain mobile:w-[30vw]" />
          </Link>

          <Image
            quality={100}
            data-scroll
            data-scroll-speed="-0.7"
            src="/assets/hero-image.png"
            alt="Hero Image"
            fill
            className="object-cover w-full h-full object-top relative z-[-1]"
          />
          <div className="w-[55%] flex flex-col gap-[6vw] mt-[15vw] mb-[8vw] mobile:w-[90%] mobile:mt-[20vh] mobile:mb-[12vw] mobile:gap-[12vw]">
            <p data-para-anim className="text-[1.5vw] text-white tracking-wide opacity-90 w-[80%] mobile:text-[4.5vw]">Experience Iconic Luxury Living at Dubai’s Most Prestigious and Exclusive Address</p>

            <div className="w-full h-[1px] bg-white lineDraw"></div>
          </div>
          <div className="relative z-10">
            <h1 className="text-white text-[10vw] leading-none text-head font-light uppercase flex flex-col gap-[1vw] opacity-90 mobile:text-[14vw] mobile:gap-[4vw]">
              <span data-para-anim>Live In</span>
             
              <div className="flex items-center gap-[1.5vw] mobile:flex-col mobile:items-start mobile:gap-[4vw]">

                <span data-para-anim>Grandeur</span>
                <span className="w-fit h-fit p-[2vw] rounded-full flex justify-center items-center border-[2px] border-white cursor-pointer fadeup mobile:p-[4vw]">
                  <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-icon rotate-90 w-[3vw] h-[3vw] mobile:w-[7vw] mobile:h-[7vw]">
                    <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className="btn-path" fill="white" />
                    <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className="btn-path" fill="white" />
                  </svg>
                </span>
              </div>
            </h1>
          </div>
          <div className="flex flex-col my-[10vw] gap-[6vw] mobile:gap-[10vw] mobile:mt-[20vw]">
            <div className="fadeup">

            <PrimaryButton link={"#"} btnText={"Enquire Today"} className="shadow-2xl drop-shadow-2xl " />
            </div>

            <p data-para-anim className="text-[1.5vw] text-white opacity-90 tracking-wide w-[40%] mobile:text-[4.5vw] mobile:w-[70%]">We Elevate Your Lifestyle With World-Class Architectural Creations</p>
          </div>
          <div className="">

          <EnquiryForm/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
