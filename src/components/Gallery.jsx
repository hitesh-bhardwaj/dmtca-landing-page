/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const Gallery = () => {
  const features = [
    {
      name: 'ENTRANCE LOBBY',
      image: '/assets/features/1.png',
      icon: '/assets/features/icons/1.svg',
      color: '#E0D4C6',
    },
    {
      name: 'FEATURE STAIRCASE',
      image: '/assets/features/2.png',
      icon: '/assets/features/icons/2.svg',
      color: '#6D7783',
    },
    {
      name: 'PRIVATE MASTER LIVING ROOM',
      image: '/assets/features/3.png',
      icon: '/assets/features/icons/3.svg',
      color: '#B9A288',
    },
    {
      name: 'PRIVATE STUDY / CIGAR BAR',
      image: '/assets/features/4.png',
      icon: '/assets/features/icons/4.svg',
      color: '#B5B8AC',
    },
    {
      name: 'WATER PAVILION',
      image: '/assets/features/5.png',
      icon: '/assets/features/icons/5.svg',
      color: '#A2B0B1',
    },
    {
      name: 'SPA',
      image: '/assets/features/6.png',
      icon: '/assets/features/icons/6.svg',
      color: '#5F5F5F',
    },
    {
      name: 'SUNKEN SUN BED DECK',
      image: '/assets/features/7.png',
      icon: '/assets/features/icons/7.svg',
      color: '#7E98B1',
    },
    {
      name: 'BEACH LOUNGE & FIREPLACE',
      image: '/assets/features/8.png',
      icon: '/assets/features/icons/8.svg',
      color: '#E0D4C6',
    },
    {
      name: 'POOL & BEACH SHOWER',
      image: '/assets/features/9.png',
      icon: '/assets/features/icons/9.svg',
      color: '#A6A6A6',
    },
    {
      name: 'PRIVATE BEACH',
      image: '/assets/features/10.png',
      icon: '/assets/features/icons/10.svg',
      color: '#B5B4AB',
    },
  ];

  const previewContainerRef = useRef(null);
  const bodyRef = useRef(null);

  const handleImageHover = (feature) => {
    const { image: imgSrc, color } = feature;

    // Change the background color
    if (bodyRef.current) {
      gsap.to(bodyRef.current, { backgroundColor: color, duration: 0.5 });
    }

    // Get the preview container
    const previewContainer = previewContainerRef.current;

    // Get the current last image
    const currentLastImg = previewContainer.querySelector('img:last-child');

    // Animate the current last image out
    if (currentLastImg) {
      gsap.to(currentLastImg, { duration: 1, scale: 1.5, left: '50%' });
    }

    // Create the new image element
    const newImg = document.createElement('img');
    newImg.src = imgSrc;
    newImg.style.position = 'absolute';
    newImg.style.left = '-100%';
    newImg.style.width = '100%';
    newImg.style.height = '100%';
    newImg.style.objectFit = 'cover';

    // Append the new image to the preview container
    previewContainer.appendChild(newImg);

    // Animate the new image in
    gsap.to(newImg, { duration: 1, left: '0%' });
  };

  const renderHeadings = () => {

    return (
      <div className="w-full grid grid-cols-2 gap-x-[42%] justify-between">
        {features.map((feature, index) => (
          <div
            key={index}
            className="mb-[3vw] cursor-pointer"
            onMouseEnter={() => handleImageHover(feature)}
          >
            <div className="fadeup flex gap-[2vw] items-center mb-[0.5vw] px-[1vw]">
              <div className="h-[2.5vw] w-[2.5vw]">
                <div className="w-full h-full relative">
                  <Image  
                    quality={100}
                    loading="lazy"
                    src={feature.icon}
                    fill
                    alt={feature.name}
                  />
                </div>
              </div>
              <h4 className="font-head uppercase text-[1.25vw]">
                {feature.name}
              </h4>
            </div>
            <div className="bg-black/40 w-full h-[1px] lineDraw"></div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="py-[8%] bg-[#E0D4C6] relative z-10" ref={bodyRef} >
      <div className="container-lg">
        <h2 data-title-anim className="title-2 mb-[2vw]">Key Features</h2>
        <p data-para-anim className="w-[40%]">Experience paradise on earth at Lumiere Haven, where opulent homes and serene surroundings create an idyllic lifestyle.</p>
        <div className="w-full mt-[12vw] mb-[8vw] relative">
          {renderHeadings()}
          <div className="w-[35%] h-[45vw] z-10 overflow-hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fadeup">
            <div className="w-full h-full relative overflow-hidden" ref={previewContainerRef}>
              <Image src="/assets/features/1.png" alt="Image" fill quality={100} className="object-cover w-full h-full"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
