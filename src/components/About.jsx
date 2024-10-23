/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import EnquiryForm from "./Enquiryform";

const About = () => {
  const [isMobile,setIsMobile] = useState(false);
  useEffect(()=>{
    if(globalThis.innerWidth<541){
      setIsMobile(true);
    }
    else{
      setIsMobile(false);
    }
  }, [])
  return (
    <>
      <section className="overflow-hidden" id="about">
        <div className="container-lg py-[10%] mobile:py-[20%] tablet:py-[15%]">
          {isMobile?
          <div className="flex justify-center items-center h-full mb-[15vw]">
            <EnquiryForm />
          </div>:""
          }
          <div className="w-full flex justify-between  tablet:flex-col tablet:gap-[8vw]">
            <h2
              data-para-anim
              className="w-[40%] text-[3.8vw] title-2 mt-[-1vw] tablet:w-[90%]"
            >
              Luxury Living Awaits You In Dubai's Elite Neighbourhood
            </h2>
            <p
              data-para-anim
              className=" w-[40%] tablet:w-full"
            >
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
          <div className="mobile:overflow-x-scroll overflow-hidden mobile:w-[100vw] mobile:ml-[-5vw] mobile:p-[5vw] custom-scroll">
            <div className="flex gap-[0.5vw] mt-[10vw] flex-wrap fadeup mobile:flex mobile:flex-nowrap mobile:w-fit mobile:gap-[2vw] mobile:overflow-visible mobile:mb-[5vw] tablet:gap-[3vw]">
              <div className="w-[22vw] h-[22vw] rounded-full border border-black flex items-center px-[1.5vw] justify-between overflow-hidden relative group mobile:w-[80vw] mobile:h-[80vw] mobile:px-[8vw] tablet:w-[43vw] tablet:h-[43vw]">
                <div className="w-[7vw] h-[7vw] rounded-full border border-black flex justify-center items-center group-hover:opacity-0 transition-all duration-300 ease-out mobile:w-[25vw] mobile:h-[25vw] mobile:p-[4vw] tablet:w-[12vw] tablet:h-[12vw]">
                  <Image
                   width={60}
                   height={60}
                   src="/assets/about/about-icon-1.svg"
                    alt="about-icon-1"
                    className="object-contain"
                  />
                </div>
                <p className=" group-hover:opacity-0 transition-all duration-300 ease-out w-[50%] mobile:text-[5vw] tablet:text-[3vw] tablet:w-[60%] mobile:w-[50%]">
                  Futuristic Smart City
                </p>
                <div className="absolute w-full h-full top-0 left-0 scale-0 group-hover:scale-[1] group-hover:opacity-100 opacity-40 origin-center rounded-full overflow-hidden transition-all duration-500 ease-out">
                  <Image
                    loading="lazy"
                    src="/assets/about/about-image-1.png"
                    alt="about-image-1"
                    className="object-contain"
                    fill
                  />
                </div>
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <p className="text-[1.7vw] text-white leading-[1.2] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in mobile:text-[5.5vw] tablet:text-[3.5vw]">
                    Futuristic Smart City
                  </p>
                </div>
              </div>
              <div className="w-[22vw] h-[22vw] rounded-full border border-black flex items-center px-[1.5vw] justify-between overflow-hidden relative group mobile:w-[80vw] mobile:h-[80vw] mobile:px-[8vw] tablet:w-[43vw] tablet:h-[43vw]">
                <div className="w-[7vw] h-[7vw] rounded-full border border-black flex justify-center items-center group-hover:opacity-0 transition-all duration-300 ease-out mobile:w-[25vw] mobile:h-[25vw] mobile:p-[4vw] tablet:w-[12vw] tablet:h-[12vw]">
                  <Image
                    width={50}
                    height={50}
                    src="/assets/about/about-icon-2.svg"
                    alt="about-icon-2"
                    className="object-contain"
                  />
                </div>
                <p className="group-hover:opacity-0 transition-all duration-300 ease-out w-[50%] mobile:text-[5vw] tablet:text-[3vw] tablet:w-[60%] mobile:w-[50%]">
                  Tax Incentives
                </p>
                <div className="absolute w-full h-full top-0 left-0 scale-0 group-hover:scale-[1] group-hover:opacity-100 opacity-0 origin-center rounded-full overflow-hidden transition-all duration-500 ease-out">
                  <Image
                   loading="lazy"
                    src="/assets/about/about-image-2.png"
                    alt="about-image-2"
                    className="object-contain brightness-[70%]"
                    fill
                  />
                </div>
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <p className="text-[1.7vw] text-white leading-[1.2] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in mobile:text-[5.5vw] tablet:text-[3.5vw]">
                    Tax Incentives
                  </p>
                </div>
              </div>
              <div className="w-[22vw] h-[22vw] rounded-full border border-black flex items-center px-[1.5vw] justify-between overflow-hidden relative group  mobile:w-[80vw] mobile:h-[80vw] mobile:px-[8vw] tablet:w-[43vw] tablet:h-[43vw] ">
                <div className="w-[7vw] h-[7vw] rounded-full border border-black flex justify-center items-center group-hover:opacity-0 transition-all duration-300 ease-out mobile:w-[25vw] mobile:h-[25vw] mobile:p-[4vw] tablet:w-[12vw] tablet:h-[12vw]">
                  <Image
                    width={60}
                    height={60}
                    src="/assets/about/about-icon-3.svg"
                    alt="about-icon-3"
                    className="object-contain"
                  />
                </div>
                <p className="text-[1.2vw] group-hover:opacity-0 transition-all duration-300 ease-out w-[50%] mobile:text-[5vw] tablet:text-[3vw] tablet:w-[60%] mobile:w-[50%]">
                  Easy Connectivity
                </p>
                <div className="absolute w-full h-full top-0 left-0 scale-0 group-hover:scale-[1] group-hover:opacity-100 opacity-0 origin-center rounded-full overflow-hidden transition-all duration-500 ease-out">
                  <Image
                    loading="lazy"
                    src="/assets/about/about-image-3.png"
                    alt="about-image-3"
                    className="object-contain brightness-[70%]"
                    fill
                  />
                </div>
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <p className="text-[1.7vw] text-white leading-[1.2] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in mobile:text-[5.5vw] tablet:text-[3.5vw]">
                    Easy Connectivity
                  </p>
                </div>
              </div>
              <div className="w-[22vw] h-[22vw] rounded-full border border-black flex items-center px-[1.5vw] justify-between overflow-hidden relative group  pr-0 mobile:w-[80vw] mobile:h-[80vw] mobile:px-[8vw] tablet:w-[43vw] tablet:h-[43vw]">
                <div className="w-[7vw] h-[7vw] rounded-full border border-black flex justify-center items-center group-hover:opacity-0 transition-all duration-300 ease-out mobile:w-[25vw] mobile:h-[25vw] mobile:p-[4vw] tablet:w-[12vw] tablet:h-[12vw]">
                  <Image
                    width={60}
                    height={60}
                    src="/assets/about/about-icon-4.svg"
                    alt="about-icon-4"
                    className="object-contain"
                  />
                </div>
                <p className="text-[1.2vw] group-hover:opacity-0 transition-all duration-300 ease-out w-[50%] mobile:text-[5vw] tablet:text-[3vw] tablet:w-[60%] mobile:w-[50%]">
                  High-End Recreational Activities
                </p>
                <div className="absolute w-full h-full top-0 left-0 scale-0 group-hover:scale-[1] group-hover:opacity-100 opacity-0 origin-center rounded-full overflow-hidden transition-all duration-500 ease-out">
                  <Image
                    loading="lazy"
                    src="/assets/about/about-image-4.png"
                    alt="about-image-4"
                    className="object-contain brightness-[70%]"
                    fill
                  />
                </div>
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <p className="text-[1.7vw] text-white leading-[1.2] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in mobile:text-[5.5vw] tablet:text-[3.5vw]">
                    High-End Recreational Activities
                  </p>
                </div>
              </div>
              <div className="w-[22vw] h-[22vw] rounded-full border border-black flex items-center px-[1.5vw] justify-between overflow-hidden relative group mobile:w-[80vw] mobile:h-[80vw] mobile:px-[8vw] tablet:w-[43vw] tablet:h-[43vw]">
                <div className="w-[7vw] h-[7vw] rounded-full border border-black flex justify-center items-center group-hover:opacity-0 transition-all duration-300 ease-out mobile:w-[25vw] mobile:h-[25vw] mobile:p-[4vw] tablet:w-[12vw] tablet:h-[12vw]">
                  <Image
                     width={60}
                     height={60}
                     src="/assets/about/about-icon-5.svg"
                     alt="about-icon-5"
                    className="object-contain"
                  />
                </div>
                <p className="text-[1.2vw] group-hover:opacity-0 transition-all duration-300 ease-out w-[50%] mobile:text-[5vw] tablet:text-[3vw] tablet:w-[60%] mobile:w-[50%]">
                  World Class Healthcare
                </p>
                <div className="absolute w-full h-full top-0 left-0 scale-0 group-hover:scale-[1] group-hover:opacity-100 opacity-0 origin-center rounded-full overflow-hidden transition-all duration-500 ease-out">
                  <Image
                    loading="lazy"
                    src="/assets/about/about-image-5.png"
                    alt="about-image-5"
                    className="object-contain brightness-[70%]"
                    fill
                  />
                </div>
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <p className="text-[1.7vw] text-white leading-[1.2] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in mobile:text-[5.5vw] tablet:text-[3.5vw]">
                    World Class Healthcare
                  </p>
                </div>
              </div>
              <div className="w-[22vw] h-[22vw] rounded-full border border-black flex items-center px-[1.5vw] justify-between overflow-hidden relative group mobile:w-[80vw] mobile:h-[80vw] mobile:px-[8vw] tablet:w-[43vw] tablet:h-[43vw]">
                <div className="w-[7vw] h-[7vw] rounded-full border border-black flex justify-center items-center group-hover:opacity-0 transition-all duration-300 ease-out mobile:w-[25vw] mobile:h-[25vw] mobile:p-[4vw] tablet:w-[12vw] tablet:h-[12vw]">
                  <Image
                     width={60}
                     height={60}
                     src="/assets/about/about-icon-6.svg"
                     alt="about-icon-6"
                    className="object-contain"
                  />
                </div>
                <p className="text-[1.2vw] group-hover:opacity-0 transition-all duration-300 ease-out w-[50%] mobile:text-[5vw] tablet:text-[3vw] tablet:w-[60%] mobile:w-[50%]">
                  Communal Harmony
                </p>
                <div className="absolute w-full h-full top-0 left-0 scale-0 group-hover:scale-[1] group-hover:opacity-100 opacity-0 origin-center rounded-full overflow-hidden transition-all duration-500 ease-out">
                  <Image
                   loading="lazy"
                    src="/assets/about/about-image-6.png"
                    alt="about-image-6"
                    className="object-contain brightness-[70%]"
                    fill
                  />
                </div>
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <p className="text-[1.7vw] text-white leading-[1.2] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in mobile:text-[5.5vw] tablet:text-[3.5vw]">
                    Communal Harmony
                  </p>
                </div>
              </div>
              <div className="w-[22vw] h-[22vw] rounded-full border border-black flex items-center px-[1.5vw] justify-between overflow-hidden relative group mobile:w-[80vw] mobile:h-[80vw] mobile:px-[8vw] tablet:w-[43vw] tablet:h-[43vw] ">
                <div className="w-[7vw] h-[7vw] rounded-full border border-black flex justify-center items-center group-hover:opacity-0 transition-all duration-300 ease-out mobile:w-[25vw] mobile:h-[25vw] mobile:p-[4vw] tablet:w-[12vw] tablet:h-[12vw]">
                  <Image
                     width={60}
                     height={60}
                     src="/assets/about/about-icon-7.svg"
                     alt="about-icon-7"
                    className="object-contain"
                  />
                </div>
                <p className="text-[1.2vw] group-hover:opacity-0 transition-all duration-300 ease-out w-[50%] mobile:text-[5vw] tablet:text-[3vw] tablet:w-[60%] mobile:w-[50%]">
                  International Institutions
                </p>
                <div className="absolute w-full h-full top-0 left-0 scale-0 group-hover:scale-[1] group-hover:opacity-100 opacity-0 origin-center rounded-full overflow-hidden transition-all duration-500 ease-out">
                  <Image
                    loading="lazy"
                    src="/assets/about/about-image-7.png"
                    alt="about-image-7"
                    className="object-contain brightness-[70%]"
                    fill
                  />
                </div>
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <p className="text-[1.7vw] text-white leading-[1.2] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in mobile:text-[5.5vw] tablet:text-[3.5vw]">
                    International Institutions
                  </p>
                </div>
              </div>
              <div className="w-[22vw] h-[22vw] rounded-full border border-black flex items-center px-[1.5vw] justify-between overflow-hidden relative group mobile:w-[80vw] mobile:h-[80vw] mobile:px-[8vw] tablet:w-[43vw] tablet:h-[43vw]">
                <div className="w-[7vw] h-[7vw] rounded-full border border-black flex justify-center items-center group-hover:opacity-0 transition-all duration-300 ease-out mobile:w-[25vw] mobile:h-[25vw] mobile:p-[4vw] tablet:w-[12vw] tablet:h-[12vw]">
                  <Image
                    width={60}
                    height={60}
                    src="/assets/about/about-icon-8.svg"
                    alt="about-icon-8"
                    className="object-contain"
                  />
                </div>
                <p className="text-[1.2vw] group-hover:opacity-0 transition-all duration-300 ease-out w-[50%] mobile:text-[5vw] tablet:text-[3vw] tablet:w-[60%] mobile:w-[50%]">
                  Safety for All
                </p>
                <div className="absolute w-full h-full top-0 left-0 scale-0 group-hover:scale-[1] group-hover:opacity-100 opacity-0 origin-center rounded-full overflow-hidden transition-all duration-500 ease-out">
                  <Image
                    loading="lazy"
                    src="/assets/about/about-image-8.png"
                    alt="about-image-8"
                    className="object-contain brightness-[70%]"
                    
                    fill
                  />
                </div>
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <p className="text-[1.7vw] text-white leading-[1.2] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in mobile:text-[5.5vw] tablet:text-[3.5vw]">
                    Safety for All
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
