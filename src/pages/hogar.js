import Footer from "@/components/Footer";
import { paraAnim, lineAnim, fadeUp } from "@/components/gsapAnimations";
import Bringing from "@/components/index2Content/Bringing";
import Gallery from "@/components/index2Content/Gallery";
import Project from "@/components/index2Content/Project";
import ProjectHoverAnimation from "@/components/index2Content/ProjectHover";
import Roi from "@/components/index2Content/Roi";
import Service from "@/components/index2Content/Service";
import ShowCase from "@/components/index2Content/ShowCase";
import Works from "@/components/index2Content/Works";
import Loader from "@/components/Loader";
import dynamic from "next/dynamic";

const DynamicAbout = dynamic(() => import('@/components/index2Content/About'));
const SlideShow = dynamic(() => import('@/components/index2Content/SlideShow'));
const Faq = dynamic(() => import('@/components/index2Content/Faq'));
const Highlights = dynamic(() => import('@/components/index2Content/Highlights'));
const Hero = dynamic(() => import('@/components/index2Content/Hero', { ssr: false }));

export default function HomePage() {

  paraAnim();
  lineAnim();
  fadeUp();

  return (
    <>
      <Loader />
      <Hero />
      <DynamicAbout />
      <SlideShow />
      <Service />
      <Works />
      <Project />
      <ShowCase />
      <Gallery />
      <Bringing />
      <ProjectHoverAnimation />
      <Faq />
      <Highlights />
      <Roi />
      <Footer />
    </>
  );
}
