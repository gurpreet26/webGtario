import React from 'react'
import FadeIn from './FadeIn'

const data =[
    {
        url:"/images/3.jpg",
        title:"Best website collections",
        subTitle:"Website"
    },
    {
        url:"/images/6.jpg",
        title:"Best website collections",
        subTitle:"Website"
    },
    {
        url:"/images/7.jpg",
        title:"Best website collections",
        subTitle:"Website"
    },
    {
        url:"/images/22.jpg",
        title:"Best website collections",
        subTitle:"Website"
    },
       {
        url:"/images/9.jpg",
        title:"Best website collections",
        subTitle:"Website"
    },
    {
        url:"/images/16.jpg",
        title:"Best website collections",
        subTitle:"Website"
    },
  
]
//13,

const Project = () => {
  return (
<>


<section className=" mt-1 w-11/12 m-auto shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[50px] bg-gray-900 text-white rounded-xl mb-4">
  <div className="container px-6 py-10 mx-auto ">
    <div className='flex-col flex justify-center items-start'>

<FadeIn vars={{ y: -100 , duration:1, }}>
    <h2 className="text-4xl font-bold tracking-tight lg:text-4xl ">
           Latest WORK
        </h2>
        </FadeIn>
        <FadeIn vars={{ y: -100 , duration:2, }}>
        <p className="block w-full  mt-4 text  text-gray-50">
       
        From ideation to execution, I ensure every aspect of your website and booking system is crafted with precision
         and attention to detail. I focus on user experience, page speed, and mobile responsiveness to ensure your website stands out in search engines and delights your visitors
        </p>
        </FadeIn>
    </div>
  
    <div className="grid  grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3 overflow-hidden ">
    
        {
            data.map((ele,index)=> (

<FadeIn   key={index} vars={{ x: -200 , duration:3, stagger:0.4 }}>
                  <div
                
        className="flex items-end overflow-hidden bg-cover bg-no-repeat rounded-lg h-64 hover:skew-y-3"
        style={{
          backgroundImage:`url(${ele.url})` 
            
        }}
      >
        

      </div>
      </FadeIn>
            ))
        }
     
   
     
    </div>
  </div>
</section> 



 
   
 


</>


  )
}

export default Project
