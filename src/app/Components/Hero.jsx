"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import { useRef, useLayoutEffect, useEffect } from 'react'
import {BsAwardFill} from 'react-icons/bs'




const useIsomorphicLayoutEffect = typeof window !== "undefined"
  ? useLayoutEffect
  : useEffect;

const Hero = () => {

  const router = useRouter()
  const app = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();
    let ctx = gsap.context(() => {
      tl.from(".logo, .logo1, .logo2", {
        y: -200,
        opacity: 0,
        duration: 1,
        stagger: 1,
       
      });

      tl.from(".image, .image1, .image2", {
        opacity: 0.5,
        height: "8rem",
        ease: "expo.inOut",
        duration: 1,
        stagger: .5

      });
     
     

    }, app);

    return () => ctx.revert();
  }, []);


  return (

    <>
      <div ref={app} className="px-4 py-8 w-11/12 m-auto rounded-md bg-gray-900 shadow-lg  ">
        <div className="flex gap-8 sm:gap-0 sm:justify-around flex-col sm:flex-row">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="mb-4 ">
            
       <BsAwardFill className='logo text-white h-12 w-16'/>

            </div>
            <div className="max-w-xl  mb-6">

              <h2 className="logo max-w-lg mb-6 overflow-hidden font-sans text-3xl font-bold tracking-tight text-white  sm:text-4xl sm:leading-none">
            One of the Best Website Design and Development Agency in Canada
              </h2>

              <p className="logo text-sm text-white md:text-base whitespace-normal">
              We combine creativity, innovation, and industry best practices to deliver websites that set you apart from the competition.
              With our expertise in best website design practices, custom web solutions, and robust booking systems, we empower businesses to thrive in the digital landscape.
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
