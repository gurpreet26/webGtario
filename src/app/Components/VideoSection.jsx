
import React from 'react'
import { Bebas_Neue } from 'next/font/google'
import FadeIn from './FadeIn'




  
const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] })
const VideoSection = () => {

 
  return (

<>
<FadeIn vars={{transform:"translateX(100%)" ,duration:3}}>
<div className='page1 hidden lg:block h-[24rem] overflow-hidden select-none w-screen bg-black  relative'>
<video className=" h-full w-screen object-cover select-none" src="./images/earth.mp4" muted autoPlay loop></video>
  <div className='w-full h-full  lg:whitespace-nowrap absolute bg-black select-none mix-blend-multiply top-0 '>
  <span className={bebas.className}>
<h1 className='h1  text-white ml-3 md:text-[17vw] w-screen tracking-[1rem] select-none font-bold'>WEB CREATIVE</h1>
</span>

  </div>

</div>
</FadeIn>

</>

 



  )
}

export default VideoSection
