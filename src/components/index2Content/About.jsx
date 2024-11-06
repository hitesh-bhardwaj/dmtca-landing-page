/* eslint-disable react/no-unescaped-entities */
import dynamic from 'next/dynamic';
import AboutSwiper from './AboutSwiper';
// import { paraAnim } from './gsapAnimations';
// const AboutSwiper = dynamic(() => import("./AboutSwiper"));

const About = () => {
  

  return (
    <>
      <section className="overflow-hidden bg-[#E0D4C6]" id="about">
        <div className="container-lg py-[5%] mobile:py-[20%] mobile:pb-[40%] tablet:py-[15%]">
          
          <div className="w-full flex justify-between  tablet:flex-col tablet:gap-[8vw]">
            <h2
              data-para-anim
              className="w-[50%] text-[3.8vw] title-2 mt-[-1vw] tablet:w-[90%]"
            >
             Secure Your Place in Dubai for an Unmatched Advantage 
            </h2>
            <p data-para-anim className=" w-[40%] tablet:w-full">
            Discover 53 West 53, located in the influential Business Bay, the heartbeat of Dubai’s commercial 
landscape. This prestigious creation offers unparalleled access to global markets and elite networking 
opportunities. Enjoy a luxurious environment while leveraging the strategic advantage of being at the center 
of commerce. This is where your elite aspirations meet the perfect landscape for high-impact success and 
lucrative returns on investment
            </p>
          </div>
          <div className="fadeup w-fit h-fit">
          

          <AboutSwiper/>
           
            </div>
        </div>
      </section>
    </>
  );
};

export default About;
