"use client"
import React from 'react'
import { Bebas_Neue } from 'next/font/google'
import { useRef, useLayoutEffect ,useEffect} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import FadeIn from './FadeIn'


const useIsomorphicLayoutEffect = typeof window !== "undefined" 
  ? useLayoutEffect 
  : useEffect;


  
const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] })
const VideoSection = () => {

  // gsap.registerPlugin(ScrollTrigger);
  // const videoRef = useRef(null)



  // useIsomorphicLayoutEffect(() => {
  //   gsap.to(".h1",{
  //     transform:"translateX(-80%)",
  //     stagger: 1,
  //     scrollTrigger:{
  //       trigger:"h1",
        
  //       start:"top 0",
  //       end:"top 20%",
  //       scrub:2,
        
      
  //     }
      
  //   })
  //   }, []);
  return (

<>
<FadeIn vars={{transform:"translateX(100%)"}}>
<div className='page1 h-screen overflow-hidden w-screen bg-black  relative'>
<video className=" h-full w-screen object-cover" src="/earth.mp4" muted autoPlay loop></video>
  <div className='w-full h-full whitespace-nowrap absolute bg-black select-none mix-blend-multiply top-0 '>
  <span className={bebas.className}>
<h1 className='h1  text-white ml-3 text-[10rem]  md:text-[20rem] w-screen tracking-[-0.02rem] font-bold'>UNREAL WORLD</h1>
</span>

  </div>

</div>
</FadeIn>

</>

 



  )
}

export default VideoSection
