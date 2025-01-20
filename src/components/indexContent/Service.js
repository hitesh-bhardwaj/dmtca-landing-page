import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ServiceButton = ({ link, btnText, className }) => {
    return (
        <Link href={link} className={`service-btn fadeUp ${className}`}>
            <span data-primary className="btn-text ">
                {btnText}
            </span>
            <div aria-hidden="true" className="btn-circle">
                <div className="btn-circle-text ml-[-0.5vw] mobile:ml-[2px]">
                    <span>{btnText}</span>
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
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation('common');

    const buttons = t('forthButtons', { returnObjects: true });
    const services = t('forthContent', { returnObjects: true });

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <section className='w-screen mobile:py-[20%] tablet:py-[10%] tablet:overflow-hidden mobile:overflow-hidden' id='services'>
                <div className='container-lg flex flex-col py-[10%] gap-[7vw] tablet:py-0 mobile:gap-[1vw]'>
                    <div className='relative hidden mobile:block tablet:block'>
                        <button
                            onClick={toggleDropdown}
                            className='bg-secondary-color text-black border border-black rounded-full px-6 py-3 text-[2.5vw] mobile:text-[4vw] hover:bg-opacity-90 transition-colors'
                        >
                            {t('buttonOption')}
                            <svg
                                className={`w-5 h-5 inline ml-2 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {isOpen && (
                            <div className='absolute z-10 mt-2 w-fit bg-white rounded-[3vw] shadow-2xl px-[4vw] py-[4vw] transition-all duration-300 ease-in mobile:w-fit'>
                                <ul className='py-2 text-gray-700 space-y-[2vw]'>
                                    {buttons.map((item, index) => (
                                        <li key={index}>
                                            <ServiceButton link="#" btnText={item.text} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className='flex gap-[0.5vw] fadeup flex-wrap tablet:hidden mobile:hidden'>
                        {buttons.map((item, index) => (
                            <ServiceButton key={index} link="#" btnText={item.text} />
                        ))}
                    </div>

                    <div className="w-full h-full tablet:overflow-x-auto overflow-hidden mobile:mt-[10%] tablet:w-[100vw] tablet:ml-[-5vw] custom-scroll">
                        <div className="flex relative gap-[1.5%] overflow-hidden aspect-[2.5] fadeup tablet:flex tablet:w-[400vw] tablet:ml-[5%] tablet:aspect-auto tablet:overflow-visible tablet:mb-[5vw] tablet:gap-[3vw] mobile:gap-[1.5%]">
                            {services.map((service, index) => (
                                <div key={index} className="stripe group tablet:w-full tablet:h-[50vh] tablet:p-[4vw]">
                                    <Image fill alt={service.title} src={service.img} loading="lazy" quality={90} />
                                    <div className="stripe-label backdrop-blur-sm px-[2vw] py-[1vw] bg-white/40 rounded-xl overflow-hidden w-fit duration-500 ease-in-out transition-all tablet:py-[2vw] tablet:px-[3vw]">
                                        <p className="text-[1.25vw] font-head text-white uppercase whitespace-nowrap mobile:text-[4vw] tablet:text-[3vw]">
                                            {service.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}