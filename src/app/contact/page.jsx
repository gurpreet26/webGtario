"use client"
import React, { useState } from 'react'

import {BiLogoInstagram,BiLogoGithub,BiLogoLinkedin,BiLogoTiktok} from 'react-icons/bi'
import { MdOutlineMail } from 'react-icons/md'
import {IoLocationOutline} from 'react-icons/io5'
import {BsTelephone} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'
import FadeIn from '../Components/FadeIn'
 



const data= [
    {
        svg:  <IoLocationOutline className='h-6 w-10'/>,
        name:"77 James St N, Hamilton, ON L8R 2K3"
    },
    {
        svg:  <MdOutlineMail className='h-6 w-10'/>,
        name:"hello@gurpreetlambton.ca"
    },
    {
        svg:  <BsTelephone className='h-6 w-10'/>,
        name:"+1 (226) 402 0355"
    },
]

const Result =()=>{
  return(
    <p className='text-white mt-3'> Your message is successfully sent. I will contact you soon</p>
  )
}



const ContactUs = () => {
  const[result , showresult] =useState(false);
  const form =useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_ws5ovai', 'template_yq1a06d', form.current, 'LLqzyd8XJeH13Rh5m')
  //   .then((result) => {
      
  // }, (error) => {
  //     console.log(error.text);
  // });
  // e.target.reset()
  // showresult(true)
  // setTimeout(() => showresult(false), 3000);
     
  // };

  console.log(process.env.service_id)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_service_id, process.env.NEXT_PUBLIC_template_id , form.current, process.env.NEXT_PUBLIC_public_key)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        e.target.reset()
  showresult(true)
  setTimeout(() => showresult(false), 3000);
  };

  return (
    <>
    
  <section  className="bg-gray-900 w-11/12 m-auto">


  <FadeIn vars={{ y:-200 }}>
  <div className='md:flex justify-around'>


    <img className="hidden lg:block w-auto  m-auto"
    src="./images/seo1.png"
    alt="cc"/>
   
  
    <img
    className=" w-auto m-auto"
    src="./images/about.png"
    alt="cc"
  />
    </div>
    </FadeIn>
</section>

<div className='text-center py-5 '>
<h1 className="font-medium text-4xl text-white ">Contact us</h1>

</div>

<div className='text-white flex flex-col md:flex-row justify-center items-center '>

    
  <div className="mt-2  space-y-8 md:mt-8  self-start">
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
   

  
    
    <div className=" text-center md:text-left w-80 md:mt-8 self-start ">
      <h3 className="text-white ">Follow us</h3>
      <div className="flex md:items-left justify-center md:justify-start mt-4 text-center gap-4 text-white ">
    
        <BiLogoGithub className='h-10 w-8  text-center'/>
             <BiLogoLinkedin className='h-10 w-8  '/>
             <BiLogoInstagram className='h-10 w-8 '/>
             <BiLogoTiktok  className='h-10 w-8 '/>
      </div>
    </div>

  </div>





  <div className=" md:w-1/2 w-full  lg:mx-6">
  <div className="w-full px-4 py-10 mx-auto overflow-hidden  rounded-lg  lg:max-w-xl shadow-gray-300/50">
    <h1 className="text-lg font-medium text-white">
      What do you want to ask
    </h1>
    <form ref={form} onSubmit={sendEmail}  className="mt-6">
      <div className="flex-1">
        <label className="block mb-2 text-sm text-white">
          Full Name
        </label>
        <input
        name='name'
        required
          type="text"
          placeholder="Full name"
          className="block w-full px-5 py-3 mt-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div className="flex-1 mt-6">
        <label className="block mb-2 text-sm text-white">
          Email address
        </label>
        <input
        name='email'
        required
          type="email"
          placeholder="your@example.com"
          className="block w-full px-5 py-3 mt-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div className="w-full mt-6">
        <label className="block mb-2 text-sm text-white">
          Message
        </label>
        <textarea
        name='message'
        required
          className="block w-full h-32 px-5 py-3 mt-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Message"
        
        />
      </div>
      <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-900 ">
        get in touch

      </button>
      {result && <Result/>}
  
    </form>
  </div>
</div>

</div>
</>
  
  )
}

export default ContactUs
