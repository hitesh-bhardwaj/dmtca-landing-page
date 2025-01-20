import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from 'next-i18next';

const SingleAccordion = ({ id, title, content1, content2 }) => {

  return (
    <AccordionItem value={id} className="group relative">
      <div className="w-full bg-black lineDraw h-[1px]  mobile:block tablet:block"></div>
      <div className="absolute bg-[#E0D4C6] w-full h-full scale-y-0 group-hover:scale-y-[1] origin-top transition-all duration-500 ease-out"></div>
      <AccordionTrigger

        className="text-[1.5vw] font-semibold mobile:w-[70%] mobile:text-[5vw] pl-[2vw] mobile:text-left mobile:flex tablet:text-[3.5vw] relative z-[2] tablet:text-left ease-in py-[2%] mobile:py-[5%] accordion [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:rotate-[90deg] [&[data-state=open]>.line>.line-internal>.icon-container>.icon>.minus]:rotate-90 [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:bg-body [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:text-white"
      >
        {title}
      </AccordionTrigger>
      <AccordionContent className="text-[1.2vw] pl-[2vw] text-black font-light leading-[1.3] space-y-[1.5vw] w-[70%] mb-[20px] mobile:w-full mobile:text-[4vw] mobile:space-y-[4vw] relative z-[2] tablet:text-[2.7vw] tablet:w-[90%]">
        <p data-para-anim className="">
          {content1}
        </p>
        <p data-para-anim className="">
          {content2}
        </p>
      </AccordionContent>
    </AccordionItem>
  );
};
const Faq = () => {

  const { t } = useTranslation('faq');

  const faqData = t('faqs', { returnObjects: true });

  return (
    <>
      <section className='py-[7%] mobile:pt-[20%]' id='faq'>
        <div className="w-full ml-auto mobile:w-full tablet:w-full container-lg !px-[10vw] tablet:!px-[5vw] ">
          <h2 data-para-anim className='title-2 mb-[5vw]'>{t('faqTitle')}</h2>
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full fadeup"
          >
            {faqData.map((item, index) => (
              <SingleAccordion
                key={index}
                id={`item-${index + 1}`}
                title={item.title}
                content1={item.content}
              />
            ))}
          </Accordion>
          <div className="w-full bg-black lineDraw h-[1px] mobile:block tablet:block"></div>
        </div>
      </section>
    </>
  )
}

export default Faq
