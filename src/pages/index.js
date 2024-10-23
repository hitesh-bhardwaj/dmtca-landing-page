import About from "@/components/About";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import SlideShow from "@/components/SlideShow";
import Service from "@/components/Service";
import Project from "@/components/Project";
import Footer from "@/components/Footer";
import ShowCase from "@/components/ShowCase";
import Bringing from "@/components/Bringing";
import { paraAnim, lineAnim, fadeUp } from "@/components/gsapAnimations";
import Gallery from "@/components/Gallery";
import ProjectHover from "@/components/ProjectHover";
import { Suspense } from "react";

export default function Home() {
  paraAnim();
  lineAnim();
  fadeUp();

  return (
    <>
      <Hero />
      <About />
      <Suspense fallback={<p>Loading</p>}>
        <SlideShow />
        <Service />
      </Suspense>
      <Works />
      <Project />
      <ShowCase />
      <Gallery />
      <Suspense fallback={<p>Loading</p>}>
        <Bringing />
        <ProjectHover />
      </Suspense>
      <Footer />
    </>
  )
}