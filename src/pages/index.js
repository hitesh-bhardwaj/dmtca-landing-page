import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Works from "@/components/Works";
import SlideShow from "@/components/SlideShow";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <SlideShow/>
      <Services/>
      <Works/>
    </>
  )
}