import React, { useEffect } from "react";
import gsap from "gsap";

const Experience = () => {
  useEffect(() => {
    const projects = document.querySelector(".projects");
    const preview = document.querySelector(".preview");
    const previewImg = document.querySelector(".preview-img img");

    let isInside = false;

    // Background positions
    const bgPositions = {
      p1: "0 0",
      p2: "0 25%",
      p3: "0 50%",
    };

    // Mapping project IDs to image sources
    const imgSources = {
      p1: "/assets/experience1.png",
      p2: "/assets/experience2.png",
      p3: "/assets/experience3.png",
    };

    const moveStuff = (e) => {
      const mouseInside = isMouseInsideContainer(e);
      if (mouseInside !== isInside) {
        isInside = mouseInside;
        if (isInside) {
          gsap.to(preview, {
            scale: 1,
            opacity: 1,
            duration: 0.3,  // Reduced duration for faster appearance
            ease: "power2.out",
          });
        } else {
          gsap.to(preview, {
            scale: 0,
            opacity: 0,
            duration: 0.3,  // Reduced duration for faster disappearance
            ease: "power2.out",
          });
        }
      }
    };

    const moveProject = (e) => {
      const previewRect = preview.getBoundingClientRect();
      const offsetX = previewRect.width / 2;
      const offsetY = previewRect.height / 2;

      preview.style.left = e.pageX - offsetX + "px";
      preview.style.top = e.pageY - offsetY + "px";
    };

    const moveProjectImg = (project) => {
      const projectId = project.id;
    
      // Create a new image element
      const newImg = document.createElement('img');
      newImg.src = imgSources[projectId] || "/assets/experience1.png";
      newImg.style.position = 'absolute';
      newImg.style.top = '0'; 
      newImg.style.left = '0'; 
      newImg.style.transition = 'opacity 0.3s ease'; 
      newImg.style.opacity = '0';
    
      // Append the new image to the container
     
      preview.appendChild(newImg);
    
      gsap.to(previewImg, {
        y: 200,
        duration: 0.3,
        onComplete: () => {
          // Fade in the new image
          gsap.to(newImg, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
            y:0,
          });
          
          // Reset the previous image position back
          gsap.to(previewImg, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        },
      });
    
      gsap.to(previewImg, {
        backgroundPosition: bgPositions[projectId] || "0 0",
        duration: 0.3,
      });
    };
    

    const isMouseInsideContainer = (e) => {
      const containerRect = projects.getBoundingClientRect();
      return (
        e.pageX >= containerRect.left &&
        e.pageX <= containerRect.right &&
        e.pageY >= containerRect.top &&
        e.pageY <= containerRect.bottom
      );
    };

    window.addEventListener("mousemove", moveStuff);

    Array.from(projects.children).forEach((project) => {
      project.addEventListener("mousemove", moveProject);
      project.addEventListener("mousemove", moveProjectImg.bind(null, project));
    });

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", moveStuff);
      Array.from(projects.children).forEach((project) => {
        project.removeEventListener("mousemove", moveProject);
        project.removeEventListener("mousemove", moveProjectImg.bind(null, project));
      });
    };
  }, []);

  return (
    <section className="experience" id="experience">
      <div className="container-lg w-screen h-screen flex flex-col items-center justify-center bg-[#161616]">
        <div className="gap-[5vw] flex flex-col projects">
          {/* Preview Image */}
          <div className="preview absolute w-[15vw] h-[10vw] overflow-hidden pointer-events-none origin-center z-2 rounded-[20px]">
            <div className="preview-img w-full h-full pointer-events-none object-cover">
              <img src="/assets/experience1.png" alt="Preview" style={{ opacity: 1, transition: "opacity 0.3s ease" }} />
            </div>
          </div>

          {/* First Project */}
          <div className="flex flex-col gap-[2vw] project" id="p1">
            <div className="flex items-center justify-center gap-[2vw] ">
              <p data-para-anim className="uppercase text-head text-white text-[4.15vw]">
                25+ Years in Business
              </p>
            </div>
            <span className="w-[70vw] h-[1px] rounded-full bg-white"></span>
          </div>

          {/* Second Project */}
          <div className="flex flex-col gap-[2vw] project" id="p2">
            <div className="flex items-center justify-center gap-[2vw] w-full">
              <p data-para-anim className="uppercase text-head text-white text-[4.15vw]">
                50000+ Housing
              </p>
              <div className="flex">
                <p data-para-anim className="uppercase text-head text-white text-[4.15vw]">
                  Projects
                </p>
              </div>
            </div>
            <span className="w-[70vw] h-[1px] rounded-full bg-white"></span>
          </div>

          {/* Third Project */}
          <div className="flex flex-col gap-[2vw] project" id="p3">
            <div className="flex items-center justify-center gap-[2vw]">
              <p data-para-anim className="uppercase text-head text-white text-[4.15vw]">
                20+
              </p>
              <div className="flex">
                <p data-para-anim className="uppercase text-head text-white text-[4.15vw]">
                  Luxury Projects
                </p>
              </div>
            </div>
            <span className="w-[70vw] h-[1px] rounded-full bg-white"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
