import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import PrimaryButton from "./Button/PrimaryButton";
import Link from "next/link";

const EnquiryForm = dynamic(() => import("./Enquiryform"));

const Hero = () => {
  
  return (
    <>
      <section id="hero" className="">
        <div className="w-screen h-full relative ">

        <div className="w-screen h-[125vw] relative overflow-hidden container-lg pt-[3%] tablet:h-[240vw] tablet:pt-[7%]">
          <div className="flex justify-between items-center">
            <Link href="/property1" className="block fadeup">
              <Image
                quality={100}
                src="/assets/53-west-logo.svg"
                alt="logo-img"
                priority={true}
                width={160}
                height={24}
                className="object-contain mobile:w-[30vw] tablet:w-[20vw]"
              />
            </Link>
            <Link href="/property1" className="block fadeup">
              <Image
                quality={100}
                src="/assets/hogar-logo.svg"
                alt="logo-img"
                width={140}
                priority={true}
                height={48}
                className="object-contain mobile:w-[28vw] tablet:w-[20vw]"
              />
            </Link>
          </div>

          <Image
            priority={true}
            quality={90}
            data-scroll
            data-scroll-speed="-0.7"
            src="/assets/hero-1.png"
            alt="Hero Image"
            fill
            className="object-cover w-full h-full object-top relative z-[-1]"
          />
          <div className="w-[55%] flex flex-col gap-[6vw] mt-[15vw] mb-[8vw] tablet:w-[90%] tablet:mt-[20vh] tablet:mb-[12vw] tablet:gap-[12vw]">
            <p
              
              
              className="text-[1.5vw] text-white tracking-wide opacity-90 w-[80%] mobile:text-[4.5vw] tablet:text-[3.2vw]"
            >
              Experience Iconic Luxury Living at Dubai&apos;s Most Prestigious
              and Exclusive Address
            </p>
            <div className="w-full h-[1px] bg-white lineDraw"></div>
          </div>
          <div className="relative z-10">
            <h1 className="text-white text-[10vw] leading-[1] text-head font-light uppercase flex flex-col gap-[1vw] opacity-90 tablet:text-[14vw] tablet:gap-[4vw]">
              <span data-para-anim>Live In</span>
              <div className="flex items-start gap-[1.5vw] tablet:flex-col tablet:items-start tablet:gap-[4vw]">
                <span data-para-anim>Grandeur</span>
                <a
                  aria-label="Select Title"
                  data-scroll
                  data-scroll-to
                  data-scroll-duration="2s"
                  href="#about"
                  className="w-fit mt-[0.5vw] tablet:mt-0 h-fit p-[2vw] rounded-full flex justify-center items-center border-[2px] border-white cursor-pointer fadeup tablet:p-[4vw]"
                >
                  <svg
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="btn-icon rotate-90 w-[3vw] h-[3vw] tablet:w-[7vw] tablet:h-[7vw]"
                  >
                    <path
                      data-v-f4363f2a
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z"
                      className="btn-path"
                      fill="white"
                    />
                    <path
                      data-v-f4363f2a
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z"
                      className="btn-path"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </h1>
          </div>
          <div className="flex flex-col my-[10vw] gap-[6vw] mobile:gap-[10vw] mobile:mt-[20vw] tablet:gap-[5vw] tablet:mt-[10vw]">
            <div className="fadeup">
              <PrimaryButton
                link={"#"}
                btnText={"Enquire Today"}
                className="shadow-2xl drop-shadow-2xl "
              />
            </div>
            <p
              
              className="text-[1.5vw] text-white opacity-90 tracking-wide w-[40%] mobile:text-[4.5vw] tablet:w-[70%] tablet:text-[3.2vw]"
            >
              We Elevate Your Lifestyle With World-Class Architectural
              Creations
            </p>
          </div>
        </div>
          <div className="mobile:px-[5vw] mobile:pt-[15vw] bg-[#E0D4C6]">
              <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
