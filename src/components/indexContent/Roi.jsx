import { useTranslation } from 'next-i18next';
import React from 'react'

const Roi = () => {
  const { t } = useTranslation('faq');

  return (
    <>
      <section className='pt-[3%] pb-[10%] mobile:pb-[20%]' id='roi'>
        <div className='container-lg flex justify-between mobile:flex-col mobile:gap-[7vw]'>
          <h2 data-para-anim className='title-2 w-[40%] mobile:w-full'>
            {t('roiTitle')}
          </h2>
          <p data-para-anim className='w-[45%] mobile:w-full'>{t('roiContent')}</p>
        </div>
      </section>
    </>
  )
}

export default Roi
