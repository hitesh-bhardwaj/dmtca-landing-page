import React, {  useEffect } from 'react'
import gsap from 'gsap'


function Cursor() {
    useEffect(()=>{
        const cursor = document.getElementById("cursor")
        const swipe = document.querySelectorAll(".swipe")
        const text = document.querySelector(".cursor-text")
        const onmousemove =(e)=>{
         const{clientX,clientY} = e
         gsap.to(cursor,{
            x:clientX,
            y:clientY
         })
        }
        const onmouseenter =(e)=>{
            const slide = e.target
            if(slide.classList.contains('swipe')){
                gsap.to(cursor,{scale:1,
                    duration:0.3,
                    ease:"power2.inout"
                })
                text.style.display='block'
            }else{
                gsap.to(cursor,{scale:1})
            }
        }
        const onmouseleave = (e)=>{
            gsap.to(cursor,{
                scale:0
            })
            text.style.display='none'
        }
        document.addEventListener("mousemove",onmousemove)
        swipe.forEach((swiper)=>{
            swiper.addEventListener("mouseenter",onmouseenter)
            swiper.addEventListener("mouseleave",onmouseleave)
        })
         
    },[])
  return (
    <>
    <div id='cursor' className='cursor fixed top-[-5%] left-[-3%] scale-0 h-[8vw] w-[8vw] rounded-full pointer-events-none z-[999] p-[10px] flex justify-center items-center bg-black'>
        <span className='cursor-text tracking-wider text-[2vw] font-josefin text-white' >Drag</span>
    </div>
    </>
  )
}

export default Cursor