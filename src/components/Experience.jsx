import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const Experience = () => {
  const ref1 = useRef(null);  
  const ref2 = useRef(null);  
  const ref3 = useRef(null);  


  // GSAP animation for opening the image
  const handleMouseEnter = (ref, width,height) => {
    gsap.to(ref.current, {
      width: width,
      height:height,
      transformOrigin:"center",
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1],
    });
  };

  // GSAP animation for closing the image
  const handleMouseLeave = (ref) => {
    gsap.to(ref.current, {
      width: 0,
      height:0,
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1],
    });
  };

  return (
    <section className="experience" >
      <div className="container-lg w-screen h-screen flex flex-col items-center justify-center bg-[#161616]">
        <div className="gap-[5vw] flex flex-col ">
          
          {/* First Section */}
          <div className="flex flex-col gap-[2vw]" 
               onMouseEnter={() => handleMouseEnter(ref1, "6vw","6vw")} 
               onMouseLeave={() => handleMouseLeave(ref1)}>
            <div className="flex items-center justify-center gap-[2vw]">
              <p className="uppercase text-head text-white text-[4.15vw]">
                25+ Years in Business
              </p>
              <div>
                <div ref={ref1} className="relative h-[6vw] w-0 flex items-center justify-center rounded-full overflow-hidden">
                  <div className="relative h-full w-full p-[1vw]">
                    <Image src="/assets/experience1.png" fill alt="experience" />
                  </div>
                </div>
              </div>
            </div>
            <span className="w-full h-[1px] rounded-full bg-white"></span>
          </div>

          {/* Second Section */}
          <div className="flex flex-col gap-[2vw]">
            <div className="flex items-center justify-center gap-[2vw] w-full"  onMouseEnter={() => handleMouseEnter(ref2, "6vw","6vw")} 
                onMouseLeave={() => handleMouseLeave(ref2)}>
              <p className="uppercase text-head text-white text-[4.15vw]">50000+ Housing</p>
              <div 
                className="flex gap-[2vw]" 
               >
                <div ref={ref2} className="relative h-[6vw] w-0 flex items-center justify-center rounded-tr-full overflow-hidden">
                  <div className="relative h-full w-full p-[1vw]">
                    <Image src="/assets/experience2.png" fill alt="experience" />
                  </div>
                </div>
                <p className="uppercase text-head text-white text-[4.15vw]">Projects</p>
              </div>
            </div>
            <span className="w-full h-[1px] rounded-full bg-white"></span>
          </div>

          {/* Third Section */}
          <div className="flex flex-col gap-[2vw]">
            <div className="flex items-center justify-center gap-[2vw]">
              <p className="uppercase text-head text-white text-[4.15vw]">20+</p>
              <div 
                className="flex gap-[2vw]" 
                onMouseEnter={() => handleMouseEnter(ref3, "10vw","6vw")} 
                onMouseLeave={() => handleMouseLeave(ref3)}>
                <div ref={ref3} className="relative h-[6vw] w-0 rounded-[20px] flex items-center justify-center overflow-hidden">
                  <div className="relative h-full w-full p-[1vw]">
                    <Image src="/assets/experience3.png" fill alt="experience" />
                  </div>
                </div>
                <p className="uppercase text-head text-white text-[4.15vw]">Luxury Projects</p>
              </div>
            </div>
            <span className="w-full h-[1px] rounded-full bg-white"></span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
