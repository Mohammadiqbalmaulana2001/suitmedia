import React from 'react'
import Image from 'next/image'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function HomeDashboard({ imageUrl}) {
  return (
    <ParallaxProvider>
      <div className="relative h-screen overflow-hidden mt-[4.5rem] z-0" >
        <Parallax y={[-20, 20]} tagOuter="figure">
          <Image
            className="w-full h-full object-fill"
            src={imageUrl}
            alt="Banner Background"
            width={1920}
            height={1080}
          />
        </Parallax>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className='text-5xl'>Ideas</h1>
            <p>Where all great things begin</p>
          </div>
        </div>
      </div>
    </ParallaxProvider>

  )
}
