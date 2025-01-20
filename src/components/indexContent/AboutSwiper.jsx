
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from 'next-i18next';
import 'swiper/css';
import { useRouter } from "next/router";

const AboutSwiper = () => {
  const { t } = useTranslation('common');

  const slidesData = t('secSwiper', { returnObjects: true });

  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const { locale } = useRouter();

  return (
    <div className="swiper-container swiper-container-main mt-[10vw] tablet:w-[100vw] tablet:ml-[-5vw] rtl:tablet:mr-[-5vw] rtl:tablet:ml-auto fadeup">
      <Swiper
        dir={locale === "ar" ? "rtl" : "ltr"}
        className="aboutSwiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={100}
        slidesPerView={5}
        centeredSlides={true}
        roundLengths={true}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 0 },
          640: { slidesPerView: 3, spaceBetween: 0 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
          1280: { slidesPerView: 5, spaceBetween: 50 },
        }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex flex-col justify-center items-center gap-[3vw]">
              <div className="w-fit h-[20vw] flex justify-center items-center mobile:h-[80vw] tablet:h-[30vw] cursor-grab">
                <div className="w-[11vw] h-[11vw] border border-amber-600 rounded-full p-[3vw] slider-circle bg-white mobile:w-[70vw] mobile:h-[70vw] tablet:w-[20vw] tablet:h-[20vw] tablet:p-[5vw]">
                  <Image
                    src={slide.iconSrc}
                    alt="slide icon"
                    width={50}
                    height={50}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <div className="slider-circle-content w-[30vw] mobile:w-[90vw] tablet:w-[50vw]">
                <h3 className="text-[1.7vw] text-head uppercase font-medium mb-[1vw] mobile:text-[4.5vw] tablet:text-[3vw]">
                  {slide.title}
                </h3>
                <p className="mobile:hidden tablet:hidden">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex gap-[1.5vw] rtl:flex-row-reverse absolute top-[-10%] right-0 rtl:right-auto rtl:left-0 tablet:bottom-[-15%] rtl:tablet:left-1/2 tablet:top-auto tablet:left-[50%] tablet:translate-x-[-50%] tablet:right-auto mobile:gap-[5vw]">
        <button
          onClick={handlePrev}
          className="w-[3vw] group border border-black rounded-full h-[3vw] flex items-center relative justify-center p-[1vw] overflow-hidden tablet:w-[10vw] tablet:h-[10vw] tablet:p-[2.5vw] mobile:w-[15vw] mobile:h-[15vw]"
        >
          <Image
            quality={100}
            alt="arrow icon"
            width={24}
            height={24}
            loading="lazy"
            className="rotate-180 z-10 invert group-hover:invert-0 duration-300"
            src="/assets/icons/arrow.svg"
          />
          <span className="block absolute scale-0 h-full w-full bg-black group-hover:scale-100 duration-300 rounded-full" />
        </button>
        <button
          onClick={handleNext}
          className="w-[3vw] border group border-black rounded-full h-[3vw] flex items-center relative justify-center p-[1vw] overflow-hidden tablet:w-[10vw] tablet:h-[10vw] tablet:p-[2.5vw] mobile:w-[15vw] mobile:h-[15vw]"
        >
          <Image
            alt="arrow icon"
            width={24}
            height={24}
            loading="lazy"
            className="z-10 invert group-hover:invert-0 duration-300"
            src="/assets/icons/arrow.svg"
          />
          <span className="block absolute scale-0 h-full w-full bg-black group-hover:scale-100 duration-300 rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default AboutSwiper;
