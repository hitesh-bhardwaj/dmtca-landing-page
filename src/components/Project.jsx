/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import Image from 'next/image';
import BlackButton from './Button/BlackButton';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

gsap.registerPlugin(ScrollTrigger);

export default function Project() {

  

    useEffect(() => {
      if(globalThis.innerWidth>1024){

        let ctx = gsap.context(() => {
          const body = document.body;
          const changeBodyColor = (color) => {
            gsap.to(body, {
              backgroundColor: color,
              duration: 1,
              ease: "power2.out",
            });
          };
    
          ScrollTrigger.create({
            trigger: "#project",
            start: "top 60%", 
            end: "bottom 20%", 
            onEnter: () => changeBodyColor("#ffffff"),
            onLeaveBack: () => changeBodyColor("#1C1B1A"), 
          });
        });
        return () => ctx.revert();
      }
    });
  

  return (
    <>
      <section id='project' className='pt-[10%] pb-[20%] mobile:pt-[20%] mobile:pb-[10%] tablet:py-[10%] w-screen overflow-hidden'>
        <div className='container-lg'>
          <h2 data-para-anim className='title-2'>
            A World of Refinement
          </h2>
          <div className='w-full h-[1px] bg-black/30 my-[4vw] lineDraw mobile:my-[8vw] tablet:my-[5vw]'></div>
        <div className='w-full flex justify-end mb-[5vw]'>
          <div className='w-[75%] flex justify-between px-[2vw] tablet:w-full tablet:flex-col tablet:gap-[7vw]'>
            <div className='fadeup tablet:order-1'>
              <BlackButton btnText={"Enquire Now"} link={"#"} />
            </div>
            <p data-para-anim className='w-[60%] tablet:w-full'>
              Immerse yourself in the stylish allure of 53 West 53, where every corner exudes sophistication. This not just a residence, it’s a mark of distinction that embodies the luxurious lifestyle you&apos;ve always craved.
            </p>
          </div>
        </div>
        </div>
        <div className='w-[70%] ml-auto h-full swipe fadeup tablet:w-[100vw] mobile:mt-[15vw] tablet:pl-[5%] tablet:mt-[5vw]'>
          <Swiper
            slidesPerView={1.5}
            spaceBetween={20}
            freeMode={true}
            grabCursor={true}
            scrollbar={{ draggable: true }}
            modules={[Scrollbar, FreeMode]}
            className="mySwiper w-full "
          >
            <SwiperSlide className='w-[40vw] h-[30vw] rounded-[2vw] overflow-hidden relative tablet:h-[70vw]'>
              <Image src="/assets/interior-img-1.png" alt='interior-img-1' fill className='hover:scale-110 transition-all ease-in-out duration-500' />
            </SwiperSlide>
            <SwiperSlide className='w-[40vw] h-[30vw] rounded-[2vw] overflow-hidden relative'>
              <Image src="/assets/interior-img-2.png" alt='interior-img-1' fill className='hover:scale-110 transition-all ease-in-out duration-500' />
            </SwiperSlide>
            <SwiperSlide className='w-[40vw] h-[30vw] rounded-[2vw] overflow-hidden relative'>
              <Image src="/assets/interior-img-1.png" alt='interior-img-1' fill className='hover:scale-110 transition-all ease-in-out duration-500' />
            </SwiperSlide>
            <SwiperSlide className='w-[40vw] h-[30vw] rounded-[2vw] overflow-hidden relative'>
              <Image src="/assets/interior-img-2.png" alt='interior-img-1' fill className='hover:scale-110 transition-all ease-in-out duration-500' />
            </SwiperSlide>
            <SwiperSlide className='w-[40vw] h-[30vw] rounded-[2vw] overflow-hidden relative'>
              <Image src="/assets/interior-img-1.png" alt='interior-img-1' fill className='hover:scale-110 transition-all ease-in-out duration-500' />
            </SwiperSlide>
            <SwiperSlide className='w-[40vw] h-[30vw] rounded-[2vw] overflow-hidden relative' style={{marginRight: 50}}>
              <Image src="/assets/interior-img-2.png" alt='interior-img-1' fill className='hover:scale-110 transition-all ease-in-out duration-500' />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}