"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


function TextReveal() {
    const [lettersRef, setlettersRef] = useArrayRef();
    const triggerRef = useRef(null)


    function useArrayRef() {
        const lettersRef = useRef([]);
        lettersRef.current = [];
        return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
    }


    const text = "Ontario's Web Design Expertise Unleashed. Our Ontario-based team's expertise shines through every website we create. Whether you need a stunning portfolio, an e-commerce powerhouse, or an engaging blog, we have the perfect solution for your business"

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const anim = gsap.to(
            lettersRef.current,
            {
                scrollTrigger: {
                    trigger: triggerRef.current,
                    scrub: 1,
                    start: "top center",
                    end: "bottom 85%",
            
                  
                },
                color: "white",
                duration: 5,
                stagger: 1,
            }
        );
        return (() => {
            anim.kill()
        })
    }, []);

    return (
        <>
      
            <div className="lg:px-14 pl-4">
                <div ref={triggerRef}className="text-gray-900 overflow-hidden " >
                    {text.split("").map((letter, index) => (
                        <span className=" font-bold break-keep text-4xl md:text-6xl  lg:text-[length:var(--headlineBig)] lg:leading-[var(--headlineBig)] 
                        " key={index} ref={setlettersRef}>
                            {letter}
                        </span>
                    ))}
                </div>
            </div>
          
        </>
    )
}

export default TextReveal