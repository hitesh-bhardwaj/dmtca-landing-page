import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const Highlights = () => {

  const { t } = useTranslation('faq');
  const { locale } = useRouter();

  return (
    <>
      <section className='pb-[7%] pt-[5%] overflow-hidden mobile:py-[15%]' id='highlights'>
        <div className='container-lg mb-[4vw] flex flex-col gap-[1.5vw]'>
          <h2 data-para-anim className='title-2'>
            {t('highLights')}
          </h2>
          <div className='bg-black h-[1px] w-full lineDraw'></div>
        </div>
        <div className='w-[100vw]  h-full swipe fadeup tablet:w-[100vw] mobile:mt-[10vw] tablet:mt-[5vw]'>
          <Swiper
            dir={locale === "ar" ? "rtl" : "ltr"}
            breakpoints={{
              320: { slidesPerView: 1.5, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
              1280: { slidesPerView: 2.5, spaceBetween: 20 },
            }}
            spaceBetween={20}
            freeMode={true}
            grabCursor={true}
            scrollbar={{ draggable: true }}
            modules={[Scrollbar, FreeMode]}
            className="highlights-swiper w-full h-[25vw] !px-[4vw] tablet:px-[6vw] mobile:px-[10vw]"
          >
            <SwiperSlide className='w-[40vw] h-[25vw] rounded-[2vw] overflow-hidden relative tablet:h-[70vw]'>
              <Image src="/assets/highlights/highlights-1-image.png" alt='highlights-img-1' fill className='hover:scale-110 transition-all ease-in-out duration-500' />
            </SwiperSlide>
            <SwiperSlide className='w-[40vw] h-[25vw] rounded-[2vw] overflow-hidden relative'>
              <Image src="/assets/highlights/highlights-2-image.png" alt='highlights-img-2' fill className='hover:scale-110 transition-all ease-in-out duration-500' />
            </SwiperSlide>
            <SwiperSlide className='w-[40vw] h-[25vw] rounded-[2vw] overflow-hidden relative'>
              <Image src="/assets/highlights/highlights-3-image.png" alt='highlights-img-3' fill className='hover:scale-110 transition-all ease-in-out duration-500' />
            </SwiperSlide>
            <SwiperSlide className='w-[40vw] h-[25vw] rounded-[2vw] overflow-hidden relative'>
              <Image src="/assets/highlights/highlights-1-image.png" alt='highlights-img-1' fill className='hover:scale-110 transition-all ease-in-out duration-500' />
            </SwiperSlide>
            <SwiperSlide className='w-[40vw] h-[25vw] rounded-[2vw] overflow-hidden relative'>
              <Image src="/assets/highlights/highlights-2-image.png" alt='highlights-img-2' fill className='hover:scale-110 transition-all ease-in-out duration-500' />
            </SwiperSlide>
            <SwiperSlide className='w-[40vw] h-[25vw] rounded-[2vw] overflow-hidden relative'>
              <Image src="/assets/highlights/highlights-3-image.png" alt='highlights-img-3' fill className='hover:scale-110 transition-all ease-in-out duration-500' />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

    </>
  )
}

export default Highlights
