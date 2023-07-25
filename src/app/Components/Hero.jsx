"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import { useRef ,useLayoutEffect,useEffect } from 'react'




const useIsomorphicLayoutEffect = typeof window !== "undefined" 
  ? useLayoutEffect 
  : useEffect;

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  const router = useRouter()
  const app = useRef();

  useIsomorphicLayoutEffect(() => {
    let tl = gsap.timeline();
    let ctx = gsap.context(() => {
    tl.from(".logo, .logo1, .logo2",{
           y:-200,
           opacity:0.5,
           duration:1.5,
           stagger:.1,
           delay:0.4
          });
          
          tl.from(".image, .image1, .image2",{
            opacity:0.5,
            height: "18rem",
  ease: "expo.inOut",
  duration: 2,
       
           });
      
  
      
    }, app);
    
    return () => ctx.revert();
  }, []);


  return (

    <>
    <div ref={app} className="px-4 py-8  bg-gray-900 shadow-lg  ">
      <div className="flex gap-8 sm:gap-0 sm:justify-around flex-col sm:flex-row">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
  
            <svg className="logo text-white w-7 h-7" viewBox="0 0 24 24">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points=" 8,5 8,1 16,1 16,5"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="9,15 1,15 1,5 23,5 23,15 15,15"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="22,18 22,23 2,23 2,18"
                strokeLinejoin="round"
              />
              <rect
                x="9"
                y="13"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                width="6"
                height="4"
                strokeLinejoin="round"
              />
            </svg>
         
          </div>
          <div className="max-w-xl mb-6">
 
            <h2 className="logo max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white  sm:text-4xl sm:leading-none">
              Let us handle
              <br className="logo hidden md:block" />
              your next{' '}
              <span className="logo inline-block text-deep-purple-accent-400">
                destination
              </span>
            </h2>
         
            <p className="logo text-base text-white md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
         
          </div>
      
          <div>
          <button className="logo inline-flex items-center font-semibold transition-colors duration-200 text-white bg-blue-500 p-2.5 hover:text-blue-500 hover:bg-white rounded-md"
           type="button" onClick={() => router.push('/service')}>
      Learn More
      <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
    </button>
         
          </div>
       
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
            
          <div className="flex flex-col items-end px-3">
     
            <img
              className="image object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
         
     
            <img
              className="image1 object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
         
          </div>
     
          <div className="px-3">
            <img
              className="image2 object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt=""
            />
          </div>
       
        </div>
      </div>
    </div>


    {/* video section */}
 
    </>



  
  )
}

export default Hero
