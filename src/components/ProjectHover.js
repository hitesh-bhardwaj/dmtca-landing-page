import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ProjectHoverAnimation = () => {
    const projectsRef = useRef(null);
    const previewRef = useRef(null);
    const previewImgRef = useRef(null);
    const isInsideRef = useRef(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const bgPositions = {
        p1: '0 0',
        p2: '0 50%',
        p3: '0 100%',
    };

    useEffect(() => {

        const projects = projectsRef.current;
        const preview = previewRef.current;
        const previewImg = previewImgRef.current;

        const handlers = new Map();

        const moveStuff = (e) => {
            const mouseInside = isMouseInsideContainer(e);

            if (mouseInside !== isInsideRef.current) {
                isInsideRef.current = mouseInside;
                if (isInsideRef.current) {
                    gsap.to(preview, { duration: 0.3, scale: 1 });
                } else {
                    gsap.to(preview, { duration: 0.3, scale: 0 });
                }
            }
        };

        const moveProject = (e) => {
            const previewRect = preview.getBoundingClientRect();
            const offsetX = previewRect.width / 2;
            const offsetY = previewRect.height / 2;
            preview.style.left = e.pageX - offsetX + 'px';
            preview.style.top = e.pageY - offsetY + 'px';
        };

        const moveProjectImg = (projectId) => {
            gsap.to(previewImg, {
                duration: 0.8,
                backgroundPosition: bgPositions[projectId] || '0 0',
            });
        };

        // Updated function using e.clientX and e.clientY
        const isMouseInsideContainer = (e) => {
            const containerRect = projects.getBoundingClientRect();
            return (
                e.clientX >= containerRect.left &&
                e.clientX <= containerRect.right &&
                e.clientY >= containerRect.top &&
                e.clientY <= containerRect.bottom
            );
        };

        const handleMouseMove = (e) => {
            moveStuff(e);
        };

        window.addEventListener('mousemove', handleMouseMove);

        const projectElements = Array.from(projects.children);

        projectElements.forEach((project) => {
            const projectId = project.id;

            const handleProjectMouseMove = (e) => {
                moveProject(e);
                moveProjectImg(projectId);
            };

            // Store the handler in the Map
            handlers.set(project, handleProjectMouseMove);

            project.addEventListener('mousemove', handleProjectMouseMove);
        });

        // Cleanup function
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            projectElements.forEach((project) => {
                const handler = handlers.get(project);
                if (handler) {
                    project.removeEventListener('mousemove', handler);
                }
            });
        };
    }, [bgPositions]);

    return (
        <>
            <section className="py-[10%] bg-[#161616]">
                <div className="absolute  w-[20vw] h-[13vw] aspect-3/2 overflow-hidden pointer-events-none origin-center scale-0 z-[2]" ref={previewRef}>
                    <div className="bg-[url('/assets/move-img.png')] bg-no-repeat bg-cover bg-left-top pointer-events-none w-full h-full" ref={previewImgRef}></div>
                </div>
                <div className="container-lg flex items-center justify-center">
                    <div className="w-[80%] flex flex-col gap-[3vw]" ref={projectsRef}>

                        {/* First Project */}
                        <div className="text-center" id="p1">
                            <p className="uppercase text-head text-white text-[5vw] mb-[1vw]">
                                25+ Years in Business
                            </p>
                            <span className="w-full block h-[1px]  bg-white"></span>
                        </div>

                        {/* Second Project */}
                        <div className="text-center" id="p2">
                            <p className="uppercase text-head text-white text-[5vw] mb-[1vw]">
                                50000+ Housing Projects
                            </p>
                            <span className="w-full block h-[1px]  bg-white"></span>
                        </div>

                        {/* Third Project */}
                        <div className="text-center" id="p3">
                            <p className="uppercase text-head text-white text-[5vw] mb-[1vw]">
                                20+ Luxury Projects
                            </p>
                            <span className="w-full block h-[1px]  bg-white"></span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectHoverAnimation;