import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar, FreeMode } from 'swiper/modules';
import Image from 'next/image';
import BlackButton from './Button/BlackButton';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Project() {

  useEffect(() => {
    let ctx = gsap.context(() => {
      const body = document.body;
      const changeBodyColor = (color) => {
        gsap.to(body, {
          backgroundColor: color,
          duration: 1, // Duration for smooth transition
          ease: "power2.out",
        });
      };

      ScrollTrigger.create({
        trigger: "#project",
        start: "top 60%", // When the section enters the viewport
        end: "bottom 20%", // When the section is about to leave
        onEnter: () => changeBodyColor("#ffffff"), // Replace with your actual secondary color
        onLeaveBack: () => changeBodyColor("#1C1B1A"), // Revert when scrolling back up
      });
    });
    return () => ctx.revert();
  });

  return (
    <>
      <section id='project' className='pt-[10%] pb-[20%]'>
        <div className='container-lg'>

          <h2 data-para-anim className='title-2'>
            Interior by Versace

          </h2>
          <div className='w-full h-[1px] bg-black/30 my-[4vw] lineDraw'></div>
        </div>
        <div className='w-full flex justify-end mb-[5vw]'>

          <div className='w-[75%] flex justify-between px-[2vw]'>
            <div className='fadeup'>

              <BlackButton btnText={"Enquire Now"} link={"#"} />
            </div>

            <p data-para-anim className='w-[60%]'>
              This project integrates fashion, luxury, and lifestyle to offer a global experience of the Versace world. The collection speaks of know-how, creativity, and pure design, echoing the revered identity of Versace.
            </p>
          </div>
        </div>
        <div className='w-full h-full translate-x-[22%] swipe fadeup cursor-none'>

          <Swiper
            scrollbar={{
              hide: false,
              draggable: true,
            }}
            freeMode={true}
            // freeModeMomentum={true} 
            loop
            slidesPerView={2}
            spaceBetween={20}
            modules={[Scrollbar, FreeMode]}
            className="mySwiper"
          >
            <SwiperSlide className='w-[40vw] h-[30vw] rounded-[2vw] overflow-hidden relative'>

              <Image src="/assets/interior-img-1.png" alt='interior-img-1' fill className='hover:scale-110 transition-all ease-in-out duration-500' />
            </SwiperSlide>
            <SwiperSlide className='w-[40vw] h-[30vw] rounded-[2vw] overflow-hidden relative'><Image src="/assets/interior-img-2.png" alt='interior-img-2' fill className='hover:scale-110 transition-all ease-in-out duration-500' /></SwiperSlide>
            <SwiperSlide className='w-[40vw] h-[30vw] rounded-[2vw] overflow-hidden relative'><Image src="/assets/interior-img-1.png" alt='interior-img-1' fill className='hover:scale-110 transition-all ease-in-out duration-500' /></SwiperSlide>
            <SwiperSlide className='w-[40vw] h-[30vw] rounded-[2vw] overflow-hidden relative'><Image src="/assets/interior-img-2.png" alt='interior-img-2' fill className='hover:scale-110 transition-all ease-in-out duration-500' /></SwiperSlide>
            <SwiperSlide className='w-[40vw] h-[30vw] rounded-[2vw] overflow-hidden relative'><Image src="/assets/interior-img-1.png" alt='interior-img-1' fill className='hover:scale-110 transition-all ease-in-out duration-500' /></SwiperSlide>

          </Swiper>
        </div>

      </section>
    </>
  );
}