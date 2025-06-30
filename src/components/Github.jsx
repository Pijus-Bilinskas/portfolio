import { useRef, useState } from 'react'
import AnimatedTitle from './AnimatedTitle'


const BentoTilt = ({ children, className = '' }) => {
  const [transformStyle, setTransformStyle] = useState("")
  const itemsRef = useRef()

  const handleMouseMove = (e) => {
    if(!itemsRef.current) return

    const {left, top, width, height} = itemsRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 8;
    const tiltY = (relativeX - 0.5) * -8;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`

    setTransformStyle(newTransform)
  }
  const handleMouseLeave = () => {
    setTransformStyle('')
  }

  return (
    <div className={className} ref={itemsRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform: transformStyle }}>
      {children}
    </div>
  )
}

const BentoCard = ({src, title, description, button, buttonLink}) => {
  return(
    <div className='relative size-full'>
        <video 
        src={src}
        loop
        muted
        autoPlay
        className='absolute left-0 top-0 size-full object-cover'
        />
        <div className='relative z-10 flex size-full gap-6 flex-col justify-between p-5 text-blue-50'>
          <div>
            <h1 className='bento-title'>{title}</h1>
            {description && (
              <p className='font-robert-regular mt-3 max-w-64 text-xl md:text-base'>{description}</p>
            )}
          </div>
            {button && (
              <a href={buttonLink} target='_blank' rel='noopener noreferrer'>
                <button className='bg-black/70 text-white font-robert-medium w-full text-xl px-5 py-1.5 rounded mt-auto hover:bg-black/100'>{button}</button>
              </a>
            )}
        </div>

    </div>
  )
}



const Github = () => {
  return (
    <section className='bg-white w-[80%] pb-52 gap-8'>
      <AnimatedTitle title="My Github <br /> and vercel projects" containerClass="text-black pt-15" />

      <div className='container mx-auto px-3 md:px-10'>
          <div className='px-5 py-32'>
            <p className='font-circular-web text-4xl text-blue-600'>Frontend <section></section></p>
            <p className='max-w-md font-circular-web text-xl text-blue-500 opacity-50'>These are frontend projects the ones that have a github button are live on vercel others are not, also dont pay attenttion to the videos in the cards, they are just placeholders. plus its vibey.</p>
          </div>
      </div>
      {/* Bento frontend */}
      <BentoTilt className='py-5'>
      <a href="https://awwards-pink.vercel.app/" target='_blank' rel='noopener noreferrer'>
        <BentoCard
        src="videos/github-1.mp4"
        title={<>awwwards</>}
        description="Its a ~65% remake of a award winning website, its a react vite build using tailwind, gsap."
        button="Github"
        buttonLink="https://github.com/Pijus-Bilinskas/awwards"
        />
      </a>
      </BentoTilt>

      <div className='grid h-[130vh] grid-cols-2 grid-rows-2 gap-8'>
            <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
            <a href="https://github.com/Pijus-Bilinskas/Reddit-inspired-frontend" target='_blank' rel='noopener noreferrer'>
                <BentoCard
                src="videos/github-2.mp4"
                title={<>Reddit-inspired-frontend</>}
                description="This is my first fullstack project. It was my way of learning react. The file structure is horrible, but considering it was my first one i think its aight"
                />
            </a>
            </BentoTilt>

            <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
            <a href="https://github.com/Pijus-Bilinskas/React-Frontend-quick-project" target='_blank' rel='noopener noreferrer'>
                <BentoCard
                src='videos/github-3.mp4'
                title={<>React-quick-project</>}
                description="This was a quick css figma design copy. tried a css structure that was new to me at the time."
                />
            </a>
            </BentoTilt>

            <BentoTilt className='bento-tilt_1 me-40 row-span-1 md:col-span-1 md:ms-0 md:me-0'>
              <a href="https://l-ecommerce.vercel.app/" target='_blank' rel='noopener noreferrer'>
                <BentoCard
                src="videos/github-5.mp4"
                title={<>Simple Ecomerce</>}
                description="This is a simple next.js eccomerce website integrated with strife to complete payments for the products"
                button="Github"
                buttonLink="https://github.com/Pijus-Bilinskas/LEcommerce"
                />
              </a>
            </BentoTilt>
            

          </div>

          <BentoTilt className='py-5'>
          <a href="https://mini-games-beryl-iota.vercel.app/" target='_blank' rel='noopener noreferrer'>
          <BentoCard
          src="videos/github-4.mp4"
          title={<>Mini Games</>}
          description="Here i tried to make some simple games using react hooks."
          button="Github"
          buttonLink="https://github.com/Pijus-Bilinskas/mini-games"
          />
          </a>
          </BentoTilt>

          <div className='grid h-[130vh] grid-cols-2 grid-rows-2 gap-8'>
               <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
            <a href="https://book-store-taupe-delta.vercel.app/" target='_blank' rel='noopener noreferrer'>
                <BentoCard
                src="videos/github-5.mp4"
                title={<>Book store/ecommerce</>}
                button="Github"
                buttonLink="https://github.com/Pijus-Bilinskas/book-store"
                description="Here you can find a Ecommerce made using next.js. I've used typescript for type safety and used Appwrite as backend."
                />
            </a>
            </BentoTilt>

            <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
            <a href="https://book-store-admin-dashboard.vercel.app/" target='_blank' rel='noopener noreferrer'>
                <BentoCard
                src='videos/github-2.mp4'
                title={<>Book store/ecommerce admin dashboard</>}
                button="Github"
                buttonLink="https://github.com/Pijus-Bilinskas/book-store-admin-dashboard"
                description="This was made using next.js and typescript for type safety. Appwrite is the backend of choice for this."
                />
            </a>
            </BentoTilt>

            <BentoTilt className='bento-tilt_1 me-40 row-span-1 md:col-span-1 md:ms-0 md:me-0'>
                <a href="https://gamersupps-landing-page.vercel.app/" target='_blank' rel='noopener noreferrer'>
                <BentoCard
                src='videos/github-1.mp4'
                title={<>Gamer supps landing page</>}
                button="Github"
                buttonLink="https://github.com/Pijus-Bilinskas/gamersupps-landing-page"
                description=" created using next.js used tailwind css for styling also used shadcn for carousel components."
                />
            </a>
            </BentoTilt>


            <BentoTilt className='bento-tilt_1 me-40 row-span-1 md:col-span-2 md:ms-0 md:me-0'>
                <div className='flex size-full flex-col justify-between bg-orange-300 p-5'>
                    <h1 className='bento-title max-w-64 text-black'>More coming soon...</h1>
                </div>
            </BentoTilt>
          </div>





          <div className='container mx-auto px-3 md:px-10'>
              <div className='px-5 py-32'>
                <p className='font-circular-web text-4xl text-blue-600'>Backend <section></section></p>
                <p className='max-w-md font-circular-web text-xl text-blue-500 opacity-50'>These are backend projects , dont pay attenttion to the videos in the cards, they are just placeholders. plus its vibey.</p>
              </div>
          </div>
          {/* Bento Backend */}
          <div className='grid h-[130vh] grid-cols-2 grid-rows-2 gap-8'>
            <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
            <a href="https://github.com/Pijus-Bilinskas/Reddit-inspired-backend" target='_blank' rel='noopener noreferrer'>
                <BentoCard
                src="videos/github-5.mp4"
                title={<>Reddit-inspired-backend</>}
                description="This is my first fullstack project. It was my way of learning node js and express. i Used MongoDb as database of choise, why MongoDB you ask, to be honest it was non-relational database and it seemed to fit what i was looking for. "
                />
            </a>
            </BentoTilt>

            <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
            <a href="https://github.com/Pijus-Bilinskas/SocialMedia" target='_blank' rel='noopener noreferrer'>
                <BentoCard
                src='videos/github-3.mp4'
                title={<>social media</>}
                description="This is a express node.js backend. MongoDB is the database of choice, because for a social media backend a non-relational database seemed better. Used ArcJet for RateLimiting. still working on setting up a storage for videos(maybe google storage)"
                />
            </a>
            </BentoTilt>

            <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
              <div className='flex size-full flex-col justify-between bg-purple-300 p-5'>
                    <h1 className='bento-title max-w-64 text-black'>More coming soon...</h1>
                </div>
            </BentoTilt>
          </div>

    </section>
  )
}
;
export default Github;