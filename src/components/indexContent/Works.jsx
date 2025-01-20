/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useTranslation } from "next-i18next";
gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const { t } = useTranslation('work');
  const [isMobile, setIsMobile] = useState(false);
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < 1024); // You can adjust the threshold if needed
  };

  useEffect(() => {
    // Check screen size on mount and window resize
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);


  useEffect(() => {
    if (globalThis.innerWidth > 1024) {

      let ctx = gsap.context(() => {
        const body = document.body;
        const changeBodyColor = (color) => {
          gsap.to(body, {
            backgroundColor: color,
            duration: 1, // Duration for smooth transition
            ease: "power2.out",
          });
        };
        // ScrollTrigger for changing body background color
        ScrollTrigger.create({
          trigger: "#works",
          start: "top 60%",
          end: "bottom 20%",

          onEnter: () => changeBodyColor("#161616"),
          onLeaveBack: () => changeBodyColor("#ffffff"),
        });
      });
      return () => ctx.revert();
    }
  });


  useEffect(() => {
    let ctx = gsap.context(() => {
      let imagePin = document.getElementById("work-bg-icon");
      let triggerSection = document.getElementById("works");
      ScrollTrigger.create({
        trigger: imagePin,
        start: "top 10%",
        endTrigger: triggerSection,
        end: "bottom 80%",
        invalidateOnRefresh: true,
        pin: imagePin,
        markers: false,
      });
    });
    return () => ctx.revert();
  });

  return (
    <>
      <section id="works" className="w-full h-full overflow-hidden mobile:bg-[#1C1B1A] tablet:bg-[#1C1B1A] tablet:py-[10%]">
        <div className="container-lg h-full  py-[5%] relative ">
          <div className="w-full flex justify-center relative z-[2]">
            <h2
              data-para-anim
              className="title-2 text-white w-[60%] text-center mobile:w-full tablet:w-[80%]"
            >
              {t('workHead')}
            </h2>
          </div>
          <div className="w-full h-full flex-col mt-[10vw] relative z-[2] mobile:mt-[20vw]">
            <div className="flex w-full h-full justify-between mobile:flex-col mobile:gap-[10vw]">
              <div
                className="w-[37vw] h-full flex flex-col gap-[2vw] mobile:w-full mobile:gap-[7vw] tablet:w-[70vw]"
                data-scroll
                data-scroll-speed={isMobile ? undefined : "0.1"}
              >
                <div className="w-[40vw] h-[27vw] relative rounded-[2vw] overflow-hidden p-[2vw] group mobile:w-[90vw] mobile:h-[70vw] mobile:p-[4vw] fadeup tablet:w-[65vw] tablet:h-[40vw]">
                  <Image
                    src="/assets/work-img-5.png"
                    alt="work-img-5"
                    fill
                    className="group-hover:scale-[1.1] transition-all ease-in-out duration-500"
                  />
                  <div className="w-fit h-[3.5vw] p-[1vw] px-[1vw] rounded-[0.8vw] bg-white/40 relative z-[3] text-[1.2vw] uppercase glassmorphism overflow-hidden group-hover:h-[12vw] transition-all ease-in-out duration-300 mobile:text-[3.5vw] mobile:h-[10vw] mobile:px-[3vw] mobile:py-[3vw] mobile:group-hover:h-[30vw] tablet:text-[2.5vw] tablet:h-[7vw] tablet:px-[2vw] tablet:py-[2vw] tablet:group-hover:h-[20vw]">
                    {t('workCard')}
                    <div className="w-full h-full flex flex-col gap-[1vw] mt-[1.5vw]">
                      <div>
                        <p className="tracking-tight">300 x 400</p>
                      </div>
                      <div className="work-btn">
                        <Link href={"#"} className="  btn fadeUp">
                          <span data-primary className="btn-text normal-case ">
                            {t('workCardBtn')}
                          </span>
                          <div aria-hidden="true" className="btn-circle">
                            <div className="btn-circle-text normal-case">
                              {t('workCardBtn')}
                              <svg
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="btn-icon"
                              >
                                <path
                                  data-v-f4363f2a
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z"
                                  className="btn-path fill-current"
                                />
                                <path
                                  data-v-f4363f2a
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z"
                                  className="btn-path fill-current"
                                />
                              </svg>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <p data-para-anim className=" text-white">
                  {t('workCard1')}
                </p>
              </div>

              <div
                className="w-[25vw] h-fit relative mr-[8%] mt-[30%] z-[4] mobile:mt-auto mobile:mr-auto tablet:mt-[80%] tablet:w-[35vw] "
                data-scroll
                data-scroll-speed={isMobile ? undefined : "-0.1"}
              >
                <div className="w-[27vw] h-[35vw] rounded-[1.5vw] overflow-hidden absolute p-[1.5vw] top-0 left-0 group mobile:w-[90vw] mobile:h-[80vw] mobile:p-[4vw] fadeup tablet:w-[40vw] tablet:h-[50vw] tablet:ml-[-140%] mobile:ml-0">
                  <Image
                    src="/assets/work-img-1.png"
                    alt="work-img-1"
                    fill
                    className="group-hover:scale-[1.1] transition-all ease-in-out duration-500"
                  />
                  <div className="w-fit h-[3.5vw] p-[1vw] px-[1vw] rounded-[0.8vw] bg-white/40 relative z-[3] text-[1.2vw] uppercase glassmorphism overflow-hidden group-hover:h-[12vw] transition-all ease-in-out duration-300 mobile:text-[3.5vw] mobile:h-[10vw] mobile:px-[3vw] mobile:py-[3vw] mobile:group-hover:h-[30vw] tablet:text-[2.5vw] tablet:h-[7vw] tablet:px-[2vw] tablet:py-[2vw] tablet:group-hover:h-[20vw]">
                    {t('workCard')}
                    <div className="w-full h-full flex flex-col gap-[1vw] mt-[1.5vw]">
                      <div>
                        <p className="tracking-tight">300 x 400</p>
                      </div>
                      <div className="work-btn">
                        <Link href={"#"} className="  btn fadeUp">
                          <span data-primary className="btn-text normal-case ">
                            {t('workCardBtn')}
                          </span>

                          <div aria-hidden="true" className="btn-circle">
                            <div className="btn-circle-text normal-case">
                              {t('workCardBtn')}
                              <svg
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="btn-icon"
                              >
                                <path
                                  data-v-f4363f2a
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z"
                                  className="btn-path fill-current"
                                />
                                <path
                                  data-v-f4363f2a
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z"
                                  className="btn-path fill-current"
                                />
                              </svg>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-fit h-full mt-[15vw] relative mobile:mt-[90vw] tablet:mt-[70%]"
              data-scroll
              data-scroll-speed={isMobile ? undefined : "-0.1"}
            >
              <div className="w-[47vw] h-[35vw] relative rounded-[2vw] overflow-hidden ml-[3%] p-[2vw] group mobile:w-[90vw] mobile:h-[80vw] mobile:ml-0 mobile:p-[4vw] fadeup tablet:w-[65vw] tablet:h-[45vw]">
                <Image
                  src="/assets/work-img-2.png"
                  alt="work-img-2"
                  className="group-hover:scale-[1.1] transition-all ease-in-out duration-500"
                  fill
                />
                <div className="w-fit h-[3.5vw] p-[1vw] px-[1vw] rounded-[0.8vw] bg-white/40 relative z-[3] text-[1.2vw] uppercase glassmorphism overflow-hidden group-hover:h-[12vw] transition-all ease-in-out duration-500 mobile:text-[3.5vw] mobile:h-[10vw] mobile:px-[3vw] mobile:py-[3vw] mobile:group-hover:h-[30vw] tablet:text-[2.5vw] tablet:h-[7vw] tablet:px-[2vw] tablet:py-[2vw] tablet:group-hover:h-[20vw]">
                  {t('workCard')}
                  <div className="w-full h-full flex flex-col gap-[1vw] mt-[1.5vw]">
                    <div>
                      <p className="tracking-tight">300 x 400</p>
                    </div>
                    <div className="work-btn">
                      <Link href={"#"} className="  btn fadeUp">
                        <span data-primary className="btn-text normal-case ">
                          {t('workCardBtn')}
                        </span>

                        <div aria-hidden="true" className="btn-circle">
                          <div className="btn-circle-text normal-case">
                            {t('workCardBtn')}
                            <svg
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="btn-icon"
                            >
                              <path
                                data-v-f4363f2a
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z"
                                className="btn-path fill-current"
                              />
                              <path
                                data-v-f4363f2a
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z"
                                className="btn-path fill-current"
                              />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[47vw] h-full flex ml-[3%] mt-[5vw] tablet:w-[80vw] mobile:w-full mobile:ml-0">
                <p data-para-anim className="w-[75%] text-white text-left mobile:w-full">
                  {t('workCard2')}
                </p>
              </div>
            </div>
            <div
              className="w-full h-full flex justify-between mt-[7vw] mobile:mt-auto mobile:flex-col tablet:mt-[10vw]"
              data-scroll
              data-scroll-speed={isMobile ? undefined : "0.1"}
            >
              <div className="w-[40vw] h-[27vw] relative rounded-[2vw] overflow-hidden mt-[10vw] p-[2vw] group tablet:w-[47vw] tablet:h-[35vw] tablet:mt-[25vw] mobile:w-[90vw] mobile:h-[70vw] mobile:mt-[10vw] mobile:p-[4vw] fadeup ">
                <Image
                  src="/assets/work-img-4.png"
                  alt="work-img-4"
                  className="group-hover:scale-[1.1] transition-all ease-in-out duration-500"
                  fill
                />
                <div className="w-fit h-[3.5vw] p-[1vw] px-[1vw] rounded-[0.8vw] bg-white/40 relative z-[3] text-[1.2vw] uppercase glassmorphism overflow-hidden group-hover:h-[12vw] transition-all ease-in-out duration-500 mobile:text-[3.5vw] mobile:h-[10vw] mobile:px-[3vw] mobile:py-[3vw] mobile:group-hover:h-[30vw] tablet:text-[2.5vw] tablet:h-[7vw] tablet:px-[2vw] tablet:py-[2vw] tablet:group-hover:h-[20vw]">
                  {t('workCard')}
                  <div className="w-full h-full flex flex-col gap-[1vw] mt-[1.5vw]">
                    <div>
                      <p className="tracking-tight">300 x 400</p>
                    </div>
                    <div className="work-btn">
                      <Link href={"#"} className="  btn fadeUp">
                        <span data-primary className="btn-text normal-case ">
                          {t('workCardBtn')}
                        </span>

                        <div aria-hidden="true" className="btn-circle">
                          <div className="btn-circle-text normal-case">
                            {t('workCardBtn')}
                            <svg
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="btn-icon"
                            >
                              <path
                                data-v-f4363f2a
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z"
                                className="btn-path fill-current"
                              />
                              <path
                                data-v-f4363f2a
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z"
                                className="btn-path fill-current"
                              />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[35vw] h-full flex flex-col gap-[5vw] mobile:mt-[10vw] mobile:w-full tablet:w-[40vw]"
                data-scroll
                data-scroll-speed={isMobile ? undefined : "-0.1"}
              >
                <div className="w-[25vw] h-[35vw] overflow-hidden rounded-[2vw] relative p-[2vw] group mobile:w-[90vw] mobile:h-[70vw] mobile:p-[4vw] fadeup tablet:w-[40vw] tablet:h-[45vw]">
                  <Image
                    src="/assets/work-img-3.png"
                    alt="work-img-3"
                    fill
                    className="group-hover:scale-[1.1] transition-all ease-in-out duration-500"
                  />
                  <div className="w-fit h-[3.5vw] p-[1vw] px-[1vw] rounded-[0.8vw] bg-white/40 relative z-[3] text-[1.2vw] uppercase glassmorphism overflow-hidden group-hover:h-[12vw] transition-all ease-in-out duration-500 mobile:text-[3.5vw] mobile:h-[7vw] mobile:px-[3vw] mobile:group-hover:h-[30vw] tablet:text-[2.5vw] tablet:h-[7vw] tablet:px-[2vw] tablet:py-[2vw] tablet:group-hover:h-[20vw]">
                    {t('workCard')}
                    <div className="w-full h-full flex flex-col gap-[1vw] mt-[1.5vw]">
                      <div>
                        <p className="tracking-tight">300 x 400</p>
                      </div>
                      <div className="work-btn">
                        <Link href={"#"} className="  btn fadeUp">
                          <span data-primary className="btn-text normal-case ">
                            {t('workCardBtn')}
                          </span>

                          <div aria-hidden="true" className="btn-circle">
                            <div className="btn-circle-text normal-case">
                              {t('workCardBtn')}
                              <svg
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="btn-icon"
                              >
                                <path
                                  data-v-f4363f2a
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z"
                                  className="btn-path fill-current"
                                />
                                <path
                                  data-v-f4363f2a
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z"
                                  className="btn-path fill-current"
                                />
                              </svg>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <p data-para-anim className="text-white">
                  {t('workCard3')}
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-fit h-full absolute top-[10%] left-[50%] translate-x-[-50%] work-bg-icon"
            id="work-bg-icon"
          >
            <div className="w-[50vw] h-[50vw] relative mobile:w-[90vw] mobile:h-[90vw]">
              <Image
                src="/assets/hogar-logo.svg"
                alt="logo image"
                fill
                className="object-contain opacity-[0.05]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
