import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Service from "@/components/Service";
import Project from "@/components/Project";
import Footer from "@/components/Footer";
import ShowCase from "@/components/ShowCase";
import { paraAnim, lineAnim, fadeUp } from "@/components/gsapAnimations";
import Gallery from "@/components/Gallery";
import ProjectHover from "@/components/ProjectHover";
import dynamic from "next/dynamic";
import Roi from "@/components/Roi";


const DynamicAbout = dynamic(() => import('@/components/About'))
const SlideShow = dynamic(()=>import('@/components/SlideShow'),{ssr:false})
const Bringing = dynamic(()=>import('@/components/Bringing'),{ssr:false})
const Faq = dynamic(()=>import('@/components/Faq'))
const Highlights = dynamic(()=>import('@/components/Highlights'))

export default function Home() {
  paraAnim();
  lineAnim();
  fadeUp();


  return (
    <>
    {/* <Loader/> */}
    <main>    
      <Hero />
      <DynamicAbout />
      <SlideShow />
      <Service />
      <Works />
      <Project />
      <ShowCase />
      <Gallery />
      
      <div className="h-[125vw] mobile:h-full tablet:h-full bg-white">
        <Bringing />
      </div>
      
      <ProjectHover />
      <Faq/>
      <Highlights/>
      <Roi/>
      <Footer />
    </main> 
    </>
  )
}