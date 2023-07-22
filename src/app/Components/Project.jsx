import React from 'react'

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

    <h2 className="text-4xl font-bold tracking-tight lg:text-4xl text-white">
           Latest WORK
        </h2>
        <p className="block w-full  mt-4 text  text-gray-300">
            Lorem, ipsum dolor sit amet consectetur
               Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Esse iure tenetur commodi ipsam error 
            adipisicing elit. Esse iure tenetur commodi ipsam error 
        </p>
    </div>
  
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
        {
            data.map((ele,index)=> (

                  <div
                  key={index}
        className="flex items-end overflow-hidden bg-cover bg-no-repeat rounded-lg h-64 hover:scale-125"
        style={{
          backgroundImage:`url(${ele.url})` 
            
        }}
      >
        <div  className="w-full px-8  overflow-hidden rounded-b-lg backdrop-blur-sm bg-white ">
          <h2 className="mt-2 text-sm text-gray-700 capitalize ">
        {ele.title}
          </h2>
          <p className="my-1 text-xs font-light tracking-wider text-gray-700  uppercase  ">
            {ele.subTitle}
          </p>
        </div>
      </div>

            ))
        }
    
   
     
    </div>
  </div>
</section> 



 
   
 


</>


  )
}

export default Project
