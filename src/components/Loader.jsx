import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const Loader = () => {
  useGSAP(()=>{
    gsap.from(".loader-text",{
      yPercent:-100,
      duration:1
    })
  gsap.to("")
  }
  )
  return (
    <>
    <section className='w-screen h-screen fixed bg-white z-[9999]' id='loader'>
      <div className='w-full h-full flex justify-center items-center'>
        <p className='text-[7vw] font-bold text-head overflow-hidden'>
          <span className='loader-text block'>53 west 53
            </span></p>
      </div>
        
    </section>
      
    </>
  )
}

export default Loader
