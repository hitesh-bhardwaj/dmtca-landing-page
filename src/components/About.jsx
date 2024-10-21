/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <section className="" id="about">
        <div className="container-lg py-[10%] mobile:py-[20%]">
          <div className="w-full flex justify-between  mobile:flex-col mobile:gap-[8vw]">
            <h2
              data-para-anim
              className="w-[40%] text-[3.8vw] title-2 mt-[-1vw] mobile:w-[90%]"
            >
              Luxury Living Awaits You In Dubai's Elite Neighborhood
            </h2>
            <p
              data-para-anim
              className=" w-[40%] mobile:w-full"
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
          <div className="flex gap-[0.5vw] mt-[10vw] flex-wrap fadeup mobile:flex-col mobile:gap-[2vw]">
            <div className="w-[22vw] h-[22vw] rounded-full border border-black flex items-center px-[1.5vw] justify-between overflow-hidden relative group mobile:w-[90vw] mobile:h-[90vw] mobile:px-[8vw]">
              <div className="w-[7vw] h-[7vw] rounded-full border border-black flex justify-center items-center group-hover:opacity-0 transition-all duration-300 ease-out mobile:w-[30vw] mobile:h-[30vw] mobile:p-[4vw]">
                <Image
                  width={50}
                  height={50}
                  src="/assets/about-icon-1.svg"
                  alt="about-icon-1"
                  className="object-contain"
                />
              </div>
              <p className=" group-hover:opacity-0 transition-all duration-300 ease-out w-[50%]">
                Futuristic Smart City
              </p>
              <div className="absolute w-full h-full top-0 left-0 scale-0 group-hover:scale-[1] group-hover:opacity-100 opacity-40 origin-center rounded-full overflow-hidden transition-all duration-500 ease-out">
                <Image
                  src="/assets/about-image-1.png"
                  alt="about-image-1"
                  className="object-contain"
                  fill
                />
              </div>
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <p className="text-[1.7vw] text-white leading-[1.2] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in mobile:text-[5vw]">
                  Futuristic Smart City
                </p>
              </div>
            </div>
            <div className="w-[22vw] h-[22vw] rounded-full border border-black flex items-center px-[1.5vw] justify-between overflow-hidden relative group mobile:w-[90vw] mobile:h-[90vw] mobile:px-[8vw]">
              <div className="w-[7vw] h-[7vw] rounded-full border border-black flex justify-center items-center group-hover:opacity-0 transition-all duration-300 ease-out mobile:w-[30vw] mobile:h-[30vw] mobile:p-[4vw]">
                <Image
                  width={50}
                  height={50}
                  src="/assets/about-icon-1.svg"
                  alt="about-icon-1"
                  className="object-contain"
                />
              </div>
              <p className="group-hover:opacity-0 transition-all duration-300 ease-out w-[50%]">
              Tax Incentives
              </p>
              <div className="absolute w-full h-full top-0 left-0 scale-0 group-hover:scale-[1] group-hover:opacity-100 opacity-0 origin-center rounded-full overflow-hidden transition-all duration-500 ease-out">
                <Image
                  src="/assets/about-image-1.png"
                  alt="about-image-1"
                  className="object-contain"
                  fill
                />
              </div>
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <p className="text-[1.7vw] text-white leading-[1.2] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in mobile:text-[5vw]">
                Tax Incentives
                </p>
              </div>
            </div>
            <div className="w-[22vw] h-[22vw] rounded-full border border-black flex items-center px-[1.5vw] justify-between overflow-hidden relative group mobile:hidden ">
              <div className="w-[7vw] h-[7vw] rounded-full border border-black flex justify-center items-center group-hover:opacity-0 transition-all duration-300 ease-out">
                <Image
                 width={80}
                 height={80}
                  src="/assets/icons/connectivity-icon.svg"
                  alt="connectivity-icon"
                  className="object-contain"
                />
              </div>
              <p className="text-[1.2vw] group-hover:opacity-0 transition-all duration-300 ease-out w-[50%]">
              Easy Connectivity
              </p>
              <div className="absolute w-full h-full top-0 left-0 scale-0 group-hover:scale-[1] group-hover:opacity-100 opacity-0 origin-center rounded-full overflow-hidden transition-all duration-500 ease-out">
                <Image
                  src="/assets/about-image-1.png"
                  alt="about-image-1"
                  className="object-contain"
                  fill
                />
              </div>
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <p className="text-[1.7vw] text-white leading-[1.2] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in">
                Easy Connectivity
                </p>
              </div>
            </div>
            <div className="w-[22vw] h-[22vw] rounded-full border border-black flex items-center px-[1.5vw] justify-between overflow-hidden relative group mobile:hidden pr-0">
              <div className="w-[7vw] h-[7vw] rounded-full border border-black flex justify-center items-center group-hover:opacity-0 transition-all duration-300 ease-out">
                <Image
                  width={80}
                  height={80}
                  src="/assets/icons/activities-icon.svg"
                  alt="activities-icon"
                  className="object-contain"
                />
              </div>
              <p className="text-[1.2vw] group-hover:opacity-0 transition-all duration-300 ease-out w-[50%]">
                High-End Recreational Activities
              </p>
              <div className="absolute w-full h-full top-0 left-0 scale-0 group-hover:scale-[1] group-hover:opacity-100 opacity-0 origin-center rounded-full overflow-hidden transition-all duration-500 ease-out">
                <Image
                  src="/assets/about-image-1.png"
                  alt="about-image-1"
                  className="object-contain"
                  fill
                />
              </div>
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <p className="text-[1.7vw] text-white leading-[1.2] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in">
                High-End Recreational Activities
                </p>
              </div>
            </div>
            <div className="w-[22vw] h-[22vw] rounded-full border border-black flex items-center px-[1.5vw] justify-between overflow-hidden relative group mobile:hidden">
              <div className="w-[7vw] h-[7vw] rounded-full border border-black flex justify-center items-center group-hover:opacity-0 transition-all duration-300 ease-out">
                <Image
                  width={80}
                  height={80}
                  src="/assets/icons/healthcare-icon.svg"
                  alt="healthcare-icon"
                  className="object-contain"
                />
              </div>
              <p className="text-[1.2vw] group-hover:opacity-0 transition-all duration-300 ease-out w-[50%]">
              World Class Healthcare
              </p>
              <div className="absolute w-full h-full top-0 left-0 scale-0 group-hover:scale-[1] group-hover:opacity-100 opacity-0 origin-center rounded-full overflow-hidden transition-all duration-500 ease-out">
                <Image
                  src="/assets/about-image-1.png"
                  alt="about-image-1"
                  className="object-contain"
                  fill
                />
              </div>
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <p className="text-[1.7vw] text-white leading-[1.2] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in">
                World Class Healthcare
                </p>
              </div>
            </div>
            <div className="w-[22vw] h-[22vw] rounded-full border border-black flex items-center px-[1.5vw] justify-between overflow-hidden relative group mobile:hidden">
              <div className="w-[7vw] h-[7vw] rounded-full border border-black flex justify-center items-center group-hover:opacity-0 transition-all duration-300 ease-out">
                <Image
                  width={80}
                  height={80}
                  src="/assets/icons/harmony-icon.svg"
                  alt="about-icon-1"
                  className="object-contain"
                />
              </div>
              <p className="text-[1.2vw] group-hover:opacity-0 transition-all duration-300 ease-out w-[50%]">
              Communal Harmony
              </p>
              <div className="absolute w-full h-full top-0 left-0 scale-0 group-hover:scale-[1] group-hover:opacity-100 opacity-0 origin-center rounded-full overflow-hidden transition-all duration-500 ease-out">
                <Image
                  src="/assets/about-image-1.png"
                  alt="about-image-1"
                  className="object-contain"
                  fill
                />
              </div>
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <p className="text-[1.7vw] text-white leading-[1.2] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in">
                Communal Harmony
                </p>
              </div>
            </div>
            <div className="w-[22vw] h-[22vw] rounded-full border border-black flex items-center px-[1.5vw] justify-between overflow-hidden relative group mobile:hidden">
              <div className="w-[7vw] h-[7vw] rounded-full border border-black flex justify-center items-center group-hover:opacity-0 transition-all duration-300 ease-out">
                <Image
                  width={80}
                  height={80}
                  src="/assets/icons/international-icon.svg"
                  alt="international-icon"
                  className="object-contain"
                />
              </div>
              <p className="text-[1.2vw] group-hover:opacity-0 transition-all duration-300 ease-out w-[50%]">
              International Institutions
              </p>
              <div className="absolute w-full h-full top-0 left-0 scale-0 group-hover:scale-[1] group-hover:opacity-100 opacity-0 origin-center rounded-full overflow-hidden transition-all duration-500 ease-out">
                <Image
                  src="/assets/about-image-1.png"
                  alt="about-image-1"
                  className="object-contain"
                  fill
                />
              </div>
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <p className="text-[1.7vw] text-white leading-[1.2] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in">
                International Institutions
                </p>
              </div>
            </div>
            <div className="w-[22vw] h-[22vw] rounded-full border border-black flex items-center px-[1.5vw] justify-between overflow-hidden relative group mobile:hidden">
              <div className="w-[7vw] h-[7vw] rounded-full border border-black flex justify-center items-center group-hover:opacity-0 transition-all duration-300 ease-out">
                <Image
                 width={80}
                 height={80}
                  src="/assets/icons/safety-icon.svg"
                  alt="safety-icon"
                  className="object-contain"
                />
              </div>
              <p className="text-[1.2vw] group-hover:opacity-0 transition-all duration-300 ease-out w-[50%]">
              Safety for All
              </p>
              <div className="absolute w-full h-full top-0 left-0 scale-0 group-hover:scale-[1] group-hover:opacity-100 opacity-0 origin-center rounded-full overflow-hidden transition-all duration-500 ease-out">
                <Image
                  src="/assets/about-image-1.png"
                  alt="about-image-1"
                  className="object-contain"
                  fill
                />
              </div>
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <p className="text-[1.7vw] text-white leading-[1.2] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in">
                Safety for All
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
