"use client"
import { useRef,useLayoutEffect } from "react";
import  gsap  from "gsap";
import { Animation } from "gsap/gsap-core";

const FadeIn = ({ children, vars })=>{
    const el = useRef();
    
    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
    
        Animation.current = gsap.from(el.current.children, { 
           
            opacity:0,
            stagger:.4,
            ...vars,
            scrollTrigger: {
              trigger: el.current,
              start: "top 80%",
              end:"bottom 70%",
              scrub: 4,
       
            
            
            }
        });
      });
      return () => ctx.revert();       
    }, []);
    return <span ref={el}>{children}</span>;
  }
  

  export default FadeIn