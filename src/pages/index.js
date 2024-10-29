import Hero from "@/components/Hero";
import Works from "@/components/Works";
// import SlideShow from "@/components/SlideShow";
import Service from "@/components/Service";
import Project from "@/components/Project";
import Footer from "@/components/Footer";
import ShowCase from "@/components/ShowCase";
import Bringing from "@/components/Bringing";
import { paraAnim, lineAnim, fadeUp } from "@/components/gsapAnimations";
import Gallery from "@/components/Gallery";
import ProjectHover from "@/components/ProjectHover";
import dynamic from "next/dynamic";
// import Loader from "@/components/Loader";


const DynamicAbout = dynamic(() => import('@/components/About'), {
  // loading: () => <p>Loading...</p>,
  
})
const SlideShow = dynamic(()=>import('@/components/SlideShow'),{ssr:false})
const Bringing = dynamic(()=>import('@/components/Bringing'),{ssr:false})

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
      <Footer />
    </main>
    </>
  )
}