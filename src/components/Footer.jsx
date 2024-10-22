import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section id="footer" className="z-[5] footer-body bg-[#161616]">
      <div className="container-lg w-screen h-full rounded-t-[40px] overflow-hidden bg-[#E0D4C6] text-[#1C1B1A] tablet:py-[10%]">
        <div className=" pt-[5%] pb-[2%] flex flex-col">

          <div className="w-full relative flex items-center justify-between tablet:flex-col-reverse mb-[7vw] tablet:gap-0">
            
            {/* First Div */}
            <div className="flex items-center justify-center gap-[1vw] tablet:gap-[3vw] tablet:mb-[5vw]">
              <Link href={"#"}>
                <div className="relative h-[3vw] w-[3vw] p-[0.5vw] flex items-center justify-center bg-[#1C1B1A] rounded-full overflow-hidden fadeup tablet:w-[10vw] tablet:h-[10vw] ">
                  <Image
                    width={24}
                    height={24}
                    src="/assets/icons/facebook.svg"
                    alt="facebook-icon"
                  />
                </div>
              </Link>
              <Link href={"#"}>
                <div className="relative h-[3vw] w-[3vw] p-[0.5vw] flex items-center justify-center bg-[#1C1B1A] rounded-full overflow-hidden fadeup tablet:w-[10vw] tablet:h-[10vw] ">
                  <Image
                    width={24}
                    height={24}
                    src="/assets/icons/instagram.svg"
                    alt="instagram-icon"
                  />
                </div>
              </Link>
              <Link href={"#"}>
                <div className="relative h-[3vw] w-[3vw] p-[0.5vw] flex items-center justify-center bg-[#1C1B1A] rounded-full overflow-hidden fadeup tablet:w-[10vw] tablet:h-[10vw] tablet:p-[1vw] ">
                  <Image
                    width={24}
                    height={24}
                    src="/assets/icons/linkedin.svg"
                    alt="linkedin-icon"
                  />
                </div>
              </Link>
              <Link href={"#"}>
                <div className="relative h-[3vw] w-[3vw] p-[0.5vw] flex items-center justify-center bg-[#1C1B1A] rounded-full overflow-hidden fadeup tablet:w-[10vw] tablet:h-[10vw] ">
                  <Image
                    width={24}
                    height={24}
                    src="/assets/icons/twitter.svg"
                    alt="twitter-icon"
                  />
                </div>
              </Link>
            </div>

            {/* Second Div */}
            <div className="flex items-center ml-[-12%] justify-center w-[10vw] h-auto fadeup tablet:ml-0 tablet:w-[30vw] tablet:mb-[10vw]">
              <Link href={"/"}>
                <Image
                  width={200}
                  height={50}
                  src="/assets/emaar-logo-black.svg"
                  alt="logo-img"
                />
              </Link>
            </div>

            {/* Third Div */}
            <a aria-label="Scroll Top" data-scroll data-scroll-to data-scroll-to-duration="3s" href="#hero">
              <div className="relative h-[3vw] w-[3vw] p-[0.5vw] flex items-center justify-center bg-[#1C1B1A] rounded-full overflow-hidden fadeup tablet:absolute tablet:top-[5%] tablet:right-[5%] tablet:w-[9vw] tablet:h-[9.2vw]">
                <Image
                  width={24}
                  height={24}
                  src="/assets/icons/CaretRight.svg"
                  alt="CaretRight-icon"
                />
              </div>
            </a>
          </div>

          <div className="flex items-center flex-col justify-center">
            <Link href="#" className="text-[3.4vw] font-medium text-head leading-none tablet:text-[5.5vw]">
              <span data-para-anim className="">+971 4 366 1688</span>
            </Link>
            <Link href="mailto:nigeria@dmtca.com">
              <p data-para-anim className="text-[3.4vw] text-head font-medium tablet:text-[5.5vw]">
                info@emaar.com
              </p>
            </Link>
          </div>

          <div className="flex items-center justify-between tablet:flex-col tablet:gap-[7vw] fadeup pt-[7vw]">
            <div className="w-[15%] tablet:w-[70%] tablet:order-1">
              <p className="text-[1.1vw] uppercase tablet:text-[3.5vw] tablet:text-center">All rights reserved @2024 Emaar</p>
            </div>
            <div className="w-[30%] tablet:w-[80%]">
              <p className="text-[1.1vw] leading-[1.2] text-center tablet:text-[3.5vw] tablet:text-center">Level 7, Dubai Hills Business Park Bldg 1, Dubai Hills Estate</p>
            </div>
            <Link href={"#"} className="tablet:order-3">
              <div>
                <p className="text-[1.1vw]  uppercase tablet:text-[3.2vw] tablet:text-center">PRIVACY POLICY</p>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Footer;
