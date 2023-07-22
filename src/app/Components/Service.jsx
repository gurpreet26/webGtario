
import React from 'react'



const data =[
    {
      name:"Popular",
      price:"99",
      month:"month",
      title:"For most businesses that want to optimaize web queries.",
      offer:"All limited links",
      platform: " Own analytics platform",
      contact:"chat support",
      tags:"Optimize hashtags",
      user:"unlimited users",
      plan:" Choose plan"



    },
    {
        name:"Popular",
        price:"99",
        month:"month",
        title:"For most businesses that want to optimaize web queries.",
        offer:"All limited links",
        platform: " Own analytics platform",
        contact:"chat support",
        tags:"Optimize hashtags",
        user:"unlimited users",
        plan:" Choose plan"
  
  
  
      },
      {
        name:"Popular",
        price:"99",
        month:"month",
        title:"For most businesses that want to optimaize web queries.",
        offer:"All limited links",
        platform: " Own analytics platform",
        contact:"chat support",
        tags:"Optimize hashtags",
        user:"unlimited users",
        plan:" Choose plan"
  
  
  
      },
    
    
  ]
const Service = () => {
  return (
    <div className=' py-8   shadow-lg mt-2 w-11/12 m-auto rounded-xl'>
   
         <div className="container px-6 pt-1 pb-1 mx-auto text-center">
        <div className="max-w-xl mx-auto text-white">
     
            <h1 className="text-3xl font-semibold  dark:text-white lg:text-5xl"> Pricing Plan</h1>
         
            <p className="mt-2  dark:">Lorem ipsuimilique obcaecati illum mollitia.</p>
   
        </div>

      
    </div>
   


       <div className=' flex flex-col  justify-center items-center md:flex-row my-5 md:w-9/12  px-5 rounded-lg gap-6 m-auto'>
       
    {data.map((ele,index)=>(

    <div key={index} className="px-2 py-4 my-6 pb-8 transition-colors duration-300 text-white transform  bg-gray-900 rounded-lg dark:bg-gray-800">
   
   
    <p className="text-lg font-medium  text-center">{ele.name}</p>
    <h4 className="mt-2 text-3xl font-semibold  text-center">
      {ele.price} <span className="text-base font-normal ">{ele.month}</span>
    </h4>
    <p className="mt-4  text-center">
    {ele.title}
    </p>
    <div className="mt-8  space-y-8">
      <div className="flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-blue-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <p className="mx-4 ">{ele.offer}</p>
      </div>
      <div className="flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-blue-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <p className="mx-4 ">{ele.platform}</p>
      </div>
      <div className="flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-blue-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <p className="mx-4 ">{ele.contact}</p>
      </div>

    
    </div>
    <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md  hover:text-blue-500 hover:bg-white focus:outline-none focus:bg-blue-600">
    {ele.plan}
    </button>
    </div>
   
    ))}
       </div>
     
    
    </div>
  
  )
}

export default Service
