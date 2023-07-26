"use client"
import React from 'react'
import { Bebas_Neue } from 'next/font/google'
import { useRef, useLayoutEffect ,useEffect} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all';


const useIsomorphicLayoutEffect = typeof window !== "undefined" 
  ? useLayoutEffect 
  : useEffect;


  
const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] })
const VideoSection = () => {

  gsap.registerPlugin(ScrollTrigger);
  const videoRef = useRef(null)
  const textRef = useRef(null)
  const triggerRef = useRef(null)


  useIsomorphicLayoutEffect(() => {
    gsap.to(".h1",{
      transform:"translateX(-60%)",
      scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        start:"top 0",
        end:"top -20%",
        scrub:5,
       pin:true
      }
      
    })
    }, []);
  return (

<>
<div className='h-screen overflow-hidden w-screen bg-black  relative'>
<video ref={videoRef} className=" h-full w-screen object-cover" src="/earth.mp4" muted autoPlay loop></video>
  <div className='page1 w-full h-full whitespace-nowrap absolute bg-black select-none mix-blend-multiply top-0 '>
  <span className={bebas.className}>
<h1 className='h1  text-white ml-3 text-[20rem] w-screen tracking-[-0.02rem] font-bold'>UNREAL WORLD</h1>
</span>

  </div>

</div>
</>

//     <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
//     <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
//         <video className="min-w-full min-h-full absolute object-cover" src="/earth.mp4" 
//            muted
//           autoPlay 
//           loop></video>
//     </div>
//     <div className="video-content   z-10">
//     <div className="container mx-auto px-6 md:px-12 xl:px-32">
//       <div className="text-center">
//         <div className="block rounded-lg  px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20  ">
//           <h1 className="mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
//             The best offer on the market <br />
//             <span className="text-danger dark:text-danger-400">
//               for your business
//             </span>
//           </h1>
//           <a
//             className="mb-2 inline-block rounded bg-danger px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] bg-gray-900 transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] md:mr-2 md:mb-0"
//             data-te-ripple-init=""
//             data-te-ripple-color="light"
//             href="#!"
//             role="button"
//           >
//             Get started
//           </a>
      
//         </div>
//       </div>
//     </div>
//     </div>
// </section>

//  <div className=' bg-black h-96 overflow-y-hidden'>
//   <div ref={triggerRef} className="overflow-hidden relative w-full h-96">
//            <video ref={videoRef} className="w-full h-96 object-cover" src="/earth.mp4" muted autoPlay loop></video>
//            <div className='h-full absolute text-[40vw] ml-[-2vw] leading-[78vw] bg-black select-none mix-blend-multiply top-0 inset-x-0 whitespace-nowrap'>
//             <span className={bebas.className}>

//             <h1 ref={textRef} className='texth text-white tracking-[-2vw]'> REDRRR </h1>
//             </span>
           
//            </div>
//   </div>


// </div>   



  )
}

export default VideoSection
