import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger,useGSAP);

const Bringing = () => {
  const BringingRef = useRef(null);
  const videoRef = useRef(null);
//  useGSAP(()=>{
//    const tl = gsap.timeline({
//     scrollTrigger:{
//       trigger:BringingRef.current,
//       pin:true,
//       start:"top top",
//       end:"+=2000 bottom",
//       scrub:0.5,
//       markers:true
//     }
//    })
//    tl.to(".video",{
//     width:"80vw",
//     height:"40vw",
//     position:"absolute",
//     delay:0.35,
//     top:"-120%",
//     right:"0%",
//     zIndex:"200",
//     ease:"none"
//    })
//    gsap.from(".text1",{
//     xPercent:120,
//     duration:3,
//     scrollTrigger:{
//       trigger:BringingRef.current,
//       scrub:0.5,
//       start:"top 60%",
//       end:"bottom bottom"
//     },
//     ease:"power2.inout"
//    })
//    gsap.from(".text2",{
//     xPercent:-240,
//     duration:4,
//     scrollTrigger:{
//       trigger:BringingRef.current,
//       scrub:0.5,
//       start:"top 60%",
//       end:"bottom bottom"
//     },
//     ease:"power2.inout"
//    })
//    gsap.from(".text3",{
//     xPercent:100,
//     duration:5,
//     scrollTrigger:{
//       trigger:BringingRef.current,
//       scrub:0.5,
//       start:"top 60%",
//       end:"bottom bottom"
//     },
//     ease:"power2.inout"
//    })
//   //  gsap.from(".video",{
//   //   xPercent:-400,
//   //   duration:5,
//   //   scrollTrigger:{
//   //     trigger:"#bringing",
//   //     scrub:true,
//   //     start:"top 60%",
//   //     end:"bottom bottom"
//   //   },
    
//   //   ease:"power2.inout"
//   //  })


//  })

  return (
    <section id='bringing' className='w-screen h-[70vw]' ref={BringingRef}>
      <div className='container-lg w-full h-full  py-[5%] relative'>
        <div className='flex flex-col items-center justify-center w-full h-full gap-[5vw]'>
          <div className='flex flex-col items-center justify-center '>
            <div className='text1'>
            <p className='text-[10.5vw] text-[#353430] leading-[1.1] text-head uppercase'>BRINGING YOU</p>
              </div>
            <div className='w-full h-full flex justify-center gap-[3vw] text2 items-center relative'>
              <div>

              <p className='text-[10.5vw] text-[#353430] leading-[1.1] text-head uppercase '>SPACES</p>
              </div>
              <div
                className='h-[13vw] w-[20vw] rounded-[20px] cover overflow-hidden video absolute top-[-2%] right-[-5%] z-[70]'
                ref={videoRef}
              >
                <video
                  src='/videos/bringing.mp4'
                  autoPlay
                  muted
                  loop
                  className='w-full h-full object-cover'
                />
              </div>
              
            </div>
            <div className='text3 relative z-[-1]'>
              <p className='text-[10.5vw] text-[#353430] leading-[1.1] text-head uppercase '>YOU LOVE</p>
            </div>
          </div>

          <div className='w-full mt-[5vw]'>
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
