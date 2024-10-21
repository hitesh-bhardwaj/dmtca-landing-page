import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section id="footer" className="z-[5] footer-body bg-[#161616]">
      <div className="container-lg w-screen h-full rounded-t-[40px] bg-[#E0D4C6] text-[#1C1B1A] mobile:py-[10%]">
        <div className=" pt-[5%] pb-[2%] flex flex-col gap-[6vw]">
          <div className="w-full relative flex items-center justify-between mb-[2vw] mobile:flex-col mobile:gap-[7vw]">
          <div className="items-center ml-[-12%] justify-center w-[10vw] h-auto fadeup hidden mobile:block mobile:ml-0 mobile:w-[30vw]">
              <Link href={"/"}>
                <Image
                  width={200}
                  height={50}
                  src="/assets/icons/logo-black.svg"
                  alt="logo-img"
                />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-[1vw] mobile:gap-[3vw] mobile:mt-[5vw]">
              <Link href={"#"}>
                <div className="relative h-[3vw] w-[3vw] p-[0.5vw] flex items-center justify-center bg-[#1C1B1A] rounded-full overflow-hidden fadeup mobile:w-[10vw] mobile:h-[10vw] ">
                  <Image
                    width={24}
                    height={24}
                    src="/assets/icons/facebook.svg"
                    alt="facebook-icon"
                  />
                </div>
              </Link>
              <Link href={"#"}>
                <div className="relative h-[3vw] w-[3vw] p-[0.5vw] flex items-center justify-center bg-[#1C1B1A] rounded-full overflow-hidden fadeup mobile:w-[10vw] mobile:h-[10vw] ">
                  <Image
                    width={24}
                    height={24}
                    src="/assets/icons/instagram.svg"
                    alt="instagram-icon"
                  />
                </div>
              </Link>
              <Link href={"#"}>
                <div className="relative h-[3vw] w-[3vw] p-[0.5vw] flex items-center justify-center bg-[#1C1B1A] rounded-full overflow-hidden fadeup mobile:w-[10vw] mobile:h-[10vw] mobile:p-[1vw] ">
                  <Image
                    width={24}
                    height={24}
                    src="/assets/icons/linkedin.svg"
                    alt="linkedin-icon"
                  />
                </div>
              </Link>
              <Link href={"#"}>
                <div className="relative h-[3vw] w-[3vw] p-[0.5vw] flex items-center justify-center bg-[#1C1B1A] rounded-full overflow-hidden fadeup mobile:w-[10vw] mobile:h-[10vw] ">
                  <Image
                    width={24}
                    height={24}
                    src="/assets/icons/twitter.svg"
                    alt="twitter-icon"
                  />
                </div>
              </Link>
            </div>
            <div className="flex items-center ml-[-12%] justify-center w-[10vw] h-auto fadeup mobile:hidden">
              <Link href={"/"}>
                <Image
                  width={200}
                  height={50}
                  src="/assets/icons/logo-black.svg"
                  alt="logo-img"
                />
              </Link>
            </div>
            <Link href={"/"}>
              <div className="relative h-[3vw] w-[3vw] p-[0.5vw] flex items-center justify-center bg-[#1C1B1A] rounded-full overflow-hidden fadeup mobile:absolute mobile:top-[5%] mobile:right-[5%] mobile:w-[9vw] mobile:h-[9.2vw]">
                <Image
                  width={24}
                  height={24}
                  src="/assets/icons/CaretRight.svg"
                  alt="CaretRight-icon"
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center flex-col justify-center mb-[2vw]">
            <Link href="#" className="text-[3.4vw] font-medium text-head leading-none mobile:text-[5.5vw]">
              <span data-para-anim className="">(+234) 7046336078</span>
            </Link>
              <Link href="mailto:nigeria@dmtca.com">
                <p data-para-anim className="text-[3.4vw] text-head font-medium mobile:text-[5.5vw]">
                  nigeria@dmtca.com
                </p>
              </Link>
          </div>
          <div className="flex items-center justify-between mobile:flex-col mobile:gap-[7vw]">
            <div className="w-[15%] mobile:w-[70%]">
              <p className="text-[1.1vw]  uppercase mobile:text-[3.5vw] mobile:text-center ">All rights reserved @2024 dmtca</p>
            </div>
            <div className="w-[30%] mobile:w-[80%]">
              <p className="text-[1.1vw] leading-[1.2] text-center mobile:text-[3.5vw] mobile:text-center">315b Akin Ogunlewe Rd, Victoria Island, Lagos & No. 1, Adekunle Owobiyi Close, Ogba, Lagos, Nigeria</p>
            </div>
            <Link href={"#"}>
              <div>
                <p className="text-[1.1vw]  uppercase mobile:text-[3.2vw] mobile:text-center">PRIVACY POLICY</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
