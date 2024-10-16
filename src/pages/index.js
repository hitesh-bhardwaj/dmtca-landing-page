import About from "@/components/About";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import SlideShow from "@/components/SlideShow";
import Service from "@/components/Service";
import Project from "@/components/Project";
import Footer from "@/components/Footer";
import ShowCase from "@/components/ShowCase";
import Bringing from "@/components/Bringing";
import { titleAnim , paraAnim , lineAnim , fadeUp} from "@/components/gsapAnimations";
import Gallery from "@/components/Gallery";
import ProjectHover from "@/components/ProjectHover";

export default function Home() {
  paraAnim();
  lineAnim();
  titleAnim();
  fadeUp();
  
  return (
    <>
      <Hero />
      <About />
      <SlideShow />
      <Service />
      <Works/>
      <Project/>
      <ShowCase/>
      <Gallery />
      <Bringing/>
      <ProjectHover />
      <Footer/>
    </>
  )
}