
import React from 'react'

import {BiLogoInstagram,BiLogoGithub,BiLogoLinkedin,BiLogoTiktok} from 'react-icons/bi'
import { MdOutlineMail } from 'react-icons/md'
import {IoLocationOutline} from 'react-icons/io5'
import {BsTelephone} from 'react-icons/bs'

import FadeIn from '../Components/FadeIn'
 

const data= [
    {
        svg:  <IoLocationOutline className='h-6 w-10'/>,
        name:"77 James St N, Hamilton, ON L8R 2K3"
    },
    {
        svg:  <MdOutlineMail className='h-6 w-10'/>,
        name:"hello@mogastudio.com"
    },
    {
        svg:  <BsTelephone className='h-6 w-10'/>,
        name:"+1 (226) 402 0355"
    },
]


const ContactUs = () => {


  return (
    <>
    
  <section  className="bg-gray-900 w-11/12 m-auto">



  <div className='md:flex justify-around'>

<FadeIn vars={{ y:-200 ,duration:2}}>
    <img className="hidden lg:block w-auto  m-auto"
    src="./images/seo1.png"
    alt="cc"/>
    </FadeIn>
    <FadeIn vars={{y:-200 ,duration:2}}>
    <img
    className=" w-auto m-auto"
    src="./images/about.png"
    alt="cc"
  /></FadeIn>
    </div>


<div className=' w-full m-auto shadow-lg'>
<div className="top text-center mt-8 ">
  <p className="font-medium text-white ">Contact us</p>
  <h1 className="mt-2 text-2xl font-semibold text-white md:text-3xl dark:text-white">
    We’d love to hear from you
  </h1>
  <p className="mt-3 text-white">
    Chat to our friendly team.
  </p>
</div>


<section className="bg-gray-900">
<div className="container px-6 py-3 mx-auto">
<div className="lg:flex lg:items-center lg:-mx-6">
  <div className="left lg:w-1/2 lg:mx-6">
    <h1 className="text-2xl font-semibold capitalize hidden md:inline text-white lg:text-3xl">
      Contact us for more info
    </h1>
    <div className="mt-6 space-y-8 md:mt-8">
        {
            data.map((ele, index) =>(
                <div key={index} className="flex items-start text-white mx-1">
              <div className="mx-2  truncate w-12 ">{ele.svg} </div>
                   <p className="mx-2  truncate w-72 ">
                   {ele.name}
                   </p>
                 </div>
            ))
        }
     

  
    </div>

    <div className="mt-6 w-80 md:mt-8">
      <h3 className="text-white ">Follow us</h3>
      <div className="flex mt-4  gap-4 text-white ">
    
        <BiLogoGithub className='h-10 w-8'/>
             <BiLogoLinkedin className='h-10 w-8  '/>
             <BiLogoInstagram className='h-10 w-8 '/>
             <BiLogoTiktok  className='h-10 w-8 '/>
      </div>
    </div>
  </div>

  <div className="right mt-8 lg:w-1/2 lg:mx-6">
    <div className="w-full px-4 py-10 mx-auto overflow-hidden rounded-lg shadow-2xl bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
      <h1 className="text-lg font-medium text-gray-300">
        What do you want to ask
      </h1>
      <form className="mt-6">
        <div className="flex-1">
          <label className="block mb-2 text-sm text-gray-300 dark:text-gray-200">
            Full Name
          </label>
          <input
            type="text"
            placeholder="webGtario"
            className="block w-full px-5 py-3 mt-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="flex-1 mt-6">
          <label className="block mb-2 text-sm text-gray-300 ">
            Email address
          </label>
          <input
            type="email"
            placeholder="name@example.com"
            className="block w-full px-5 py-3 mt-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="w-full mt-6">
          <label className="block mb-2 text-sm text-gray-300 dark:text-gray-200">
            Message
          </label>
          <textarea
            className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Message"
            defaultValue={""}
          />
        </div>
        <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          get in touch
        </button>
      </form>
    </div>
  </div>
</div>
</div>
</section>
</div>



</section>
</>
  
  )
}

export default ContactUs
