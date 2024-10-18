import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger)

const ShowCase = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#showcase",
        start: "top 40%",
        end: "+=1500 bottom",
        scrub: 0.25,
        // markers: true,
      }
    })
    tl.to(".video-block", {
      width: "90vw",
      height: "35vw",
      yPercent: 35,
      right: "5%",
      ease: "power1.out",
      duration: 2
    })
    tl.to(".inner-detail", {
      opacity: 1,
      duration: 2
    })
  })
  return (
    <>
      <section id="showcase" className="py-[10%]">
        <div className="container-lg h-full relative">
          <div className="flex w-full gap-[10vw]">

            <h2 className="w-[40%] title-2">
              Lumière Haven- A luxury hillside home
            </h2>
            <div className="w-[25vw] h-[25vw] overflow-hidden rounded-full video-block absolute right-[10%]">
              <video
                id="showcase-video"
                poster="/assets/assets/video-poster.webp"
                autoPlay
                muted
                loop
                playsInline
                loading="lazy"
                className="w-full h-full aspect-video object-cover"
                src="/assets/dmtca-video.mp4"
              >
              </video>
              <div className="w-[50vw] bg-white/50 glassmorphism flex justify-around rounded-full py-[2vw] absolute bottom-[7%] left-[50%] translate-x-[-50%] opacity-0 inner-detail z-[6]">
                <p>
                  Off-Plan in Dubai Marina
                </p>
                <p>
                  61,250 sq.ft of Amenities
                </p>
                <p>
                  5 Bedroom
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-full mt-[42vw] flex justify-end">
            <p className="w-[50%] ">
              Lumiere Haven embodies the ultimate marriage of refinement and
              comfort, extravagance and ease, boldness and elegance. Each of the
              tower’s residences is an heirloom for the modern age—combining
              superb sophistication and craftsmanship and including interior
              done by Versace. Floor-to-ceiling windows showcase the city’s
              classic skyline and fill the residences with natural light.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowCase;
