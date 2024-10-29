/* eslint-disable react/no-unescaped-entities */
import dynamic from 'next/dynamic';
import { paraAnim } from './gsapAnimations';
const AboutSwiper = dynamic(() => import("./AboutSwiper"));

const About = () => {
  

  return (
    <>
      <section className="overflow-hidden bg-[#E0D4C6]" id="about">
        <div className="container-lg py-[5%] mobile:py-[20%] mobile:pb-[40%] tablet:py-[15%]">
          
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
          <div className="fadeup w-fit h-fit">
          

          <AboutSwiper/>
           
            </div>
        </div>
      </section>
    </>
  );
};

export default About;
