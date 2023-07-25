import React from 'react'
import {TbBrandMongodb , TbBrandNextjs} from 'react-icons/tb'
import {FaReact, FaFigma, FaAws} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'

const Stats = () => {
  return (
    <div className=" md:block w-11/12 text-white m-auto rounded-xl   my-4  sm:py-3">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-center  lg:text-xl  font-semibold leading-8 ">
     We use world top class Web Technologies
      </h2>

<div className='flex justify-between flex-wrap items-center animate-marquee-back '>

      <div className="flex justify-between items-center gap-3 flex-wrap mt-3 overflowx-hidden text-center  w-full border p-6">
      <p className='hover:bg-white hover:text-gray-900 p-2 rounded-xl'>
      <FaFigma className='w-12 h-12 '/>
      Figma
      </p>
      <p className='hover:bg-white hover:text-gray-900 p-2 rounded-xl'>
      <FaReact className='w-12 h-12'/>
      React
      </p>
      <p className='hover:bg-white hover:text-gray-900 p-2 rounded-xl'>
      <TbBrandNextjs className='w-12 h-12'/>
      NextJs
      </p>
      <p className='hover:bg-white hover:text-gray-900 p-2 rounded-xl'>
      <FaAws className='w-12 h-12'/>
      aws
      </p>
   
      <p className='hover:bg-white hover:text-gray-900 p-2 rounded-xl'>
      <SiTailwindcss className='w-12 h-12'/>
      Tailwindcss
      </p>
      <p className='hover:bg-white hover:text-gray-900 p-2 rounded-xl'>
      <TbBrandMongodb className='w-12 h-12'/>
      Mongodb
      </p>
   
      </div>

      
</div>
  
  
  
 
      
  
      
    </div>
  </div>
  )
}

export default Stats
