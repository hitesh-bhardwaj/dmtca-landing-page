import Image from 'next/image';

const ProjectHoverAnimation = () => {
    return (
        <>
            <section className="py-[10%] bg-[#161616] mobile:py-[20%]">
                <div className="absolute  w-[20vw] h-[13vw] aspect-3/2 overflow-hidden pointer-events-none origin-center scale-0 z-[2]">
                    <div className="bg-[url('/assets/move-img.png')] bg-no-repeat bg-cover bg-left-top pointer-events-none w-full h-full"></div>
                </div>
                <div className="container-lg flex items-center justify-center">
                    <div className="w-[90%] flex flex-col">

                        {/* First Project */}
                        <div className="text-center group" id="p1">
                            <div className="flex w-fit mx-auto items-center justify-center mb-[2.8vw] relative gap-[1.5vw]">
                                <p className="uppercase text-head text-white group-hover:translate-x-[-4.5vw] duration-300 text-[4.5vw] leading-[1] ease-out mobile:text-[5vw] mobile:group-hover:translate-x-0">
                                    <span className='mobile:text-[7vw]'>25+</span> Years in Business
                                </p>
                                <div className="w-[8vw] absolute right-[-9%] h-[8vw] -top-1/2 rounded-full overflow-hidden ml-[1.5vw] scale-0 duration-300 ease-out group-hover:scale-100 mobile:group-hover:scale-0">
                                    <Image src="/assets/hoverImages/image1.png" alt="Images" width={250} height={250} className="object-cover h-full w-full"/>
                                </div>
                            </div>
                            <span className="w-full block h-[1px] bg-white mobile:my-[7vw]"></span>
                        </div>

                        {/* Second Project */}
                        <div className="text-center group" id="p2">
                            <div className="flex items-center justify-center mt-[3.5vw] mb-[2.8vw] relative gap-[1.5vw]">
                            <p className="uppercase text-head text-white group-hover:translate-x-[-4.5vw] duration-300 text-[4.5vw] leading-[1] ease-out mobile:text-[5vw] mobile:group-hover:translate-x-0">
                                    <span className='mobile:text-[7vw]'>50000+</span> Housing
                                </p>{" "}
                                <div className="w-[8vw] absolute right-[35%] h-[8vw] -top-1/2 overflow-hidden ml-[1.5vw] scale-0 duration-300 ease-out group-hover:scale-100 circle-clip mobile:hidden">
                                    <Image src="/assets/hoverImages/image2.png" alt="Images" width={250} height={250} className="object-cover h-full w-full"/>
                                </div>
                                <p className="uppercase text-head text-white group-hover:translate-x-[4.5vw] duration-300 text-[4.5vw] leading-[1] ease-out mobile:text-[5vw] mobile:group-hover:translate-x-0">
                                    Projects
                                </p>
                            </div>
                            <span className="w-full block h-[1px]  bg-white mobile:my-[7vw]"></span>
                        </div>

                        {/* Third Project */}
                        <div className="text-center group" id="p3">
                            <div className="flex items-center justify-center mt-[3.5vw] mb-[2.8vw] relative gap-[1.5vw]">
                            <p className="uppercase text-head text-white group-hover:translate-x-[-7vw] duration-300 text-[4.5vw] leading-[1] ease-out mobile:text-[7vw] mobile:group-hover:translate-x-0">
                                    20+
                                </p>{" "}
                                <div className="w-[14vw] absolute right-[62%] h-[8vw] -top-1/2 overflow-hidden ml-[1.5vw] scale-0 duration-300 ease-out group-hover:scale-100 rounded-xl mobile:hidden">
                                    <Image src="/assets/hoverImages/image3.png" alt="Images" width={250} height={250} className="object-cover h-full w-full"/>
                                </div>
                                <p className="uppercase text-head text-white group-hover:translate-x-[7vw] duration-300 text-[4.5vw] leading-[1] ease-out mobile:text-[5vw] mobile:group-hover:translate-x-0">
                                    Luxury Projects
                                </p>
                            </div>
                            <span className="w-full block h-[1px]  bg-white"></span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectHoverAnimation;