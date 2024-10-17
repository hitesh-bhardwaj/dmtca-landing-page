import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <>
    <section className='py-[10%] bg-[#E0D4C6]' id='features'>
      <div className='container-lg'>
        <h2 className='title-2 mb-[2vw]'>
          Key Features
        </h2>
        <p className='w-[40%]'>
        Experience paradise on earth at Lumiere Haven, where opulent homes and serene surroundings create an idyllic lifestyle.
        </p>
        <div className='w-full flex justify-between '>
          <div className='w-[27vw] h-full flex flex-col gap-[3vw] mt-[10vw]'>
            <div>

            <h4 className='uppercase text-[1.4vw] mb-[1vw]'>Entrance lobby</h4>
            <div className='bg-black/40 w-full h-[1px]'></div>
            </div>
            <div>

            <h4 className='uppercase text-[1.4vw] mb-[1vw]'>FEATURE STAIRCASE</h4>
            <div className='bg-black/40 w-full h-[1px]'></div>
            </div>
            <div>

            <h4 className='uppercase text-[1.4vw] mb-[1vw]'>PRIVATE MASTER LIVING ROOM</h4>
            <div className='bg-black/40 w-full h-[1px]'></div>
            </div>
            <div>

            <h4 className='uppercase text-[1.4vw] mb-[1vw]'>vPRIVATE STUDY / CIGAR BAR</h4>
            <div className='bg-black/40 w-full h-[1px]'></div>
            </div>
            <div>

            <h4 className='uppercase text-[1.4vw] mb-[1vw]'>WATER PAVILION</h4>
            <div className='bg-black/40 w-full h-[1px]'></div>
            </div>


          </div>
          <div className='w-[30vw] h-[40vw] relative mt-[5vw]'>

          <Image src="/assets/entrance-img.png" alt='entrance-img' fill/>
          </div>
          <div className='w-[27vw] h-full flex flex-col gap-[3vw] mt-[10vw]'>
            <div>

            <h4 className='uppercase text-[1.4vw] mb-[1vw]'>Entrance lobby</h4>
            <div className='bg-black/40 w-full h-[1px]'></div>
            </div>
            <div>

            <h4 className='uppercase text-[1.4vw] mb-[1vw]'>FEATURE STAIRCASE</h4>
            <div className='bg-black/40 w-full h-[1px]'></div>
            </div>
            <div>

            <h4 className='uppercase text-[1.4vw] mb-[1vw]'>PRIVATE MASTER LIVING ROOM</h4>
            <div className='bg-black/40 w-full h-[1px]'></div>
            </div>
            <div>

            <h4 className='uppercase text-[1.4vw] mb-[1vw]'>vPRIVATE STUDY / CIGAR BAR</h4>
            <div className='bg-black/40 w-full h-[1px]'></div>
            </div>
            <div>

            <h4 className='uppercase text-[1.4vw] mb-[1vw]'>WATER PAVILION</h4>
            <div className='bg-black/40 w-full h-[1px]'></div>
            </div>


          </div>
        </div>
      </div>

    </section>
      
    </>
  )
}

export default Features
