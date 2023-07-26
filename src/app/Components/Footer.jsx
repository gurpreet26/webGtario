import React from 'react'
import {BiLogoLinkedin,BiLogoInstagram,BiLogoFacebookSquare } from 'react-icons/bi'
import {FaTiktok} from 'react-icons/fa'

const data =[
  {
    icon:  <BiLogoLinkedin />
  },
  {
    icon:   <BiLogoInstagram />
  },
  {
    icon:  <FaTiktok/>
  },
  {
    icon:       <BiLogoFacebookSquare />
  }
]

const Footer = () => {
  return (
    <footer className="bg-slate-950 flex mt-4 flex-col justify-center items-center dark:bg-gray-900">
    <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
     
    <p className="mt-6 text-base text-white lg:mt-0 hover:bg-white  hover:text-gray-900 bg-gray-900 rounded-lg  p-2 ">
        © Copyright 2023 Meraki UI.{" "}
      </p>
      <a href="#">
      <img className='w-12' src='/11.png'/>
      </a>
     
    
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
        <a
          href="#"
          className="text-base text-white transition-colors duration-300  hover:bg-white  hover:text-gray-900 bg-gray-900 rounded-lg  p-2 "
        >
          Overview
        </a>
        <a
          href="#"
          className="text-base text-white transition-colors duration-300  hover:bg-white  hover:text-gray-900 bg-gray-900 rounded-lg  p-2 "
        >
          Features
        </a>
        <a
          href="#"
          className="text-base text-white transition-colors duration-300  hover:bg-white  hover:text-gray-900 bg-gray-900 rounded-lg  p-2 "
        >
          Pricing
        </a>
    
   
      </div>
    </div>

    <div className='text-white text-4xl flex items-center justify-center gap-5 pb-2  '>
   
    {
      data.map((ele,index)=>(
        <p  key={index} className='hover:bg-white  hover:text-gray-900 bg-gray-900 rounded-lg  p-1 '>{ele.icon}</p>
      ))
    }
     
      

      </div>
   

  </footer>
  
  )
}

export default Footer
