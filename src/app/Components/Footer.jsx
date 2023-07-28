import React from 'react'
import { BiLogoLinkedin, BiLogoInstagram, BiLogoFacebookSquare } from 'react-icons/bi'
import { FaTiktok } from 'react-icons/fa'
import Link from 'next/link'
import FadeIn from './FadeIn'

const data = [
  {
    icon: <BiLogoLinkedin />
  },
  {
    icon: <BiLogoInstagram />
  },
  {
    icon: <FaTiktok />
  },
  {
    icon: <BiLogoFacebookSquare />
  }
]

const Footer = () => {
  return (
    <footer className="bg-slate-950 flex mt-4 flex-col justify-center items-center border-t-2 dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-between  py-2 lg:pt-6 lg:flex-row">

    
        <Link className="text-base lg:text-xl text-white transition-colors duration-300   rounded-lg  px-8 " href="/"><img className='logo h-12 text-white' src='/images/11.png' /></Link>
       

        <div className="flex flex-wrap items-center justify-center gap-4  lg:mt-0">


          <Link className="text-sm  text-white transition-colors duration-300  hover:bg-white  hover:text-gray-900 rounded-lg  p-1" href="/work">WORK</Link>
          <Link className="text-sm text-white transition-colors duration-300  hover:bg-white  hover:text-gray-900  rounded-lg  p-1" href="/service">SERVICE</Link>
          <Link className="text-sm text-white transition-colors duration-300  hover:bg-white  hover:text-gray-900  rounded-lg  p-1" href="/about">ABOUT</Link>
          <Link className="text-sm text-white transition-colors duration-300  hover:bg-white  hover:text-gray-900  rounded-lg  p-1" href="/contact">CONTACT</Link>
        </div>
        <p className="text-xs lg:text-sm text-white lg:mt-0 hover:bg-white  hover:text-gray-900  rounded-lg  pb-3 ">
          © Copyright 2023 MogaStudio.{" "}
        </p>
      </div>

      <div className='text-white text-2xl flex items-center justify-center gap-5 pb-2 lg:gap-11 text-center '>

        {
          data.map((ele, index) => (
          
            <p key={index} className='hover:bg-white  hover:text-gray-900    '>{ele.icon}</p>
            
          ))
        }
      </div>
    </footer>

  )
}

export default Footer
