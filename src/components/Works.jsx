import Image from 'next/image'
import React from 'react'

const Works = () => {
  return (
    <>
    <section id='works' >
        <div className='container-lg h-[120vh] bg-[#1C1B1A] py-[5%] '>
            <div className='w-full flex justify-center'>

            <h2 className='title-2 text-white w-[60%] text-center '>
            Indulge in Unmatched Elegance in Dubai’s Skyline

            </h2>
            </div>
            <div className='w-full h-full flex-col'>
                <div className='flex'>
                    <div className='w-[37vw] h-full flex flex-col gap-[2vw]'>
                        <div className='w-[40vw] h-[27vw] relative rounded-[2vw] overflow-hidden p-[2vw]'>
                            <Image src="/images/work-img-5.png" alt='work-img-5' fill/>
                            <div className='w-fit p-[0.5vw] px-[1vw] rounded-[0.8vw] bg-white/40 relative z-[3] text-[1.2vw] uppercase glassmorphism'>
                                Living room
                            </div>

                        </div>
                        <p>
                            

                        </p>

                    </div>
                    <div>

                    </div>

                </div>

            </div>


        </div>

    </section>
      
    </>
  )
}

export default Works
