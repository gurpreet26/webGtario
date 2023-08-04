"use client"
import { useRef,useLayoutEffect,useEffect } from "react";
import  gsap  from "gsap";
import { Animation } from "gsap/gsap-core";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


const useIsomorphicLayoutEffect = typeof window !== "undefined"
  ? useLayoutEffect
  : useEffect;

const FadeIn = ({ children, vars })=>{
    const el = useRef();
    
    useIsomorphicLayoutEffect(() => {
      const ctx = gsap.context(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        Animation.current = gsap.from(el.current.children, { 
            opacity:0,
           
            stagger:0.5,
            ...vars,
            scrollTrigger: {
              trigger: el.current,
              start: "top 90%",
              end:"bottom 60%",
              scrub: 3,   
         
            }
        });
      });
      return () => ctx.revert();       
    }, []);
    return <span className="overflow-hidden" ref={el}>{children}</span>;
  }
  

  export default FadeIn