import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { duration } from '@mui/material';

gsap.registerPlugin(ScrollTrigger);

const Bringing = () => {
  const videoRef = useRef(null);

  const tl = gsap.timeline();


  return (
    <section id='bringing'>
      <div className='container-lg w-screen h-full py-[5%]'>
        <div className='flex flex-col items-center justify-center gap-[5vw]'>
          <div className='flex flex-col items-center justify-center text1'>
            <p className='text-[10.5vw] text-[#353430] leading-[1.1] text-head uppercase'>BRINGING YOU</p>
            <div className='flex justify-center gap-[3vw] text2'>
              <p className='text-[10.5vw] text-[#353430] leading-[1.1] text-head uppercase'>SPACES</p>
              <div
                className='h-[13vw] w-[20vw] rounded-[20px] cover overflow-hidden relative video'
                ref={videoRef}
              >
                <video
                  src='/videos/bringing.mp4'
                  autoPlay
                  muted
                  loop
                  className='w-full h-full'
                />
              </div>
            </div>
            <div className='text3'>
              <p className='text-[10.5vw] text-[#353430] leading-[1.1] text-head uppercase'>YOU LOVE</p>
            </div>
          </div>

          <div className='w-[75%]'>
            <p className='text-body text-[1.3vw] text-center'>
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
