'use client'

import { useRouter } from 'next/navigation'
import { gsap } from 'gsap'
import Link from 'next/link'
import React, { useEffect, useRef, useState ,useLayoutEffect} from 'react'


const NavBar = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  const app = useRef();
  const router = useRouter()

  useLayoutEffect(() => {
    let tl = gsap.timeline();
    let ctx = gsap.context(() => {
    tl.from(".logo, .menu, .menu1, .menu2, .menu3,.menu4,.btn",{
            opacity: 0,
            y: -20,
            duration:1,
            stagger:0.2,
          });
    }, app);
    
    return () => ctx.revert();
  }, []);
  


  return (
   



      <header ref={app} className='mx-auto '  >
        {/* <nav className="flex flex-wrap items-center justify-between bg-gray-900 m-auto  py-1 md:py-0.5 px-10 text-lg text-white  ">
        <img className='w-12' src='/11.png' />
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded  hover:text-white hover:border-white"
              onClick={() => toggleExpansion(!isExpanded)}
            >
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
          </div>

          <div className={`${isExpanded ? `block` : `hidden`
            } w-full block  lg:flex lg:items-center lg:w-auto`}>
            
              <ul
                className="text-base text-white pt-4 lg:flex text-center md:justify-between tracking-wider md:pt-2 md:px-2 uppercase font-bold" >
                <Link  onClick={() => toggleExpansion(!isExpanded)}  className="md:p-2 block  hover:bg-white  hover:text-gray-900  rounded-lg" href="/"> Home</Link>
                <Link onClick={() => toggleExpansion(!isExpanded)} className="md:p-2 block  hover:bg-white  hover:text-gray-900  rounded-lg" href="/work">Work</Link>
                <Link onClick={() => toggleExpansion(!isExpanded)} className="md:p-2 block  hover:bg-white  hover:text-gray-900  rounded-lg" href="/about"> About us</Link>
                <Link onClick={() => toggleExpansion(!isExpanded)} className="md:p-2 block  hover:bg-white  hover:text-gray-900  rounded-lg" href="/service">Service</Link>
                <Link onClick={() => toggleExpansion(!isExpanded)} className="md:p-2 block  hover:bg-white  hover:text-gray-900  rounded-lg" href="/contact">Contact Us</Link>
              </ul>
            
          </div>

     
          <button className=" hidden ml-8 whitespace-nowrap lg:inline-flex items-center justify-center px-8 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500  hover:text-blue-500 hover:bg-white "
            type="button" onClick={() => router.push('/contact')}>
            Get Quote
          </button>

        </nav> */}


        <nav className="flex flex-wrap items-center justify-between bg-gray-900 m-auto   md:py-2 mx-10 px-2 text-lg text-white lg:rounded-xl content-center   font-bold border-b-2 ">
        <img className='w-12' src='/11.png' />
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded  hover:text-white hover:border-white"
              onClick={() => toggleExpansion(!isExpanded)}
            >
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
          </div>

          <div className={`${isExpanded ? `block` : `hidden`
            } w-full block  lg:flex lg:items-center lg:w-auto`}>
            
              <ul
                className="text-base text-white pt-4 lg:flex text-center gap-3 md:justify-between tracking-wider md:pt-2 md:px-2 uppercase font-bold" >
                <Link  onClick={() => toggleExpansion(!isExpanded)}  className="md:p-2 block  hover:bg-white  hover:text-gray-900  rounded-lg" href="/"> Home</Link>
                <Link onClick={() => toggleExpansion(!isExpanded)} className="md:p-2 block  hover:bg-white  hover:text-gray-900  rounded-lg" href="/work">Work</Link>
                <Link onClick={() => toggleExpansion(!isExpanded)} className="md:p-2 block  hover:bg-white  hover:text-gray-900  rounded-lg" href="/about"> About us</Link>
                <Link onClick={() => toggleExpansion(!isExpanded)} className="md:p-2 block  hover:bg-white  hover:text-gray-900  rounded-lg" href="/service">Service</Link>
                <Link onClick={() => toggleExpansion(!isExpanded)} className="md:p-2 block  hover:bg-white  hover:text-gray-900  rounded-lg" href="/contact">Contact Us</Link>
              </ul>
            
          </div>

     
          <button className=" hidden ml-8 whitespace-nowrap lg:inline-flex items-center justify-center px-8 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500  hover:text-blue-500 hover:bg-white "
            type="button" onClick={() => router.push('/contact')}>
            Get Quote
          </button>

        </nav>
        {/* <nav  className='px-6   text-white  flex items-center justify-between content-center h-16  font-bold border-b-2 ' >
          <div className='logo font-bold tracking-wide text-lg '>WEBGTARIO</div>
          <div className="block md:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded  hover:text-white hover:border-white"
              onClick={() => toggleExpansion(!isExpanded)}
            >
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
          </div>
        <div className= {`${isExpanded ? `block` : `hidden`
            } w-full block  lg:flex lg:items-center lg:w-auto`}>
          <ul className='flex gap-4 font-bold uppercase tracking-wide'> 
          <Link  onClick={() => toggleExpansion(!isExpanded)}  className="menu md:p-2 block  hover:bg-white  hover:text-gray-900  rounded-lg" href="/"> Home</Link>
                <Link onClick={() => toggleExpansion(!isExpanded)} className=" menu1 md:p-2 block  hover:bg-white  hover:text-gray-900  rounded-lg" href="/work">Work</Link>
                <Link onClick={() => toggleExpansion(!isExpanded)} className="menu2 md:p-2 block  hover:bg-white  hover:text-gray-900  rounded-lg" href="/about"> About us</Link>
                <Link onClick={() => toggleExpansion(!isExpanded)} className=" menu3 md:p-2 block  hover:bg-white  hover:text-gray-900  rounded-lg" href="/service">Service</Link>
                <Link onClick={() => toggleExpansion(!isExpanded)} className="menu4 md:p-2 block  hover:bg-white  hover:text-gray-900  rounded-lg" href="/contact">Contact Us</Link>
          </ul>
        </div>

        <button className='btn lg:block hidden bg-white text-gray-950 px-4 py-2  rounded-md'> Get Quote</button>

        </nav> */}
      </header>


  
  )
}

export default NavBar
