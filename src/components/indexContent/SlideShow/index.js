/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const NEXT = 1;
const PREV = -1;

const SlideShow = () => {
    const slidesRef = useRef([]);
    const slidesInnerRef = useRef([]);
    const [isMobile, setIsMobile] = useState(false);
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const { t } = useTranslation('common');

    // Function to check window size
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

    const slidesTotal = 3;

    useEffect(() => {
        if (slidesRef.current[current]) {
            slidesRef.current[current].classList.add('slide--current');
        }

        return () => {
            slidesRef.current.forEach((slide) => {
                slide.classList.remove('slide--current');
            });
        };
    }, []);

    const navigate = (direction) => {
        if (isAnimating) return;
        setIsAnimating(true);

        const previous = current;
        const newCurrent =
            direction === NEXT
                ? (current + 1) % slidesTotal
                : (current - 1 + slidesTotal) % slidesTotal;
        setCurrent(newCurrent);

        const currentSlide = slidesRef.current[previous];
        const currentInner = slidesInnerRef.current[previous];
        const upcomingSlide = slidesRef.current[newCurrent];
        const upcomingInner = slidesInnerRef.current[newCurrent];

        upcomingSlide.classList.add('slide--current');

        gsap
            .timeline({
                defaults: {
                    duration: 1.5,
                    ease: 'power3.inOut',
                },
                onComplete: () => {
                    currentSlide.classList.remove('slide--current');
                    setIsAnimating(false);
                },
            })
            .addLabel('start', 0)
            .to(
                currentSlide,
                {
                    xPercent: -direction * 100,
                },
                'start'
            )
            .to(
                currentInner,
                {
                    startAt: {
                        transformOrigin: direction === NEXT ? '100% 50%' : '0% 50%',
                    },
                    scaleX: 1.5,
                },
                'start'
            )
            .fromTo(
                upcomingSlide,
                {
                    xPercent: direction * 100,
                },
                {
                    xPercent: 0,
                },
                'start'
            )
            .fromTo(
                upcomingInner,
                {
                    transformOrigin: direction === NEXT ? '0% 50%' : '100% 50%',
                    xPercent: -direction * 100,
                    scaleX: 1.5,
                },
                {
                    xPercent: 0,
                    scaleX: 1,
                },
                'start'
            );
    };

    return (
        <section className="w-screen h-screen overflow-hidden tablet:h-[80vh]" id="features-slideshow">
            <div className={`relative w-full h-full `} data-scroll
                data-scroll-speed={!isMobile ? '-0.3' : undefined}>

                <div dir='ltr' className="w-full h-full absolute z-10 top-0 left-0 bottom-0 right-0 grid place-items-end px-16 py-10 tablet:px-[5vw] pointer-events-none">
                    <nav className="flex gap-4 pointer-events-auto">
                        <button
                            className="w-[3vw] group border border-white rounded-full h-[3vw] flex items-center relative justify-center p-[1vw] overflow-hidden tablet:w-[10vw] tablet:h-[10vw] tablet:p-[2.5vw]"
                            onClick={() => navigate(PREV)}
                        >
                            <Image
                                quality={100}
                                alt="arrow icon"
                                width={24}
                                height={24}
                                loading="lazy"
                                className="rotate-180 z-10 group-hover:invert duration-300"
                                src="/assets/icons/arrow.svg"
                            />
                            <span className="block absolute scale-0 h-full w-full bg-white group-hover:scale-100 duration-300 rounded-full" />
                        </button>
                        <button
                            className="w-[3vw] border group border-white rounded-full h-[3vw] flex items-center relative justify-center p-[1vw] overflow-hidden tablet:w-[10vw] tablet:h-[10vw] tablet:p-[2.5vw]"
                            onClick={() => navigate(NEXT)}
                        >
                            <Image
                                alt="arrow icon"
                                width={24}
                                height={24}
                                loading="lazy"
                                className="z-10 group-hover:invert duration-300"
                                src="/assets/icons/arrow.svg"
                            />
                            <span className="block absolute scale-0 h-full w-full bg-white group-hover:scale-100 duration-300 rounded-full" />
                        </button>
                    </nav>
                </div>

                <div className="slides w-screen h-screen absolute overflow-hidden place-items-center tablet:h-[80vh]">
                    <div
                        className="slide"
                        ref={(el) => (slidesRef.current[0] = el)}
                    >

                        <div className="absolute w-fit z-[2] pointer-events-auto flex gap-4 left-[5%] top-[28%] cursor-pointer mobile:top-[35%] tablet:top-[35%] ">
                            <div className="group h-[7vw] w-[7vw] relative">
                                <div className="rounded-full group-hover:bg-white/40 group-hover:border-white/0 duration-300 h-[7vw] w-[7vw] border-2 border-white flex items-center justify-center">
                                    <span className="bg-white/20 h-[40%] w-[40%] z-[0] rounded-full flex items-center justify-center relative">
                                        <span className="bg-white block h-[50%] w-[50%] shadow z-[1] static rounded-full" />
                                    </span>
                                </div>
                                <div className="absolute left-[110%] top-[-50%] pointer-events-none">
                                    <p className="text-[1.25vw] absolute group-hover:translate-y-[5vw] top-[10%] group-hover:opacity-0 duration-300 text-white w-[5vw] leading-[1.2] tablet:text-[2.5vw] mobile:text-[3.2vw] tablet:top-[10%] mobile:top-0 rtl:left-0">{t('thirdName1')}</p>
                                    <div className="bg-white/20 group-hover:translate-y-[-5vw] group-hover:opacity-100 opacity-0 duration-300 backdrop-blur-sm rounded-xl w-[18vw] p-[1vw] mobile:w-[60vw] tablet:w-[65vw] tablet:p-[2.5vw]">
                                        <p className="text-white text-[1.25vw] leading-[1.2] tablet:text-[2.5vw] mobile:text-[3.5vw] tablet:leading-[1.4]">
                                            {t('thirdContent1')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute w-fit z-[2] pointer-events-auto flex gap-4 right-[30%] top-[45%] cursor-pointer mobile:right-[60%] tablet:right-[50%] mobile:top-[50%]">
                            <div className="group h-[7vw] w-[7vw] relative">
                                <div className="rounded-full group-hover:bg-white/40 group-hover:border-white/0 duration-300 h-[7vw] w-[7vw] border-2 border-white flex items-center justify-center">
                                    <span className="bg-white/20 h-[40%] w-[40%] z-[0] rounded-full flex items-center justify-center relative">
                                        <span className="bg-white block h-[50%] w-[50%] shadow z-[1] static rounded-full" />
                                    </span>
                                </div>
                                <div className="absolute left-[110%] top-[-50%] pointer-events-none">
                                    <p className="text-[1.25vw] absolute group-hover:translate-y-[5vw] top-[10%] group-hover:opacity-0 duration-300 text-white w-[5vw] leading-[1.2] mobile:text-[3.2vw] tablet:text-[2.5vw] tablet:top-[10%] mobile:w-[30vw] mobile:top-[10%] rtl:left-0">{t('thirdName2')}</p>
                                    <div className="bg-white/20 group-hover:translate-y-[-5vw] group-hover:opacity-100 opacity-0 duration-300 backdrop-blur-sm rounded-xl w-[20vw] p-[1vw] mobile:w-[55vw] tablet:w-[45vw] tablet:p-[2.5vw]">
                                        <p className="text-white text-[1.25vw] leading-[1.2] mobile:text-[3.5vw] tablet:text-[2.5vw] tablet:leading-[1.4]">
                                            {t('thirdContent2')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute w-fit z-[2] pointer-events-auto flex gap-4 left-[60%] top-[75%] cursor-pointer tablet:left-[20%] tablet:top-[65%] mobile:left-[10%]">
                            <div className="group h-[7vw] w-[7vw] relative">
                                <div className="rounded-full group-hover:bg-white/40 group-hover:border-white/0 duration-300 h-[7vw] w-[7vw] border-2 border-white flex items-center justify-center">
                                    <span className="bg-white/20 h-[40%] w-[40%] z-[0] rounded-full flex items-center justify-center relative">
                                        <span className="bg-white block h-[50%] w-[50%] shadow z-[1] static rounded-full" />
                                    </span>
                                </div>
                                <div className="absolute left-[110%] top-[-50%] pointer-events-none">
                                    <p className="text-[1.25vw] absolute group-hover:translate-y-[5vw] top-[10%] group-hover:opacity-0 duration-300 text-white w-[5vw] leading-[1.2] mobile:text-[3.2vw] tablet:top-[15%] mobile:top-[10%] tablet:text-[2.5vw] rtl:left-0">{t('thirdName3')}</p>
                                    <div className="bg-white/20 group-hover:translate-y-[-5vw] group-hover:opacity-100 opacity-0 duration-300 backdrop-blur-sm rounded-xl w-[18vw] p-[1vw] tablet:w-[60vw] mobile:w-[80vw] relative tablet:p-[2.5vw]">
                                        <p className="text-white text-[1.25vw] leading-[1.2] mobile:text-[3.5vw] tablet:text-[2.5vw] tablet:leading-[1.4]">
                                            {t('thirdContent3')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section Title Slide 1 */}
                        <div className="text-white text-center left-1/2 -translate-x-1/2 absolute top-10 z-[2] w-[35%] mx-auto tablet:w-[90%]">
                            <p className="text-[1.25vw] tablet:text-[4.5vw]">{t('thirdSub')}</p>
                            <span className="block h-[1px] w-full bg-gradient-to-r my-2 from-transparent from-0% via-white via-50% to-transparent to-100%" />
                            <h3 className="text-[3.3vw] font-head leading-[1.2] tablet:text-[6vw]">{t('thirdTitle')}</h3>
                        </div>

                        {/* Slide 1 Address */}
                        <div className="bg-white/20 backdrop-blur-sm absolute w-fit rounded-xl text-white p-[1.5vw] z-[2] bottom-10 left-16 tablet:left-[5%] tablet:bottom-[5%] mobile:p-[4vw] tablet:p-[2.2vw]">
                            <h4 className="text-xl font-head mb-[3vw] tablet:mb-[1vw]">
                                {t('thirdAddTitle')}
                            </h4>
                            <div className="flex items-center gap-2 mb-2 tablet:mb-[1vw]">
                                <img
                                    src="/assets/icons/location.svg"
                                    alt="location icon"
                                    width="18"
                                    height="18"
                                />
                                <p className="text-md">{t('thirdAdd')}</p>
                            </div>
                            <div className="flex gap-[2vw]">
                                <div className="flex items-center gap-2">
                                    <img
                                        src="/assets/icons/area.svg"
                                        alt="location icon"
                                        width="18"
                                        height="18"
                                    />
                                    <p className="text-md">280 m<sup>2</sup></p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img
                                        src="/assets/icons/beds.svg"
                                        alt="location icon"
                                        width="18"
                                        height="18"
                                    />
                                    <p className="text-md">4</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img
                                        src="/assets/icons/tub.svg"
                                        alt="location icon"
                                        width="18"
                                        height="18"
                                    />
                                    <p className="text-md">4</p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="slide__img pointer-events-none relative w-full h-full"
                            ref={(el) => (slidesInnerRef.current[0] = el)}
                        >
                            <span
                                className="absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-50 block bg-gradient-to-b from-transparent to-black z-[1]"
                            />
                            <Image
                                loading="lazy"
                                src="/assets/slider1/img1.png"
                                alt="Slider Image"
                                fill
                                quality={90}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div
                        className="slide"
                        ref={(el) => (slidesRef.current[1] = el)}
                    >

                        <div className="absolute w-fit z-[2] pointer-events-auto flex gap-4 left-[5%] top-[28%] cursor-pointer mobile:top-[25%]">
                            <div className="group h-[7vw] w-[7vw] relative">
                                <div className="rounded-full group-hover:bg-white/40 group-hover:border-white/0 duration-300 h-[7vw] w-[7vw] border-2 border-white flex items-center justify-center">
                                    <span className="bg-white/20 h-[40%] w-[40%] z-[0] rounded-full flex items-center justify-center relative">
                                        <span className="bg-white block h-[50%] w-[50%] shadow z-[1] static rounded-full" />
                                    </span>
                                </div>
                                <div className="absolute left-[110%] top-[-50%] pointer-events-none">
                                    <p className="text-[1.25vw] absolute group-hover:translate-y-[5vw] top-[10%] group-hover:opacity-0 duration-300 text-white w-[5vw] leading-[1.2] mobile:text-[3.2vw] tablet:w-[20vw] tablet:text-[2.5vw] tablet:top-[15%] rtl:left-0">{t('thirdName1')}</p>
                                    <div className="bg-white/20 group-hover:translate-y-[-5vw] group-hover:opacity-100 opacity-0 duration-300 backdrop-blur-sm rounded-xl w-[18vw] p-[1vw] tablet:w-[60vw] tablet:p-[3vw]">
                                        <p className="text-white text-[1.25vw] leading-[1.2] mobile:text-[3.5vw] tablet:text-[2.5vw]">
                                            {t('thirdContent1')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute w-fit z-[2] pointer-events-auto flex gap-4 right-[30%] top-[45%] cursor-pointer tablet:right-[60%] mobile:right-[70%]">
                            <div className="group h-[7vw] w-[7vw] relative">
                                <div className="rounded-full group-hover:bg-white/40 group-hover:border-white/0 duration-300 h-[7vw] w-[7vw] border-2 border-white flex items-center justify-center">
                                    <span className="bg-white/20 h-[40%] w-[40%] z-[0] rounded-full flex items-center justify-center relative">
                                        <span className="bg-white block h-[50%] w-[50%] shadow z-[1] static rounded-full" />
                                    </span>
                                </div>
                                <div className="absolute left-[110%] top-[-50%] pointer-events-none">
                                    <p className="text-[1.25vw] absolute group-hover:translate-y-[5vw] top-[10%] group-hover:opacity-0 duration-300 text-white w-[5vw] leading-[1.2] mobile:text-[3.2vw] tablet:text-[2.5vw] rtl:left-0">{t('thirdName2')}</p>
                                    <div className="bg-white/20 group-hover:translate-y-[-5vw] group-hover:opacity-100 opacity-0 duration-300 backdrop-blur-sm rounded-xl w-[20vw] p-[1vw] tablet:w-[45vw] mobile:w-[60vw] tablet:p-[3vw]">
                                        <p className="text-white text-[1.25vw] leading-[1.2] mobile:text-[3.5vw] tablet:text-[2.5vw]">
                                            {t('thirdContent2')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute w-fit z-[2] pointer-events-auto flex gap-4 left-[60%] top-[75%] cursor-pointer tablet:left-[20%] tablet:top-[65%] mobile:hidden">
                            <div className="group h-[7vw] w-[7vw] relative">
                                <div className="rounded-full group-hover:bg-white/40 group-hover:border-white/0 duration-300 h-[7vw] w-[7vw] border-2 border-white flex items-center justify-center">
                                    <span className="bg-white/20 h-[40%] w-[40%] z-[0] rounded-full flex items-center justify-center relative">
                                        <span className="bg-white block h-[50%] w-[50%] shadow z-[1] static rounded-full" />
                                    </span>
                                </div>
                                <div className="absolute left-[110%] top-[-50%] pointer-events-none">
                                    <p className="text-[1.25vw] absolute group-hover:translate-y-[5vw] top-[10%] group-hover:opacity-0 duration-300 text-white w-[5vw] leading-[1.2] mobile:text-[3.2vw] mobile:top-[8%] tablet:text-[2.5vw] tablet:top-[20%] rtl:left-0">{t('thirdName3')}</p>
                                    <div className="bg-white/20 group-hover:translate-y-[-5vw] group-hover:opacity-100 opacity-0 duration-300 backdrop-blur-sm rounded-xl w-[18vw] p-[1vw] tablet:p-[2vw] tablet:w-[60vw]">
                                        <p className="text-white text-[1.25vw] leading-[1.2] mobile:text-[3.5vw] tablet:text-[2.5vw]">
                                            {t('thirdContent3')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/20 backdrop-blur-sm absolute w-fit rounded-xl text-white p-[1.5vw] z-[2] bottom-10 left-16 tablet:left-[4%] tablet:bottom-[4%] mobile:p-[3vw] tablet:p-[2.2vw]">
                            <h4 className="text-xl font-head mb-[3vw] tablet:mb-[1vw]">
                                {t('thirdAddTitle')}
                            </h4>
                            <div className="flex items-center gap-2 mb-2 tablet:mb-[1vw]">
                                <img
                                    src="/assets/icons/location.svg"
                                    alt="location icon"
                                    width="18"
                                    height="18"
                                />
                                <p className="text-md">{t('thirdAdd')}</p>
                            </div>
                            <div className="flex gap-[2vw]">
                                <div className="flex items-center gap-2">
                                    <img
                                        src="/assets/icons/area.svg"
                                        alt="location icon"
                                        width="18"
                                        height="18"
                                    />
                                    <p className="text-md">280 m<sup>2</sup></p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img
                                        src="/assets/icons/beds.svg"
                                        alt="location icon"
                                        width="18"
                                        height="18"
                                    />
                                    <p className="text-md">4</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img
                                        src="/assets/icons/tub.svg"
                                        alt="location icon"
                                        width="18"
                                        height="18"
                                    />
                                    <p className="text-md">4</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="slide__img pointer-events-none relative w-full h-full"
                            ref={(el) => (slidesInnerRef.current[1] = el)}
                        >
                            <span
                                className="absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-50 block bg-gradient-to-b from-transparent to-black z-[1]"
                            />
                            <Image
                                loading="lazy"
                                src="/assets/slider1/img2.png"
                                alt="Slider Image"
                                fill
                                quality={90}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div
                        className="slide"
                        ref={(el) => (slidesRef.current[2] = el)}
                    >

                        <div className="absolute w-fit z-[2] pointer-events-auto flex gap-4 left-[5%] top-[28%] cursor-pointer tablet:top-[37%] tablet:left-[15%]">
                            <div className="group h-[7vw] w-[7vw] relative">
                                <div className="rounded-full group-hover:bg-white/40 group-hover:border-white/0 duration-300 h-[7vw] w-[7vw] border-2 border-white flex items-center justify-center">
                                    <span className="bg-white/20 h-[40%] w-[40%] z-[0] rounded-full flex items-center justify-center relative">
                                        <span className="bg-white block h-[50%] w-[50%] shadow z-[1] static rounded-full" />
                                    </span>
                                </div>
                                <div className="absolute left-[110%] top-[-50%] pointer-events-none">
                                    <p className="text-[1.25vw] absolute group-hover:translate-y-[5vw] top-[10%] group-hover:opacity-0 duration-300 text-white w-[5vw] leading-[1.2] mobile:text-[3.2vw] tablet:top-[5%] tablet:text-[2.5vw] rtl:left-0">{t('thirdName1')}</p>
                                    <div className="bg-white/20 group-hover:translate-y-[-5vw] group-hover:opacity-100 opacity-0 duration-300 backdrop-blur-sm rounded-xl w-[18vw] p-[1vw] tablet:p-[3vw] tablet:w-[60vw]">
                                        <p className="text-white text-[1.25vw] leading-[1.2] mobile:text-[3.5vw] tablet:text-[2.5vw]">
                                            {t('thirdContent1')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute w-fit z-[2] pointer-events-auto flex gap-4 right-[30%] top-[45%] cursor-pointer tablet:top-[60%] tablet:right-[70%]">
                            <div className="group h-[7vw] w-[7vw] relative">
                                <div className="rounded-full group-hover:bg-white/40 group-hover:border-white/0 duration-300 h-[7vw] w-[7vw] border-2 border-white flex items-center justify-center">
                                    <span className="bg-white/20 h-[40%] w-[40%] z-[0] rounded-full flex items-center justify-center relative">
                                        <span className="bg-white block h-[50%] w-[50%] shadow z-[1] static rounded-full" />
                                    </span>
                                </div>
                                <div className="absolute left-[110%] top-[-50%] pointer-events-none">
                                    <p className="text-[1.25vw] absolute group-hover:translate-y-[5vw] top-[10%] group-hover:opacity-0 duration-300 text-white w-[5vw] leading-[1.2] mobile:text-[3.2vw] tablet:text-[2.5vw] rtl:left-0">{t('thirdName2')}</p>
                                    <div className="bg-white/20 group-hover:translate-y-[-5vw] group-hover:opacity-100 opacity-0 duration-300 backdrop-blur-sm rounded-xl w-[20vw] p-[1vw] tablet:p-[3vw] tablet:w-[60vw]">
                                        <p className="text-white text-[1.25vw] leading-[1.2] mobile:text-[3.5vw] tablet:text-[2.5vw]">
                                            {t('thirdContent2')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute w-fit z-[2] pointer-events-auto flex gap-4 left-[60%] top-[75%] cursor-pointer tablet:hidden">
                            <div className="group h-[7vw] w-[7vw] relative">
                                <div className="rounded-full group-hover:bg-white/40 group-hover:border-white/0 duration-300 h-[7vw] w-[7vw] border-2 border-white flex items-center justify-center">
                                    <span className="bg-white/20 h-[40%] w-[40%] z-[0] rounded-full flex items-center justify-center relative">
                                        <span className="bg-white block h-[50%] w-[50%] shadow z-[1] static rounded-full" />
                                    </span>
                                </div>
                                <div className="absolute left-[110%] top-[-50%] pointer-events-none">
                                    <p className="text-[1.25vw] absolute group-hover:translate-y-[5vw] top-[10%] group-hover:opacity-0 duration-300 text-white w-[5vw] leading-[1.2] rtl:left-0">{t('thirdName3')}</p>
                                    <div className="bg-white/20 group-hover:translate-y-[-5vw] group-hover:opacity-100 opacity-0 duration-300 backdrop-blur-sm rounded-xl w-[18vw] p-[1vw] ">
                                        <p className="text-white text-[1.25vw] leading-[1.2]">
                                            {t('thirdContent3')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/20 backdrop-blur-sm absolute w-fit rounded-xl text-white p-[1.5vw] z-[2] bottom-10 left-16 tablet:left-[4%] tablet:bottom-[4%] mobile:p-[3vw] tablet:p-[2.2vw]">
                            <h4 className="text-xl font-head mb-[3vw] tablet:mb-[1vw]">
                                {t('thirdAddTitle')}
                            </h4>
                            <div className="flex items-center gap-2 mb-2 tablet:mb-[1vw]">
                                <img
                                    src="/assets/icons/location.svg"
                                    alt="location icon"
                                    width="18"
                                    height="18"
                                />
                                <p className="text-md">{t('thirdAdd')}</p>
                            </div>
                            <div className="flex gap-[2vw]">
                                <div className="flex items-center gap-2">
                                    <img
                                        src="/assets/icons/area.svg"
                                        alt="location icon"
                                        width="18"
                                        height="18"
                                    />
                                    <p className="text-md">280 m<sup>2</sup></p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img
                                        src="/assets/icons/beds.svg"
                                        alt="location icon"
                                        width="18"
                                        height="18"
                                    />
                                    <p className="text-md">4</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img
                                        src="/assets/icons/tub.svg"
                                        alt="location icon"
                                        width="18"
                                        height="18"
                                    />
                                    <p className="text-md">4</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="slide__img pointer-events-none relative w-full h-full"
                            ref={(el) => (slidesInnerRef.current[2] = el)}
                        >
                            <span
                                className="absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-50 block bg-gradient-to-b from-transparent to-black z-[1]"
                            />
                            <Image
                                loading="lazy"
                                src="/assets/slider1/img3.png"
                                alt="Slider Image"
                                fill
                                quality={90}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SlideShow;
