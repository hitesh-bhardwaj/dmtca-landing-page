import Image from "next/image";
import BlackButton from "./Button/BlackButton";

/* eslint-disable @next/next/no-img-element */
export default function Service() {
    return (
        <>
            <section className='' id='services'>
                <div className='container-lg flex flex-col py-[10%] gap-[7vw]'>
                    <div className='flex gap-[1vw]'>
                        <BlackButton link={"#"} btnText={"Download Brochure"} />
                        <BlackButton link={"#"} btnText={"Download Floor Plan"} />
                        <BlackButton link={"#"} btnText={"Download Payment Plan"} />
                        <BlackButton link={"#"} btnText={"Download Master Plan"} />
                        <BlackButton link={"#"} btnText={"Download Site Plan"} />
                    </div>
                    <div class="flex relative gap-[1.5%] overflow-hidden aspect-[2.5]">
                        <div class="stripe group">
                            <Image fill alt="Image" src="/Images/service/relaxation.png" loading="lazy" quality={90} />
                            <div className="stripe-label backdrop-blur-sm px-[2vw] py-[1vw] bg-white/40 rounded-xl overflow-hidden w-fit duration-500 ease-in-out transition-all">
                                <p class="text-[1.25vw] font-head text-white uppercase whitespace-nowrap ">Relaxation Lounge</p>
                            </div>
                        </div>
                        <div class="stripe">
                            <Image fill alt="Image" src="/Images/service/pool.png" loading="lazy" quality={90} />
                            <div className="stripe-label backdrop-blur-sm px-[2vw] py-[1vw] bg-white/40 rounded-xl overflow-hidden w-fit duration-500 ease-in-out transition-all">
                                <p class="text-[1.25vw] font-head text-white uppercase whitespace-nowrap ">65 Foot Lap Pool</p>
                            </div>
                        </div>
                        <div class="stripe">
                            <Image fill alt="Image" src="/Images/service/spa.png" loading="lazy" quality={90} />
                            <div className="stripe-label backdrop-blur-sm px-[2vw] py-[1vw] bg-white/40 rounded-xl overflow-hidden w-fit duration-500 ease-in-out transition-all">
                                <p class="text-[1.25vw] font-head text-white uppercase whitespace-nowrap ">Spa And Wellness</p>
                            </div>
                        </div>
                        <div class="stripe">
                            <Image fill alt="Image" src="/Images/service/fire-pit.png" loading="lazy" quality={90} />
                            <div className="stripe-label backdrop-blur-sm px-[2vw] py-[1vw] bg-white/40 rounded-xl overflow-hidden w-fit duration-500 ease-in-out transition-all">
                                <p class="text-[1.25vw] font-head text-white uppercase whitespace-nowrap ">Fire Pit Lounge</p>
                            </div>
                        </div>
                        <div class="stripe">
                            <Image fill alt="Image" src="/Images/service/wine.png" loading="lazy" quality={90} />
                            <div className="stripe-label backdrop-blur-sm px-[2vw] py-[1vw] bg-white/40 rounded-xl overflow-hidden w-fit duration-500 ease-in-out transition-all">
                                <p class="text-[1.25vw] font-head text-white uppercase whitespace-nowrap ">Wine</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}