import AnimatedTitle from "./AnimatedTitle.jsx";
import mail from "/images/email.png";
import location from "/images/location.png";
import github from "/images/github.png";
import useScrollReveal from "./ScrollReveal.jsx";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const About = () => {

  useScrollReveal(true);

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: '#clip',
            start: 'center center',
            end: '+=600 center',
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
        }
    })
    
   
    clipAnimation.to('.overlay-bg', {
      scale: 10,
      borderRadius: 0,
      ease: 'power1.inOut'
    })
    .to('h2', {
      opacity: 1,
      duration: 1
    }, "<0.3");
})
  

  return (
    <div className={`about-section flex flex-col transition-opacity w-screen min-h-screen bg-black `}>
      <div className="flex flex-col gap-9 text-white">
        <AnimatedTitle title="About Me" containerClass="text-copper-300 " />
        
      <div className="flex flex-wrap w-full m-2 gap-65">  
        <div className="bg-copper-300 border-2 shadow-2xl shadow-copper-300 border-amber-50/20  w-1/2 p-9 rounded-2xl  scroll-fade-left">
          <h2 className="hero-heading text-white text-8xl">Pijus Bilinskas</h2>
          <div className="flex flex-row items-center">
            <img src={mail} alt="email logo" className="size-8 " />
            <p className="font-robert-regular text-xl ml-2">pijus.bilins@gmail.com</p>
          </div>

          <div className="flex flex-row items-center">
            <img src={location} alt="location logo" className="size-8" />
            <p className="font-robert-regular text-xl ml-2">Lithuania Utena/Vilnius</p>
          </div>

          <div className="flex flex-row items-center">
            <img src={github} alt="github logo" className="size-8" />
            <p className="ffont-robert-regular text-xl ml-2">https://github.com/Pijus-Bilinskas</p>
          </div>
        </div>

        <div className="w-1/2 ml-auto p-9 bg-copper-300 shadow-2xl shadow-copper-300 border-2 border-amber-50/20 rounded-2xl scroll-fade-right">
          <h2 className="hero-heading text-white text-8xl">About me</h2>
          <p className="font-robert-regular text-xl mr-3">I'm a motivated and fast-learning individual eager to gain hands-on experience and contribute to a team. I'm currently seeking an opportunity where I can apply and grow my skills in a real-world environment. I’m open to starting on a volunteer or trial basis to demonstrate my commitment, work ethic, and the value I can bring. I’m excited to learn, adapt, and prove myself as a reliable and enthusiastic team member.</p>
        </div>

        <div className="w-1/2 p-9 bg-copper-300 shadow-2xl shadow-copper-300 border-2 border-amber-50/20 rounded-2xl scroll-fade-left">
          <h2 className="hero-heading text-white text-8xl">Skills</h2>
          <p className="font-robert-medium  text-base md:text-2xl">Programming Languages: JavaScript, HTML/CSS</p>
          <p className="font-robert-medium   text-base md:text-2xl">Frontend Development: React.js, Next.js, React Native, TypeScript</p>
          <p className="font-robert-medium   text-base md:text-2xl">Backend Development: Node.js </p>
          <p className="font-robert-medium   text-base md:text-2xl">DataBases: MongoDB </p>
          <p className="font-robert-medium   text-base md:text-2xl">Bilingual: Lithuanian, English </p>
        </div>
      </div>


      <div id="clip" className="relative h-dvh w-screen overflow-hidden flex items-center justify-center">
  <div className="overlay-bg absolute inset-0 bg-copper-300 z-0 scale-0 rounded-full" />
  <h2 className="z-10 text-white text-9xl font-zentry opacity-0">Sick transition😎</h2>
</div>

        </div>

     
    </div>
  )
}



export default About;