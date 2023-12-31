'use client'

import { useRouter } from 'next/navigation'
import { gsap } from 'gsap'
import Link from 'next/link'
import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { RiMenu3Line } from 'react-icons/ri'


const NavBar = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  const app = useRef();
  const router = useRouter()

  useLayoutEffect(() => {
    let tl = gsap.timeline();
    let ctx = gsap.context(() => {
      tl.from(".logo", {
        opacity: 0,
        y: -20,
        duration: 0.5,
        stagger: 0.2,
      });
    }, app);

    return () => ctx.revert();
  }, []);
  return (




    <header ref={app} className='' >

      <nav className="flex flex-wrap items-center justify-between  md:py-2 md:mx-10 px-1 text-lg text-white  content-center font-bold border-b-2 ">
        <img className='logo h-9 lg:h-12 text-white' src='/images/logo.png' alt='logo'/>
        <div className="block xl:hidden">
          <button
            className=" logo flex items-center py-2 hover:text-white hover:border-white"
            onClick={() => toggleExpansion(!isExpanded)}
            role="button"
            aria-label="Aria Name"
          >
            {isExpanded ? <AiOutlineClose className='h-8 w-12' /> : <RiMenu3Line className='h-8 w-10'/>}
          </button>
        </div>

        <div className={`${isExpanded ? `block` : `hidden`
          } w-full block  xl:flex xl:items-center xl:w-auto`}>

          <ul
            className="text-base text-white pt-4 xl:flex text-center gap-2 md:justify-between tracking-wider md:pt-2 md:px-2 uppercase font-bold" >
            <li className="logo pb-2 text-xl text-white py-2 md:px-6 text-center border-b lg:border-b-0 "> 
              <Link onClick={() => toggleExpansion(!isExpanded)} href="/"> Home</Link>
            </li>
            <li className="logo pb-2 text-xl text-white py-2 md:px-6 text-center border-b lg:border-b-0">
              <Link onClick={() => toggleExpansion(!isExpanded)}  href="/work">Work</Link>
            </li>
            <li className="logo pb-2 text-xl text-white py-2 md:px-6 text-center border-b lg:border-b-0">
              <Link onClick={() => toggleExpansion(!isExpanded)}  href="/about"> About</Link>
            </li>
            <li className="logo pb-2 text-xl text-white py-2 md:px-6 text-center border-b lg:border-b-0">
              <Link onClick={() => toggleExpansion(!isExpanded)} href="/service">Service</Link>
            </li>
            <li className="logo pb-2 text-xl text-white py-2 md:px-6 text-center  lg:border-b-0">
              <Link onClick={() => toggleExpansion(!isExpanded)} href="/contact">Contact Us</Link>
            </li>

          </ul>

        </div>
{/* 
        <div className={`${isExpanded ? `block` : `hidden`
          } w-full block  xl:flex xl:items-center xl:w-auto`}>

          <ul
            className="text-base text-white pt-4 xl:flex text-center gap-3 md:justify-between tracking-wider md:pt-2 md:px-2 uppercase font-bold" >
            <li className="logo pb-2 text-xl text-white py-2 md:px-6 text-center border-b lg:border-b-0 "> 
              <Link onClick={() => toggleExpansion(!isExpanded)} href="/"> Home</Link>
            </li>
            <li className="logo pb-2 text-xl text-white py-2 md:px-6 text-center border-b lg:border-b-0">
              <Link onClick={() => toggleExpansion(!isExpanded)}  href="/work">Work</Link>
            </li>
            <li className="logo pb-2 text-xl text-white py-2 md:px-6 text-center border-b lg:border-b-0">
              <Link onClick={() => toggleExpansion(!isExpanded)}  href="/about"> About us</Link>
            </li>
            <li className="logo pb-2 text-xl text-white py-2 md:px-6 text-center border-b lg:border-b-0">
              <Link onClick={() => toggleExpansion(!isExpanded)} href="/service">Service</Link>
            </li>
            <li className="logo pb-2 text-xl text-white py-2 md:px-6 text-center  lg:border-b-0">
              <Link onClick={() => toggleExpansion(!isExpanded)} href="/contact">Contact Us</Link>
            </li>

          </ul>

        </div> */}


       

      </nav>
    </header>



  )
}

export default NavBar
