import Image from "next/image";
import Link from "next/link";

const ServiceButton = ({link, btnText , className}) => {
    return(
        <Link href={link} className={`service-btn fadeUp ${className}`}>
            <span data-primary className="btn-text">
                {btnText}
            </span>
            <div aria-hidden="true" className="btn-circle">
                <div className="btn-circle-text ml-[-2px]">
                    {btnText}
                    <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-icon">
                        <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className="btn-path fill-current" />
                        <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className="btn-path fill-current" />
                    </svg>
                </div>
            </div>
        </Link>
    )
}

export default function Service() {
    return (
        <>
            <section className='w-screen mobile:py-[20%]' id='services'>
                <div className='container-lg flex flex-col py-[10%] gap-[7vw]'>
                    <div className='flex gap-[1vw] fadeup mobile:flex-wrap'>
                        <ServiceButton link={"#"} btnText={"Download Brochure"} />
                        <ServiceButton link={"#"} btnText={"Download Floor Plan"} className={"mobile:hidden"} />
                        <ServiceButton link={"#"} btnText={"Download Payment Plan"}  className={"mobile:hidden"} />
                        <ServiceButton link={"#"} btnText={"Download Master Plan"} className={"mobile:hidden"} />
                        <ServiceButton link={"#"} btnText={"Download Site Plan"} className={"mobile:hidden"}  />
                    </div>
                    <div className="w-full h-full mobile:overflow-scroll mobile:mt-[10%]">

                    <div className="flex relative gap-[1.5%] overflow-hidden aspect-[2.5] fadeup mobile:flex mobile:w-[400vw] mobile:ml-[5%] mobile:aspect-auto mobile:overflow-visible">
                        <div className="stripe group mobile:w-full mobile:h-[50vh] mobile:p-[4vw]">
                            <Image fill alt="Image" src="/assets/service/relaxation.png" loading="lazy" quality={90} />
                            <div className="stripe-label backdrop-blur-sm px-[2vw] py-[1vw] bg-white/40 rounded-xl overflow-hidden w-fit duration-500 ease-in-out transition-all mobile:py-[2vw] mobile:px-[3vw]">
                                <p className="text-[1.25vw] font-head text-white uppercase whitespace-nowrap mobile:text-[4vw] ">Relaxation Lounge</p>
                            </div>
                        </div>
                        <div className="stripe mobile:p-[4vw]">
                            <Image fill alt="Image" src="/assets/service/pool.png" loading="lazy" quality={90} />
                            <div className="stripe-label backdrop-blur-sm px-[2vw] py-[1vw] bg-white/40 rounded-xl overflow-hidden w-fit duration-500 ease-in-out transition-all mobile:py-[2vw] mobile:px-[3vw]">
                                <p className="text-[1.25vw] font-head text-white uppercase whitespace-nowrap mobile:text-[4vw] ">65 Foot Lap Pool</p>
                            </div>
                        </div>
                        <div className="stripe mobile:p-[4vw]">
                            <Image fill alt="Image" src="/assets/service/spa.png" loading="lazy" quality={90} />
                            <div className="stripe-label backdrop-blur-sm px-[2vw] py-[1vw] bg-white/40 rounded-xl overflow-hidden w-fit duration-500 ease-in-out transition-all mobile:py-[2vw] mobile:px-[3vw]">
                                <p className="text-[1.25vw] font-head text-white uppercase whitespace-nowrap mobile:text-[4vw] ">Spa And Wellness</p>
                            </div>
                        </div>
                        <div className="stripe mobile:p-[4vw]">
                            <Image fill alt="Image" src="/assets/service/fire-pit.png" loading="lazy" quality={90} />
                            <div className="stripe-label backdrop-blur-sm px-[2vw] py-[1vw] bg-white/40 rounded-xl overflow-hidden w-fit duration-500 ease-in-out transition-all mobile:py-[2vw] mobile:px-[3vw]">
                                <p className="text-[1.25vw] font-head text-white uppercase whitespace-nowrap mobile:text-[4vw] ">Fire Pit Lounge</p>
                            </div>
                        </div>
                        <div className="stripe mobile:p-[4vw]">
                            <Image fill alt="Image" src="/assets/service/wine.png" loading="lazy" quality={90} />
                            <div className="stripe-label backdrop-blur-sm px-[2vw] py-[1vw] bg-white/40 rounded-xl overflow-hidden w-fit duration-500 ease-in-out transition-all mobile:py-[2vw] mobile:px-[3vw]">
                                <p className="text-[1.25vw] font-head text-white uppercase whitespace-nowrap mobile:text-[4vw] ">Wine</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}