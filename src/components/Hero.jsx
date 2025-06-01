import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import { heroVideo , smallHeroVideo } from '../utils'
const Hero = () => {
  const [vidowSrc, setvidowSrc] = useState(window.innerWidth < 768 ? smallHeroVideo :heroVideo)
useEffect(() => {
  const handleResize = () => {
    setvidowSrc(window.innerWidth < 768 ? smallHeroVideo : heroVideo);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
  useGSAP(() => {
   gsap.to('.hero-title', {
      y: 0,
      opacity: 1,
     delay: 2,
    })
    gsap.to('#cta', {
      y: -50,
      opacity: 1,
      delay: 2,
    
    })
  }, [])
  return (
    <section className='nav-height w-full  relative'>
    <div className='flex-center flex-col h-5/6 w-full  '>
      <p className='hero-title'>iphone 15 Pro</p>
      <div className="w-9/12 md:w-10/12">
        <video autoPlay muted playsInline={true} key={vidowSrc} className='pointer-events-none' >
          <source src={vidowSrc} type='video/mp4' />
        </video>
      </div>
    </div>
    <div id='cta' className='flex flex-col translate-y-20 opacity-0 items-center'>
    <a href="#highlights" className='btn'>Buy</a>
    <p className='font-normal text-xl'>From $199/month or $999</p>
    </div>
    </section>
  )
}

export default Hero
