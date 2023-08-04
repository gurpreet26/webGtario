import React from 'react'
import Image from 'next/image';



const Hero = () => {

  return (
<>
<div className='md:h-[530px] flex flex-col md:flex-row md:justify-around items-center'>


<div className='text-white '>
<h1 className='opacity-80 leading-none md:text-[10vw] text-[16vw]  overflow-hidden uppercase font-black md:ml-[20px] ml-[5px]'>CREATIVE</h1>
<h1 className='opacity-80 leading-none md:text-[10vw] text-[16vw] overflow-hidden  uppercase font-black md:ml-[160px] ml-[40px] '>DEVELOPER</h1>
<h3 className='text-end opacity-80 leading-none md:text-[1vw] text-[3vw] overflow-hidden  uppercase font-black'>BASED IN HAMITON</h3>
</div>
<Image
  src='/images/profile1.png'
  width={500}
  height={100}
  />
</div>


</>



  )
}

export default Hero
