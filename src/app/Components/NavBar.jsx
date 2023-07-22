'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import React, { useState } from 'react'

const NavBar = () => {
  const [isExpanded, toggleExpansion] = useState(false);



  const router = useRouter()
  return (
    <>



      <header className='bg-gray-950 '>
        <nav className="flex flex-wrap items-center justify-between bg-gray-900 m-auto  py-1 md:py-0.5 w-11/12 text-lg text-white  ">
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

        </nav>
      </header>


    </>
  )
}

export default NavBar
