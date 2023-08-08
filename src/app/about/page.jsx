
import React from 'react'
import { IoCodeWorking } from 'react-icons/io5'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import FadeIn from '../Components/FadeIn'
import Team from '../Components/Team';
import Me from '../Components/Me';
import TextReveal from '../Components/TextReval';
import Link from 'next/link';

export const metadata = {
  title: 'Professional Website Design & Development Services across canada | Design and Development of mobile app like IOS Apps and android apps across canada',
  description: ' Looking for innovative web design or mobile apps in hamiton? Our expertise extends to both iOS and Android platforms. Whether you are targeting iPhone users or the vast Android market, we will build a seamless app experience for your target audience.',
}


const stats = [
  {
    icon: <IoCodeWorking/>,
    unit: "20+",
    title: "Projects",
    message: "Designed and developed custom website using Figma, React, Express, and MongoDB "
  },
  {
    icon: <AiOutlineUsergroupAdd />,
    unit: "15+",
    title: "Customser",
    message: "Our dedication to excellence and customer satisfaction means am committed to help you to achieve your online goals."
  },
  {
    icon: <AiOutlineCloudDownload />,
    unit: "15+",
    title: "Mobile Apps",
    message: "React native apps that are supported by the target platform, which can include iOS, Android, Windows, macOS, and others."
  },
  {
    icon: <CgWebsite />,
    unit: "40+",
    title: "SEO",
    message: "Optimizing a website or web page to increase its visibility and ranking in search engine results pages"
  },
]

const steps = [
  {
    name: "User Story",
    unit: "1",
    message: "Define the website's purpose and target audience.Create user stories that outline the features and functionalities required for the website"
  },
  {
    name: "Design",
    unit: "2",
    message: " Use Figma to create the website's design and wireframes based on the user stories. Design the website's layout, color schemes, typography, and other visual elements."
  },
  {
    name: "Development",
    unit: "3",
    message: "Implement the frontend using React, utilizing the designs created in Figma. Connect the frontend to the backend by making API calls for data retrieval and manipulation."
  },
  {
    name: "Test",
    unit: "4",
    message: "Perform user acceptance testing (UAT) with real users or stakeholders to validate that the website meets the user stories' requirements. Conduct cross-browser and cross-device testing to ensure compatibility across various platforms."
  },

]






const About = () => {



 const t2="I will collaborate closely with you to understand your vision, goals, and target audience, creating a website that reflects your brand's personality and captures the essence of your business. Whether you need a stunning portfolio, e-commerce store, Wordpress website, appointment booking system or engaging blog, we have the perfect solution for your business"


  return (
    
    < div  className=''>

 <Me/>



 

      {/* stats */}
      <div className="px-4 py-6 shadow-lg mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-5  mb-4">


        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((ele, index) => (
            <div key={index} className="text-center">

              <div className="flex  items-center justify-center  mx-auto rounded-full  ">

                <svg className='text-white w-12 h-10'>
                  {ele.icon}</svg>

              </div>
              <h2 className="text-4xl font-bold text-white">
                {ele.unit}
              </h2>
              <p className="mb-2 font-bold  text-white text-md">{ele.title}</p>
              <p className=" text-white">
                {ele.message}
              </p>



            </div>
          ))}
        </div>

      </div>
  
      {/* steps */}
     
      <div className="overflow-hidden px-4 py-16 shadow-lg mx-auto sm:max-w-xl rounded-md bg-gray-900 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">


      <FadeIn vars={{ y: -100 }}>
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        
          <h2 className="max-w-xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">


            How I make your custom website
          </h2>
          <p className="text-base text-gray-300 md:text-lg">
          I leverage the latest technologies and design trends to create websites that make a lasting impact and keep your audience coming back for more
          </p>
        </div>
        </FadeIn>

        <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
          <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
            <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px z-1" />
          </div>
        
          {steps.map((ele, index) => (


            <div key={index} className="p-5 duration-300 transform text-gray-900 bg-white border rounded shadow-sm hover:-translate-y-2">


              <div className="flex items-center justify-between mb-2 ">
          
                <p className="text-lg font-bold leading-5">{ele.name}</p>
                <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                  {ele.unit}
                </p>
              </div>
         
              <p className="text-sm text-gray-800 z-10">
                {ele.message}
              </p>
             
            </div>

    
          ))}
        
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-blue-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
          Contact US
          </Link>
        </div>

        
      </div>
  
     <TextReveal title={t2}/>
 

      {/* faq */}
 


    </div>


  )
}

export default About
