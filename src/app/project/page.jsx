"use client"
import React, { useEffect, useRef } from 'react';
import { LocomotiveScrollProvider,useLocomotiveScroll} from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

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
    {
        image:"/images/13.jpg"
    },
    {
        image:"/images/14.jpg"
    },
    {
        image:"/images/15.jpg"
    },
    {
        image:"/images/16.jpg"
    },
    {
        image:"/images/17.jpg"
    },
    {
        image:"/images/18.jpg"
    },
    {
        image:"/images/7.jpg"
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

function AlternateColumnScroll() {
  const containerRef = useRef(null);



  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      containerRef={containerRef}
    >
      <main
        className="w-full relative px-12 flex justify-center bg-gray-900 text-black"
        data-scroll-container
        ref={containerRef}
      >
        <div className="relative z-10 flex pt-[10vh] pb-[15vh] mx-6 h-screen flex-col-reverse ">
          <Column num={1} />
        </div>
        <div
          className="relative z-10 flex pt-[5vh] pb-[15vh] mx-6 "
          data-scroll-section
        >
          <Column isCenter={true} num={2} />
        </div>
        <div className="relative z-10 flex pt-[5vh] pb-[15vh] mx-6  h-screen flex-col-reverse ">
          <Column num={3} />
        </div>
        <div
          className="relative z-10 flex pt-[5vh] pb-[15vh] mx-6 "
          data-scroll-section
        >
          <Column isCenter={true} num={5} />
        </div>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default AlternateColumnScroll;

function Column({ isCenter, num }) {
  const { scroll } = useLocomotiveScroll();
  const columnRef = useRef(null);

  useEffect(() => {
    if (scroll && !isCenter) {
      scroll.on('scroll', (obj) => {
        columnRef.current.style.transform = `translateY(${obj.scroll.y}px)`;
      });
    }

    return () => {};
  }, [scroll]);

  return (
    <div ref={columnRef}>
      <div className="relative block will-change-transform">
        {data.map((i, idx) => (
          <div className="m-0 relative z-10" key={idx}>
            <div className="relative overflow-hidden rounded-xl cursor-pointer mt-[8vh] mx-[1vw] ">
              <img
                className="w-full h-full"
                src={i.image}
              />
            </div>
            <p className="px-6 text-white">website</p>
          </div>
        ))}
      </div>
    </div>
  );
}