import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { rightImg, watchImg } from '../utils/index.js'
import VideoCarousel from './VideoCarousel.jsx'
function Highlights() {
  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1, y: 0
    })
    gsap.to('.link', {
      opacity: 1, y: 0, stagger: 0.5, duration:1
    })
  })
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className="screen-max-width">
        <div className='md:flex mb-12 w-full items-end justify-between'>
          <h1 id='title' className='section-heading'>Get the highlights.</h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className='link'>
              Watch the film
              <img src={watchImg} alt="watchImg" className='ml-2' />
            </p>
            <p className='link'>
              Watch the event
              <img src={rightImg} alt="watchImg" className='ml-2' />
            </p>
          </div>
        </div>
        <VideoCarousel/>
      </div>

    </section>
  )
}

export default Highlights
