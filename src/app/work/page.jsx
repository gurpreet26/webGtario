"use client"

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Head from 'next/head';


const data =[
    {
        image:"/images/1.jpg"
    },
    {
        image:"/images/2.jpg"
    },
    {
        image:"/images/3.jpg"
    },
    {
        image:"/images/4.jpg"
    },
    {
        image:"/images/5.jpg"
    },
    {
        image:"/images/6.jpg"
    },
    {
        image:"/images/7.jpg"
    },
    {
        image:"/images/8.jpg"
    },
    {
        image:"/images/9.jpg"
    },
    {
        image:"/images/10.jpg"
    },
    {
        image:"/images/11.jpg"
    },
    {
        image:"/images/12.jpg"
    },

    
]
const data1 =[
   
   
    {
        image:"/images/17.jpg"
    },
    {
        image:"/images/18.jpg"
    },
    {
        image:"/images/17.jpg"
    },
    {
        image:"/images/19.jpg"
    },
    {
        image:"/images/20.jpg"
    },
    {
        image:"/images/21.jpg"
    },
    {
        image:"/images/22.jpg"
    },
    {
        image:"/images/23.jpg"
    },
    {
        image:"/images/24.jpg"
    },
  
    
]

    gsap.registerPlugin(ScrollTrigger);



const ScrollTriggerDirectionalMovement = () => {
  useEffect(() => {
    document.scrollingElement.scrollTo(0, 0);
    handleScroll();
    return () => {};
  }, []);

  const handleScroll = () => {
    ScrollTrigger.defaults({
      scroller: '.scroller',
    });

    gsap.utils.toArray('section').forEach((section, index) => {
      const wrapper = section.querySelector('.wrapper');
      const [xStart, xEnd] =
        index % 2
          ? ['100%', (wrapper.scrollWidth - section.offsetWidth) * -1]
          : [wrapper.scrollWidth * -1, 0];
      gsap.fromTo(
        wrapper,
        { x: xStart },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
          },
        }
      );
    });
  };

  return (
    <div className="scroller h-screen overflow-auto text-[12vw] overflow-x-hidden bg-cream ">
     
      <section className="h-fit">
        <div className="wrapper flex md:text-[16vh] text-white font-medium overflow whitespace-nowrap">
          Keep smiling
        </div>
      </section>
      {data.map((el,index) => (
        <section key={index}>
          <div className="wrapper flex text-[16vh] font-medium  ">
            {data1.map((el2,index) => (
              
              <img
                key={index}
                className="h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer "
                src={el2.image}
              />
            
           
            ))}
          </div>
        </section>
      ))}
      <section className="h-fit">
        <div className="wrapper flex md:text-[16vh] text-white font-medium overflow whitespace-nowrap">
          because life is a beautiful thing
        </div>
      </section>
      {data1.map((el,index) => (
        <section key={index}>
          <div  className="wrapper flex text-[16vh] font-medium ">
            {data.map((el2,index) => (
              <img
                key={index}
                className="h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer "
                src={el2.image}
              />
            ))}
          </div>
        </section>
      ))}
 
    
    </div>
  );
};

export default ScrollTriggerDirectionalMovement;