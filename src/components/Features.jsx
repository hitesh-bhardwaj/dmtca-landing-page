import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState('entrance');
  const currentImageRef = useRef(null); // Reference to the current image
  const previousImageRef = useRef(null); // Reference to the previous image

  const features = [
    { name: 'ENTRANCE LOBBY', icon: '/assets/icons/entrance.svg', image: '/assets/entrance-img.png', key: 'entrance' },
    { name: 'FEATURE STAIRCASE', icon: '/assets/icons/staircase.svg', image: '/assets/privatepool-img.png', key: 'staircase' },
    { name: 'PRIVATE MASTER LIVING ROOM', icon: '/assets/icons/master.svg', image: '/assets/living-img.png', key: 'master' },
    { name: 'PRIVATE STUDY / CIGAR BAR', icon: '/assets/icons/study.svg', image: '/assets/privatebeach-img.png', key: 'study' },
    { name: 'WATER PAVILION', icon: '/assets/icons/water.svg', image: '/assets/water-img.png', key: 'water' },
    { name: 'SPA', icon: '/assets/icons/spa.svg', image: '/assets/spa-img.png', key: 'spa' },
    { name: 'SUNKEN SUN BED DECK', icon: '/assets/icons/sunken.svg', image: '/assets/sunbed-img.png', key: 'sunken' },
    { name: 'BEACH LOUNGE & FIREPLACE', icon: '/assets/icons/beach.svg', image: '/assets/firepit-img.png', key: 'beach' },
    { name: 'POOL & BEACH SHOWER', icon: '/assets/icons/pool.svg', image: '/assets/privatepool-img.png', key: 'pool' },
    { name: 'PRIVATE BEACH', icon: '/assets/icons/private-beach.svg', image: '/assets/privatebeach-img.png', key: 'private-beach' },
  ];

  // GSAP animations triggered on hover
  const handleHover = (newFeature) => {
    // Move the current image out (if any)
    // if (previousImageRef.current) {
    //   gsap.to(previousImageRef.current, {
    //     y: '-100%',
    //     opacity: 0,
    //     duration: 0.8,
    //     ease: 'power3.out',
    //   });
    // }

    setHoveredFeature(newFeature);

    // Move the new image in from the bottom
    if (currentImageRef.current) {
      gsap.fromTo(
        currentImageRef.current,
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
    }
  };

  return (
    <section className="py-[10%] bg-[#E0D4C6]" id="features">
      <div className="container-lg">
        <h2 className="title-2 mb-[2vw]">Key Features</h2>
        <p className="w-[40%]">
          Experience paradise on earth at Lumiere Haven, where opulent homes and serene surroundings create an idyllic lifestyle.
        </p>
        <div className="w-full flex justify-between">
          {/* Left feature list */}
          <div className="w-[27vw] h-full flex flex-col gap-[4vw] mt-[10vw] cursor-pointer">
            {features.slice(0, 5).map((feature) => (
              <div
                key={feature.key}
                onMouseEnter={() => handleHover(feature.key)}
              >
                <div className="flex gap-[1vw] items-center">
                  <div className="h-[2.5vw] w-[2.5vw]">
                    <div className="w-full h-full relative">
                      <Image src={feature.icon} fill alt={feature.name} />
                    </div>
                  </div>
                  <h4 className="uppercase text-[1.4vw] mb-[1vw]">{feature.name}</h4>
                </div>
                <div className="bg-black/40 w-full h-[1px]"></div>
              </div>
            ))}
          </div>

          {/* Center image */}
          <div className="w-[30vw] h-[40vw] relative mt-[5vw] z-10 overflow-hidden">
            <div className="w-full h-full relative">
              <div ref={previousImageRef} className="absolute inset-0">
                <Image
                  src={features.find((feature) => feature.key === hoveredFeature).image}
                  alt={hoveredFeature}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div ref={currentImageRef} className="absolute inset-0">
                <Image
                  src={features.find((feature) => feature.key === hoveredFeature).image}
                  alt={hoveredFeature}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Right feature list */}
          <div className="w-[27vw] h-full flex flex-col gap-[4vw] mt-[10vw] cursor-pointer">
            {features.slice(5).map((feature) => (
              <div
                key={feature.key}
                onMouseEnter={() => handleHover(feature.key)}
              >
                <div className="flex gap-[1vw] items-center">
                  <div className="h-[2.5vw] w-[2.5vw]">
                    <div className="w-full h-full relative">
                      <Image src={feature.icon} fill alt={feature.name} />
                    </div>
                  </div>
                  <h4 className="uppercase text-[1.4vw] mb-[1vw]">{feature.name}</h4>
                </div>
                <div className="bg-black/40 w-full h-[1px]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
