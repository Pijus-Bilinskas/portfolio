import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const useScrollReveal = (isVisible) => {
    useEffect(() => {
        if(!isVisible) return;

        const leftElems = gsap.utils.toArray('.scroll-fade-left');
        const rightElems = gsap.utils.toArray('.scroll-fade-right');


        leftElems.forEach((elem) => {
            gsap.fromTo(
              elem,
              { x: -200, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 2,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: elem,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          });
      
          rightElems.forEach((elem) => {
            gsap.fromTo(
              elem,
              { x: 200, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 2,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: elem,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          });
      
          //refreshes after new elements become visible
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 100);
        }, [isVisible]); 
      };
      
      export default useScrollReveal;