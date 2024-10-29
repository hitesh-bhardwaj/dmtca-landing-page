
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger,useGSAP)
const Loader = () => {
    useGSAP(()=>{
        const tl = gsap.timeline()
        tl
        .to(".loader-logo",{
            yPercent:100,
            duration:0.5,
            delay:1
        })
        .to("#loader",{
            yPercent:-100,
           duration:1,
            
        })
        .to("#loader",{
            onComplete:()=>{
            gsap.to("#loader",{
                pointerEvents:"none"
            })
            }
        })


    })

  return (
    <>
    <div className='w-screen h-screen bg-white fixed ' id='loader'>
        <div className='w-full h-full flex justify-center items-center'>
        <Link href="/" className="block fadeup w-[30vw] h-[10vw] relative overflow-hidden">
              <Image
                quality={100}
                src="/assets/53-west-logo.svg"
                alt="logo-img"
                priority={true}
                fill
                className="object-contain invert loader-logo"
              />
            </Link>

        </div>
    </div>
      
    </>
  )
}

export default Loader
