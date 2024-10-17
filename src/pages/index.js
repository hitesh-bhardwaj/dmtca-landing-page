import About from "@/components/About";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import SlideShow from "@/components/SlideShow";
import Service from "@/components/Service";
import Project from "@/components/Project";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <SlideShow/>
      <Service />
      <Works/>
      <Project/>
    </>
  )
}