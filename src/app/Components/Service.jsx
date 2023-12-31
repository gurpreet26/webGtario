"use client"
import React from 'react'
import FadeIn from './FadeIn'
import { useRouter } from 'next/navigation'



const data =[
    {
      name:"Basic",
      price:"$ 499",
      title:"Wordpress website with user-friendly and responsive design that reflect  your unique brand identity",
      offer:"3 - 5 pages",
      platform: " Responsive Design",
      contact:"Contact form",
      plan:" Choose plan"
    },
    {
        name:"Reservation Booking website",
        price:"$ 999",  
        title:"Booking systems are built to simplify the booking process for both you and your customers",
        offer:"Services Packages",
        platform: " Automated notifications",
        contact:"Calendar Synchronizations",
        plan:" Choose plan"
      },
      {
        name:"Custom",
        price:"$ 6999",
        title:"Custom web design solutions are meticulously crafted to ensure outstanding user experience",
        offer:"Unique Design",
        platform: "unlimited animations",
        contact:"unlimited revision",
        plan:" Choose plan"
      },
    
    
  ]

function Service() {
  const router = useRouter()

  return (
    <div className=' py-8   shadow-lg mt-2 w-11/12 m-auto rounded-xl'>
 <FadeIn vars={{ y: 100 ,duration:0.3 }}>
      <div className="container px-6 pt-1 pb-1 mx-auto text-center">
        <div className="max-w-2xl mx-auto text-white">

          <h1 className="logo text-3xl font-semibold  dark:text-white lg:text-5xl"> Pricing Plan</h1>

          <p className=" logo my-2  dark:">
          Discover the power of tailor-made websites that perfectly align with your business goals.
          </p>

        </div>


      </div>
      </FadeIn>



      <div className=' flex flex-col max-w-screen-xl justify-center items-center md:flex-row my-5 md:w-9/12  px-5 rounded-lg gap-6 m-auto'>

        {data.map((ele, index) => (
 <FadeIn key={index} vars={{ y:-50 ,duration:1 }}>
          <div  className="overflow-hidden px-2  py-4 my-6 pb-8 transition-colors duration-300 text-white transform  bg-gray-900 rounded-lg dark:bg-gray-800">


            <p className="text-lg font-medium text-white text-center">{ele.name}</p>
            <p className="mt-2 text-3xl font-semibold text-white text-center">
              {ele.price}  <span className="text-[0.6rem] text-white align-baseline">starting price</span>
            </p>
            <p className="mt-4 text-sm text-white text-center">
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
                    clipRule="evenodd" />
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
                    clipRule="evenodd" />
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
                    clipRule="evenodd" />
                </svg>
                <p className="mx-4 ">{ele.contact}</p>
              </div>


            </div>
            <button 
            className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md  hover:text-blue-500 hover:bg-white focus:outline-none focus:bg-blue-600"
            onClick={() => router.push('/contact')}>
              {ele.plan}
            </button>
          </div>
          </FadeIn>

        ))}
      </div>


    </div>

  );
}

export default Service
