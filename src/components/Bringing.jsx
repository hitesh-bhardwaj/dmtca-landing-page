import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Bringing = () => {
  const BringingRef = useRef(null);
  const videoRef = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: BringingRef.current,
      //     pin: true,
      //     start: "top top",
      //     end: "+=2000 bottom",
      //     scrub: 0.5,
      //     // markers: true
      //   }
      // });
      // tl.fromTo(".video", {
      //     width: "20vw",
      //     height: "10vw",
      //     left: "65%",
      //     top: "0%",
      //   }, {
      //   width: "80vw",
      //   height: "40vw",
      //   delay: 0.35,
      //   // top: "-120%",
      //   left: 0,
      //   zIndex: "200",
      //   ease: "none"
      // });

      gsap.from(".text1", {
        xPercent: 120,
        duration: 3,
        scrollTrigger: {
          trigger: BringingRef.current,
          scrub: 0.5,
          start: "top 80%",
          end: "bottom bottom"
        },
        ease: "power2.inout"
      });

      gsap.from(".text2", {
        xPercent: -120,
        duration: 4,
        scrollTrigger: {
          trigger: BringingRef.current,
          scrub: 0.5,
          start: "top 80%",
          end: "bottom bottom"
        },
        ease: "power2.inout"
      });

      gsap.from(".text3", {
        xPercent: 120,
        duration: 5,
        scrollTrigger: {
          trigger: BringingRef.current,
          scrub: 0.5,
          start: "top 80%",
          end: "bottom bottom"
        },
        ease: "power2.inout"
      });
    });
    return () => ctx.revert();
  });

  return (
    <section id='bringing' className='overflow-hidden' ref={BringingRef}>
      <div className='container-lg w-full h-full  py-[10%] relative'>
        <div className='flex flex-col items-center justify-center w-full h-full gap-[5vw]'>
          <div className='flex flex-col items-center justify-center '>
            <div className='text1'>
              <p className='text-[10.5vw] text-[#353430] leading-[1.1] text-head uppercase'>BRINGING YOU</p>
            </div>
            <div className='w-full h-full flex justify-center gap-[3vw] text2'>
              <p className='text-[10.5vw] text-[#353430] leading-[1.1] text-head uppercase'>SPACES</p>
              <div
                className='h-full w-[20vw] rounded-[20px]'
                ref={videoRef}
              >
                <div className="w-[20vw] h-[10vw] absolute top-0 left-[65%] rounded-xl overflow-hidden video">
                  <video
                    src='/videos/bringing.mp4'
                    autoPlay
                    muted
                    loop
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>
            <div className='text3 relative z-[-1]'>
              <p className='text-[10.5vw] text-[#353430] leading-[1.1] text-head uppercase '>YOU LOVE</p>
            </div>
          </div>
          <div className='w-[70%] mt-[0vw]'>
            <p data-para-anim className='text-body text-[1.3vw] text-center'>
              At DMTCA, we artfully combine design brilliance, innovative technology, and human insight
              to deliver unparalleled real estate experiences. Our approach goes beyond conventional sales,
              turning properties into coveted lifestyle statements. We understand that discerning investors
              seek more than just luxury; they desire a unique experience that complements their elevated lifestyle.
              Through our expertise, we connect clients with extraordinary properties that reflect their sophisticated
              tastes and desires.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Bringing;
