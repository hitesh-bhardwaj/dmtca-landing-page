import React, { useState } from 'react'
import BlackButton from './Button/BlackButton'
import Image from 'next/image';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Setting the initial active option

  const handleMouseEnter = (index) => {
     setActiveIndex(index);
  };

  const optionsData = [
     {
        main: "Blonkisoaz",
        sub: "Omuke trughte a otufta",
        icon: "fas fa-walking",
        background: "/images/service-image-1.png"
     },
     {
        main: "Oretemauw",
        sub: "Omuke trughte a otufta",
        icon: "fas fa-snowflake",
        background: "/images/service-image-2.png"
     },
     {
        main: "Iteresuselle",
        sub: "Omuke trughte a otufta",
        icon: "fas fa-tree",
        background: "/images/service-image-3.png"
     },
     {
        main: "Idiefe",
        sub: "Omuke trughte a otufta",
        icon: "fas fa-tint",
        background: "/images/service-image-4.png"
     },
     {
        main: "Inatethi",
        sub: "Omuke trughte a otufta",
        icon: "fas fa-sun",
        background: "/images/service-image-5.png"
     }
  ];
  return (
    <>
    <section className='' id='services'>
        <div className='container-lg flex flex-col py-[10%] gap-[7vw]'>
          <div className='flex gap-[1vw]'>
            <BlackButton link={"#"} btnText={"Download Brochure"}/>
            <BlackButton link={"#"} btnText={"Download Floor Plan"}/>
            <BlackButton link={"#"} btnText={"Download Payment Plan"}/>
            <BlackButton link={"#"} btnText={"Download Master Plan"}/>
            <BlackButton link={"#"} btnText={"Download Site Plan"}/>

          </div>
          <div className="options w-full">
         {optionsData.map((option, index) => (
            <div
               key={index}
               className={`option ${index === activeIndex ? 'active' : ''} relative`}
               style={{ '--optionBackground': `url(${option.background})` }}
               onMouseEnter={() => handleMouseEnter(index)}
            >
              <Image src={option.background} alt='service-image' fill className={` ${index===activeIndex?"object-cover":"object-contain"}`}/>
               <div className="shadow"></div>
               <div className="label">
                
                  <div className="info">
                     <div className="main uppercase tracking-wide">{option.main}</div>
                     {/* <div className="sub">{option.sub}</div> */}
                  </div>
               </div>
            </div>
         ))}
         {/* <a href="https://unsplash.com/s/photos/nature" target="_blank" rel="noopener noreferrer" className="credit">Photos from Unsplash</a> */}
      </div>

        </div>

    </section>
      
    </>
  )
}

export default Services
