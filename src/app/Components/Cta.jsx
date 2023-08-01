

"use client"
import React from 'react'
import { useRef, useLayoutEffect ,useEffect} from 'react'
import  gsap  from 'gsap'

const useIsomorphicLayoutEffect = typeof window !== "undefined" 
? useLayoutEffect 
: useEffect;


const Cta = () => {

  const ref = useRef();
  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    const tl =gsap.timeline()
    tl.from(
      element.querySelector(".image"),
      {
        opacity: 0.3,
       duration:2,
      height:"1rem",
      rotateY:100
      }
    );
    tl.from(
      element.querySelector(".text"),
      {
        opacity: 0,
       duration:2,
       y:100,
      
      }
    );
   
    }, []);
  return (
   
 
  <div ref={ref} >
      <div className="image my-2 relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://cdn.pixabay.com/photo/2021/12/28/01/07/website-6898411_1280.png')] h-96">
        <div className=" absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden  bg-fixed">
          <div className="flex h-full items-center justify-center">
         
            <div className="text px-6 text-center md:px-12">
              <h2 className="mb-12 text-5xl font-bold leading-tight tracking-tight">
                Are you ready <br />
                <span>for an Web adventure</span>
              </h2>
            </div>

          </div>
        </div>
      </div>
      </div>
   
 
  
  )
}

export default Cta
