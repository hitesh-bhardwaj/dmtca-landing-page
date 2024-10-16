import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="w-full h-full">
        <div className="w-screen h-[200vh] relative overflow-hidden bg-gray-500">
          <Image
            quality={100}
            data-scroll data-scroll-speed="-0.5"
            src="/Images/hero-image.png"
            alt="Hero Image"
            fill
            className="object-cover w-full h-full object-top"
          />
          <div className="relative z-10">
            <h1 className="text-white text-[12vw] leading-none mt-[40%]">Live In Grandeur</h1>
            <h1 className="text-white font-head text-[12vw] leading-none">Live In Grandeur</h1>
            <h1 className="text-white font-head text-[12vw] font-medium leading-none">Live In Grandeur</h1>
          </div>
          
        </div>
        <div className="w-screen h-screen bg-red-500">

        </div>
      </section>
    </>
  )
}