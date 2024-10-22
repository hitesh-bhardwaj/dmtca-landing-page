/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const [isMobile, setIsMobile] = useState(false);
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < 768); // You can adjust the threshold if needed
  };

  useEffect(() => {
    // Check screen size on mount and window resize
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
if(globalThis.innerWidth>541){

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
  });
}

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
      <section id="works" className="w-full h-full overflow-hidden mobile:bg-[#1C1B1A] mobile:py-[10%]">
        <div className="container-lg h-full  py-[5%] relative ">
          <div className="w-full flex justify-center relative z-[2]">
            <h2
              data-para-anim
              className="title-2 text-white w-[60%] text-center mobile:w-full "
            >
              Indulge in Unmatched Elegance in Dubai’s Skyline
            </h2>
          </div>
          <div className="w-full h-full flex-col mt-[10vw] relative z-[2] mobile:mt-[20vw]">
            <div className="flex w-full h-full justify-between mobile:flex-col mobile:gap-[10vw]">
              <div
                className="w-[37vw] h-full flex flex-col gap-[2vw] mobile:w-full mobile:gap-[7vw] fadeup" 
                data-scroll
                data-scroll-speed={isMobile?undefined:"0.1"}
              >
                <div className="w-[40vw] h-[27vw] relative rounded-[2vw] overflow-hidden p-[2vw] group mobile:w-[90vw] mobile:h-[70vw] mobile:p-[4vw]">
                  <Image
                    src="/assets/work-img-5.png"
                    alt="work-img-5"
                    fill
                    className="group-hover:scale-[1.1] transition-all ease-in-out duration-500"
                  />
                  <div className="w-fit h-[3.5vw] p-[1vw] px-[1vw] rounded-[0.8vw] bg-white/40 relative z-[3] text-[1.2vw] uppercase glassmorphism overflow-hidden group-hover:h-[12vw] transition-all ease-in-out duration-300 mobile:text-[3.5vw] mobile:h-[10vw] mobile:px-[3vw] mobile:py-[3vw] mobile:group-hover:h-[30vw]">
                    Living room
                    <div className="w-full h-full flex flex-col gap-[1vw] mt-[1.5vw]">
                      <div>
                        <p className="tracking-tight">300 x 400</p>
                      </div>
                      <div className="work-btn">
                        <Link href={"#"} className="  btn fadeUp">
                          <span data-primary className="btn-text normal-case ">
                            Learn more
                          </span>
                          <div aria-hidden="true" className="btn-circle">
                            <div className="btn-circle-text normal-case">
                              Learn more
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
                  Embrace a lifestyle enriched by high-end recreational
                  activities, from exclusive rooftop lounges to private fitness
                  centers. Whether you seek relaxation or vibrant social
                  engagement, 53 West 53 provides a curated experience that
                  caters to your every desire in an elite environment.
                </p>
              </div>

              <div
                className="w-[25vw] h-fit relative mr-[8%] mt-[30%] z-[4] mobile:mt-auto mobile:mr-auto fadeup"
                data-scroll
                data-scroll-speed={isMobile?undefined:"-0.1"}
              >
                <div className="w-[27vw] h-[35vw] rounded-[1.5vw] overflow-hidden absolute p-[1.5vw] top-0 left-0 group mobile:w-[90vw] mobile:h-[80vw] mobile:p-[4vw]">
                  <Image
                    src="/assets/work-img-1.png"
                    alt="work-img-1"
                    fill
                    className="group-hover:scale-[1.1] transition-all ease-in-out duration-500"
                  />
                  <div className="w-fit h-[3.5vw] p-[1vw] px-[1vw] rounded-[0.8vw] bg-white/40 relative z-[3] text-[1.2vw] uppercase glassmorphism overflow-hidden group-hover:h-[12vw] transition-all ease-in-out duration-300 mobile:text-[3.5vw] mobile:h-[10vw] mobile:px-[3vw] mobile:py-[3vw] mobile:group-hover:h-[30vw]">
                    Living room
                    <div className="w-full h-full flex flex-col gap-[1vw] mt-[1.5vw]">
                      <div>
                        <p className="tracking-tight">300 x 400</p>
                      </div>
                      <div className="work-btn">
                        <Link href={"#"} className="  btn fadeUp">
                          <span data-primary className="btn-text normal-case ">
                            Learn more
                          </span>

                          <div aria-hidden="true" className="btn-circle">
                            <div className="btn-circle-text normal-case">
                              Learn more
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
              className="w-fit h-full mt-[15vw] relative mobile:mt-[90vw] fadeup"
              data-scroll
              data-scroll-speed={isMobile?undefined:"-0.1"}
            >
              <div className="w-[47vw] h-[35vw] relative rounded-[2vw] overflow-hidden ml-[3%] p-[2vw] group mobile:w-[90vw] mobile:h-[80vw] mobile:ml-0 mobile:p-[4vw]">
                <Image
                  src="/assets/work-img-2.png"
                  alt="work-img-2"
                  className="group-hover:scale-[1.1] transition-all ease-in-out duration-500"
                  fill
                />
                <div className="w-fit h-[3.5vw] p-[1vw] px-[1vw] rounded-[0.8vw] bg-white/40 relative z-[3] text-[1.2vw] uppercase glassmorphism overflow-hidden group-hover:h-[12vw] transition-all ease-in-out duration-500 mobile:text-[3.5vw] mobile:h-[10vw] mobile:px-[3vw] mobile:py-[3vw] mobile:group-hover:h-[30vw]">
                  Living room
                  <div className="w-full h-full flex flex-col gap-[1vw] mt-[1.5vw]">
                    <div>
                      <p className="tracking-tight">300 x 400</p>
                    </div>
                    <div className="work-btn">
                      <Link href={"#"} className="  btn fadeUp">
                        <span data-primary className="btn-text normal-case ">
                          Learn more
                        </span>

                        <div aria-hidden="true" className="btn-circle">
                          <div className="btn-circle-text normal-case">
                            Learn more
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
              <div className="w-[47vw] h-full flex ml-[3%] mt-[5vw] mobile:w-full mobile:ml-0">
                <p data-para-anim className="w-[75%] text-white text-left mobile:w-full">
                  53 West 53 offers an extraordinary living experience, with
                  residences boasting panoramic views of the city skyline and
                  the Arabian Gulf. Each suite is designed with spacious
                  interiors, ultra-luxury amenities, and modern craftsmanship
                  that reflects your elite status.
                </p>
              </div>
            </div>
            <div
              className="w-full h-full flex justify-between mt-[7vw] mobile:mt-auto mobile:flex-col fadeup"
              data-scroll
              data-scroll-speed={isMobile?undefined:"0.1"}
            >
              <div className="w-[40vw] h-[27vw] relative rounded-[2vw] overflow-hidden mt-[10vw] p-[2vw] group mobile:w-[90vw] mobile:h-[70vw] mobile:p-[4vw]">
                <Image
                  src="/assets/work-img-4.png"
                  alt="work-img-4"
                  className="group-hover:scale-[1.1] transition-all ease-in-out duration-500"
                  fill
                />
                <div className="w-fit h-[3.5vw] p-[1vw] px-[1vw] rounded-[0.8vw] bg-white/40 relative z-[3] text-[1.2vw] uppercase glassmorphism overflow-hidden group-hover:h-[12vw] transition-all ease-in-out duration-500 mobile:text-[3.5vw] mobile:h-[10vw] mobile:px-[3vw] mobile:py-[3vw] mobile:group-hover:h-[30vw]">
                  Living room
                  <div className="w-full h-full flex flex-col gap-[1vw] mt-[1.5vw]">
                    <div>
                      <p className="tracking-tight">300 x 400</p>
                    </div>
                    <div className="work-btn">
                      <Link href={"#"} className="  btn fadeUp">
                        <span data-primary className="btn-text normal-case ">
                          Learn more
                        </span>

                        <div aria-hidden="true" className="btn-circle">
                          <div className="btn-circle-text normal-case">
                            Learn more
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
                className="w-[35vw] h-full flex flex-col gap-[5vw] mobile:mt-[10vw] mobile:w-full "
                data-scroll
                data-scroll-speed={isMobile?undefined:"-0.1"}
              >
                <div className="w-[25vw] h-[35vw] overflow-hidden rounded-[2vw] relative p-[2vw] group mobile:w-[90vw] mobile:h-[70vw] mobile:p-[4vw] fadeup">
                  <Image
                    src="/assets/work-img-3.png"
                    alt="work-img-3"
                    fill
                    className="group-hover:scale-[1.1] transition-all ease-in-out duration-500"
                  />
                  <div className="w-fit h-[3.5vw] p-[1vw] px-[1vw] rounded-[0.8vw] bg-white/40 relative z-[3] text-[1.2vw] uppercase glassmorphism overflow-hidden group-hover:h-[12vw] transition-all ease-in-out duration-500 mobile:text-[3.5vw] mobile:h-[7vw] mobile:px-[3vw] mobile:group-hover:h-[30vw]">
                    Living room
                    <div className="w-full h-full flex flex-col gap-[1vw] mt-[1.5vw]">
                      <div>
                        <p className="tracking-tight">300 x 400</p>
                      </div>
                      <div className="work-btn">
                        <Link href={"#"} className="  btn fadeUp">
                          <span data-primary className="btn-text normal-case ">
                            Learn more
                          </span>

                          <div aria-hidden="true" className="btn-circle">
                            <div className="btn-circle-text normal-case">
                              Learn more
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
                  Designed for those who appreciate exclusivity, 53 West 53
                  offers access to private dining rooms, suites and elegant
                  event spaces, perfect for hosting sophisticated gatherings.
                  This luxurious property embodies the pinnacle of refined
                  living.
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
                src="/assets/emaar-logo.svg"
                alt="emaar-logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
