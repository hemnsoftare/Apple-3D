import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { rightImg, watchImg } from '../utils'
import Videocraseral from './Videocraseral'

const Highlight = () => {
  
  useGSAP(() => {
    gsap.to('#title', {
      y: 0,
      opacity: 1,
     
    })
    gsap.to('.link', {
      y: 0,
      opacity: 1,
     duration :1,
      stagger: 0.2,
    })
  }
  , [])
  return (
    <section id='highlights' className='w-screen overflow-hidden common-padding bg-zinc '>
      <div className='screen-max-width'>
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 id='title' className='section-heading'>Get the highlights.</h1>
          <div className="flex items-end flex-wrap gap-5">
            <p className="link">Watch the film
            <img src={watchImg} alt="" className='ml-2 ' /></p>
            <p className="link">
            Watch the event
            <img src={rightImg} alt="" className='ml-2 ' />
            </p>
          </div>
        </div>
        <Videocraseral />
      </div>
    </section>
  )
}

export default Highlight
