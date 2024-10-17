import Image from "next/image";
import React from "react";
import PrimaryButton from "./Button/PrimaryButton";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Works = () => {
  useGSAP(() => {
    gsap.to(".work-bg-icon", {
      scrollTrigger: {
        trigger: ".work-bg-icon",
        start: "top top",
        end: "90% bottom",
        pin: true,
        scrub: 2,
      },
      defaults: {
        ease: "none"
      }
    });
  });
  return (
    <>
      <section
        id="works"
        className="w-full h-full bg-[#1C1B1A] overflow-hidden"
      >
        <div className="container-lg h-full  py-[5%] relative ">
          <div className="w-full flex justify-center relative z-[2]">
            <h2 className="title-2 text-white w-[60%] text-center ">
              Indulge in Unmatched Elegance in Dubai’s Skyline
            </h2>
          </div>
          <div className="w-full h-full flex-col mt-[10vw] relative z-[2]">
            <div className="flex w-full h-full justify-between">

              <div className="w-[37vw] h-full flex flex-col gap-[2vw]" data-scroll data-scroll-speed="0.1">
                <div className="w-[40vw] h-[27vw] relative rounded-[2vw] overflow-hidden p-[2vw] group">
                  <Image
                    src="/Images/work-img-5.png"
                    alt="work-img-5"
                    fill
                    className="group-hover:scale-[1.1] transition-all ease-in-out duration-500"
                  />
                  <div className="w-fit h-[3.5vw] p-[1vw] px-[1vw] rounded-[0.8vw] bg-white/40 relative z-[3] text-[1.2vw] uppercase glassmorphism overflow-hidden group-hover:h-[12vw] transition-all ease-in-out duration-300">
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
                <p className=" text-white">
                  Designed by DMTCA with custom interiors by Versace, Lumiere
                  Haven is carved by the alchemy of light and shadow. The
                  building, a true reflection of its environment, is based on an
                  unconventional diagrid structure that eliminates the need for
                  interior columns and allows for grand, airy living spaces
                  filled with natural light.
                </p>
              </div>

              <div className="w-[25vw] h-fit relative mr-[8%] mt-[30%] relative z-[4]" data-scroll data-scroll-speed="-0.1">
                <div className="w-[27vw] h-[35vw] rounded-[1.5vw] overflow-hidden absolute p-[1.5vw] top-0 left-0 group">
                  <Image
                    src="/Images/work-img-1.png"
                    alt="work-img-1"
                    fill
                    className="group-hover:scale-[1.1] transition-all ease-in-out duration-500"
                  />
                  <div className="w-fit h-[3.5vw] p-[1vw] px-[1vw] rounded-[0.8vw] bg-white/40 relative z-[3] text-[1.2vw] uppercase glassmorphism overflow-hidden group-hover:h-[12vw] transition-all ease-in-out duration-300">
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
            <div className="w-fit h-full mt-[15vw] relative" data-scroll data-scroll-speed="-0.1" >
              <div className="w-[47vw] h-[35vw] relative rounded-[2vw] overflow-hidden ml-[3%] p-[2vw] group">
                <Image
                  src="/Images/work-img-2.png"
                  alt="work-img-2"
                  className="group-hover:scale-[1.1] transition-all ease-in-out duration-500"
                  fill
                />
                <div className="w-fit h-[3.5vw] p-[1vw] px-[1vw] rounded-[0.8vw] bg-white/40 relative z-[3] text-[1.2vw] uppercase glassmorphism overflow-hidden group-hover:h-[12vw] transition-all ease-in-out duration-500">
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
              <div className="w-[50%] h-full flex ml-[3%] mt-[5vw]">
                <p className=" text-center text-white">
                  Lumiere Haven embodies the ultimate marriage of refinement and
                  comfort, extravagance and ease, boldness and elegance. Each of
                  the Villa’s residences is an heirloom for the modern
                  age—combining superb sophistication and craftsmanship and
                  including many custom elements by Versace.
                </p>
              </div>
            </div>
            <div className="w-full h-full flex justify-between mt-[7vw]" data-scroll data-scroll-speed="0.1">
              <div className="w-[40vw] h-[27vw] relative rounded-[2vw] overflow-hidden mt-[10vw] p-[2vw] group">
                <Image
                  src="/Images/work-img-4.png"
                  alt="work-img-4"
                  className="group-hover:scale-[1.1] transition-all ease-in-out duration-500"
                  fill
                />
                <div className="w-fit h-[3.5vw] p-[1vw] px-[1vw] rounded-[0.8vw] bg-white/40 relative z-[3] text-[1.2vw] uppercase glassmorphism overflow-hidden group-hover:h-[12vw] transition-all ease-in-out duration-500">
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
              <div className="w-[35vw] h-full flex flex-col gap-[5vw]" data-scroll data-scroll-speed="-0.1">
                <div className="w-[25vw] h-[35vw] overflow-hidden rounded-[2vw] relative p-[2vw] group">
                  <Image
                    src="/Images/work-img-3.png"
                    alt="work-img-3"
                    fill
                    className="group-hover:scale-[1.1] transition-all ease-in-out duration-500"
                  />
                  <div className="w-fit h-[3.5vw] p-[1vw] px-[1vw] rounded-[0.8vw] bg-white/40 relative z-[3] text-[1.2vw] uppercase glassmorphism overflow-hidden group-hover:h-[12vw] transition-all ease-in-out duration-500">
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
                <p className="text-white">
                  Lumiere Haven’s one-of-a-kind Villa residences are both
                  palatial and personal. Their 360-degree views, exquisite
                  detailing, and majestic scale lend a modern feeling that
                  balances intimacy and grandeur.
                </p>
              </div>
            </div>
          </div>
          <div className="w-fit h-full absolute top-[10%] left-[50%] translate-x-[-50%] work-bg-icon">
            <div className="w-[50vw] h-[50vw] relative">
              <Image
                src="/Images/work-bg-logo.svg"
                alt="work-logo"
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
