/* eslint-disable react/no-unescaped-entities */
import AboutSwiper from './AboutSwiper';
import { useTranslation } from 'next-i18next';

const About = () => {

  const { t } = useTranslation('common');

  return (
    <>
      <section className="overflow-hidden bg-[#E0D4C6]" id="about">
        <div className="container-lg py-[5%] mobile:py-[20%] mobile:pb-[40%] tablet:py-[15%]">

          <div className="w-full flex justify-between  tablet:flex-col tablet:gap-[8vw]">
            <h2 data-para-anim className="w-[40%] text-[3.8vw] title-2 mt-[-1vw] tablet:w-[90%]">
              {t('secTitle')}
            </h2>
            <p data-para-anim className=" w-[40%] tablet:w-full">
              {t('secSub')}
            </p>
          </div>
          <div className="fadeup w-fit h-fit">
            <AboutSwiper />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
