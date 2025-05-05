import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const Hero = ({ setShowContent }) => {
    const comp = useRef(null);
    const videoRef = useRef(null);
    const welcomeRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline({
                onComplete: () => setShowContent(true)
            });

            // Start the video
            t1.from(videoRef.current, {
                delay: 0.5,
                ease: "power2.inOut",
                duration: 1.2
            });

            // Fade in text elements
            t1.from(["#title-1", "#title-2", "#title-3"], {
                opacity: 0,
                y: "+=20",
                stagger: 0.3,
                duration: 0.5,
            });

            // Hold for a second, then fade out text
            t1.to(["#title-1", "#title-2", "#title-3"], {
                opacity: 0,
                y: "-=20",
                delay: 0.2,
                stagger: 0.3,
                duration: 0.5
            });

            // Fade out video
            t1.to(videoRef.current, {
                opacity: 0,
                duration: 1.5,
                ease: "power2.inOut"
            });

            // Fade in "Welcome" in the center
            t1.fromTo(
                welcomeRef.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
            );

        }, comp);

        return () => ctx.revert();
    }, [setShowContent]);

    return (
        <div ref={comp} className="relative h-dvh w-screen overflow-x-hidden bg-black">
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden">
                <video 
                    ref={videoRef}
                    src="/videos/bronze-black-circle.mp4"
                    autoPlay
                    muted
                    className="absolute left-0 top-0 size-full object-cover object-center"
                />
                
                <h1 id="title-3" className="hero-heading absolute bottom-5 right-5 z-40 text-copper-300 opacity-80">
                    Chill Dude
                </h1>

                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className="mt-24 px-5 sm:px-10"> 
                        <h1 id="title-1" className="hero-heading text-copper-300 opacity-80">Looking</h1>
                        <h1 id="title-2" className="hero-heading text-copper-300 opacity-90">for work</h1>
                    </div>    
                </div>
            </div>

            <div ref={welcomeRef} className="absolute bg-black inset-0 flex items-center justify-center opacity-0">
                <h1 className="hero-heading text-copper-300">Welcome.</h1>
            </div>
        </div>
    );
};

export default Hero;