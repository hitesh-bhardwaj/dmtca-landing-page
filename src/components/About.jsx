/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

const About = () => {
  const slidesData = [
    {
      iconSrc: "/assets/about/about-icon-1.svg",
      title: "Futuristic Smart City",
      description: "DMTCA Properties presents a diverse array of options tailored to your discerning taste.",
    },
    {
      iconSrc: "/assets/about/about-icon-2.svg",
      title: "Tax Incentives",
      description: "Find exclusive living spaces designed to fit your modern lifestyle.",
    },
    {
      iconSrc: "/assets/about/about-icon-3.svg",
      title: "Easy Connectivity",
      description: "Find exclusive living spaces designed to fit your modern lifestyle.",
    },
    {
      iconSrc: "/assets/about/about-icon-4.svg",
      title: "High-End Recreational Activities",
      description: "Find exclusive living spaces designed to fit your modern lifestyle.",
    },
    {
      iconSrc: "/assets/about/about-icon-5.svg",
      title: "World Class Healthcare",
      description: "Find exclusive living spaces designed to fit your modern lifestyle.",
    },
    {
      iconSrc: "/assets/about/about-icon-6.svg",
      title: "Communal Harmony",
      description: "Find exclusive living spaces designed to fit your modern lifestyle.",
    },
    {
      iconSrc: "/assets/about/about-icon-7.svg",
      title: "International Institutions",
      description: "Find exclusive living spaces designed to fit your modern lifestyle.",
    },
    {
      iconSrc: "/assets/about/about-icon-8.svg",
      title: "Safety for All",
      description: "Find exclusive living spaces designed to fit your modern lifestyle.",
    },
  ];

  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  return (
    <>
      <section className="overflow-hidden bg-[#E0D4C6]" id="about">
        <div className="container-lg py-[10%] mobile:py-[20%] mobile:pb-[40%] tablet:py-[15%]">
          
          <div className="w-full flex justify-between  tablet:flex-col tablet:gap-[8vw]">
            <h2
              data-para-anim
              className="w-[40%] text-[3.8vw] title-2 mt-[-1vw] tablet:w-[90%]"
            >
              Luxury Living Awaits You In Dubai's Elite Neighbourhood
            </h2>
            <p data-para-anim className=" w-[40%] tablet:w-full">
              Welcome to 53 West 53, a masterpiece nestled in the iconic Burj
              Khalifa District, where elegance meets exclusivity. This luxurious
              haven invites you to experience a lifestyle adorned with
              world-class amenities and curated spaces. Indulge in breathtaking
              skyline views, sophisticated recreational activities and private
              access to cultural landmarks. Here, every moment becomes a
              statement of your taste, setting the stage for a life of
              unparalleled sophistication.
            </p>
          </div>
          <div className="swiper-container mt-[10vw] tablet:w-[100vw] tablet:ml-[-5vw]">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={100}
              slidesPerView={5}
              centeredSlides={true}
              roundLengths={true}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                }}}
             
            >
              {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex flex-col justify-center items-center gap-[5vw]">
              <div className="w-fit h-[20vw] flex justify-center items-center mobile:h-[90vw] tablet:h-[30vw]">
                <div className="w-[11vw] h-[11vw] border border-amber-600 rounded-full p-[3vw] slider-circle bg-white mobile:w-[80vw] mobile:h-[80vw] tablet:w-[20vw] tablet:h-[20vw] tablet:p-[5vw]">
                  <Image src={slide.iconSrc} alt="slide icon" width={50} height={50} className="object-contain w-full h-full" />
                </div>
              </div>
              <div className="slider-circle-content w-[30vw] mobile:w-[90vw] tablet:w-[50vw]">
                <h3 className="text-[1.7vw] text-head uppercase font-medium mb-[1vw] mobile:text-[4.5vw] tablet:text-[3vw]">
                  {slide.title}
                </h3>
                <p className="mobile:hidden tablet:hidden">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
            </Swiper>

            <div className="flex gap-[1.5vw] absolute top-[-10%] right-0 tablet:bottom-[-15%] tablet:top-auto tablet:left-[50%] tablet:translate-x-[-50%] tablet:right-auto mobile:gap-[5vw]">
              <button
                onClick={handlePrev}
                className="w-[3vw] group border border-black rounded-full h-[3vw] flex items-center relative justify-center p-[1vw] overflow-hidden tablet:w-[10vw] tablet:h-[10vw] tablet:p-[2.5vw] mobile:w-[15vw] mobile:h-[15vw]"
              >
                <Image
                  quality={100}
                  alt="arrow icon"
                  width={24}
                  height={24}
                  loading="lazy"
                  className="rotate-180 z-10 invert group-hover:invert-0 duration-300"
                  src="/assets/icons/arrow.svg"
                />
                <span className="block absolute scale-0 h-full w-full bg-black group-hover:scale-100 duration-300 rounded-full" />
              </button>
              <button
                onClick={handleNext}
                className="w-[3vw] border group border-black rounded-full h-[3vw] flex items-center relative justify-center p-[1vw] overflow-hidden tablet:w-[10vw] tablet:h-[10vw] tablet:p-[2.5vw] mobile:w-[15vw] mobile:h-[15vw]"
              >
                <Image
                  alt="arrow icon"
                  width={24}
                  height={24}
                  loading="lazy"
                  className="z-10 invert group-hover:invert-0 duration-300"
                  src="/assets/icons/arrow.svg"
                />
                <span className="block absolute scale-0 h-full w-full bg-black group-hover:scale-100 duration-300 rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
