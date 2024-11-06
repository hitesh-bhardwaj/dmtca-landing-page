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
import Bringing from "@/components/Bringing";


const DynamicAbout = dynamic(() => import('@/components/About'))
const SlideShow = dynamic(()=>import('@/components/SlideShow'))
// const Bringing = dynamic(()=>import('@/components/Bringing'),{ssr:false})
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
     
        <Bringing />
      
      
      <ProjectHover />
      <Faq/>
      <Highlights/>
      <Roi/>
      <Footer />
    </main> 
    </>
  )
}