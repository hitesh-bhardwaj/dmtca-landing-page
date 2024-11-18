
import Footer from "@/components/Footer";
import { paraAnim, lineAnim, fadeUp } from "@/components/gsapAnimations";
import Bringing from "@/components/indexContent/Bringing";
import Gallery from "@/components/indexContent/Gallery";
import Hero from "@/components/indexContent/Hero";
import Project from "@/components/indexContent/Project";
import ProjectHoverAnimation from "@/components/indexContent/ProjectHover";
import Roi from "@/components/indexContent/Roi";
import Service from "@/components/indexContent/Service";
import ShowCase from "@/components/indexContent/ShowCase";
import Works from "@/components/indexContent/Works";
// import Loader from "@/components/Loader";
import dynamic from "next/dynamic";
import Loader from "../components/Loader";



const DynamicAbout = dynamic(() => import('@/components/indexContent/About'))
const SlideShow = dynamic(()=>import('@/components/indexContent/SlideShow'))
// const Bringing = dynamic(()=>import('@/components/Bringing'),{ssr:false})
const Faq = dynamic(()=>import('@/components/indexContent/Faq'))
const Highlights = dynamic(()=>import('@/components/indexContent/Highlights'))

export default function Home() {
  paraAnim();
  lineAnim();
  fadeUp();


  return (
    <>
    {/* <Loader/> */}
    <Loader/>
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
      
      
      <ProjectHoverAnimation/>
      <Faq/>
      <Highlights/>
      <Roi/>
      <Footer />
    </main> 
    </>
  )
}