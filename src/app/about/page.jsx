"use client"
import React from 'react'
import {IoCodeWorking} from 'react-icons/io5'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {AiOutlineCloudDownload} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg'
import {BiLogoInstagram,BiLogoGithub,BiLogoLinkedin} from 'react-icons/bi'
import { useRouter } from 'next/navigation'
import FadeIn from '../Components/FadeIn'
const stats= [
    {
        icon:<IoCodeWorking className='h-12 w-16'/>,
        unit:"30+",
        title:"Projects",
        message:"Its something thats many of the wisest people in history have kept in mind"
    },
    {
        icon:<AiOutlineUsergroupAdd/>,
        unit:"30+",
        title:"Projects",
        message:"Its something thats many of the wisest people in history have kept in mind"
    },
    {
        icon:<AiOutlineCloudDownload/>,
        unit:"30+",
        title:"Projects",
        message:"Its something thats many of the wisest people in history have kept in mind"
    },
    {
        icon:<CgWebsite/>,
        unit:"30+",
        title:"Projects",
        message:"Its something thats many of the wisest people in history have kept in mind"
    },
]

const steps =[
    {
        name:"User Story",
        unit:"1",
        message:" Skate ipsum dolor sit amet, alley oopolor sit amet, alley oop vert mute-air Colby Carter flail 180 berm.olor sit amet, alley oop vert mute-air Colby Carter flail 180 berm. vert mute-air Colby Carter flail 180 berm."
    },
    {
        name:"Design",
        unit:"1",
        message:" Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter flail 180 berm."
    },
    {
        name:"Development",
        unit:"1",
        message:" Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter flail 180 berm."
    },
    {
        name:"Test",
        unit:"1",
        message:" Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter flail 180 berm."
    },
    
]

const team=[
    {
        image:"https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?w=1380&t=st=1690310699~exp=1690311299~hmac=b5b7cb7fa04f331fe869a67cafcbca43622b36cd2520dda0088d6a69f3a2efae",
        name:"Gurpreet Singh",
        position:"Front end Devloper",
        svg:<svg
        className="absolute text-white dark:text-neutral-700 left-0 bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="currentColor"
          d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
        
      

    },
    {
        image:"https://img.freepik.com/free-photo/widely-smiling-businesswoman-working-laptop-sitting-cafe_197531-341.jpg?w=1380&t=st=1690310029~exp=1690310629~hmac=1c647dd7ffe1e1b070207fa5d6e49d6fb50ee2c6d30a6562fc7818865dbe5ab4",
        name:"Henny",
        position:"Designer",
        svg:  <svg
        className="absolute text-white dark:text-neutral-700  left-0 bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="currentColor"
          d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg> 

    },
    {
        image:"https://img.freepik.com/free-photo/young-stylish-smiling-man-co-working-office-startup-freelancer-holding-using-tablet_285396-9048.jpg?w=1380&t=st=1690310759~exp=1690311359~hmac=801714bc43fe0baef3d84f859feb8190e7c0dc5aeca4ae3d026ae1c3cfefa151",
        name:"Jonn Markos",
        position:"Back-end Developer",
        svg:  <svg
        className="absolute text-white dark:text-neutral-700 left-0 bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="currentColor"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

    },
    
]

const About = () => {
    const router = useRouter()
  return (
< div className=''>
<div className='w-11/12  bg-gray-900 shadow-2xl m-auto mb-2  '>
  <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 shadow-lg">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-gray-900 transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className=" inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-500 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Everything you
            <br className="hidden md:block" />
            can imagine{' '}
            <span className="inline-block text-deep-purple-accent-400">
              is real
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-white md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
          <div className="flex items-center">
          <button className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide bg-blue-500 text-white transition duration-200 rounded shadow-md "
           type="button" onClick={() => router.push('/service')}>
            Explore More
    </button>
         
        
          </div>
        </div>
      </div>
    </div>
   
 
  </div>





  {/* stats */}
  <div className="px-4 py-16 shadow-lg mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((ele,index)=>(
        <div key={index} className="text-center">
           
                   <div className="flex  items-center justify-center  mx-auto rounded-full  ">
                  
                        <svg className='w-12 h-12  text-white sm:w-10 sm:h-12'>
                        {ele.icon}</svg>
            
            </div>
            <h6 className="text-4xl font-bold text-white">
              {ele.unit}
            </h6>
            <p className="mb-2 font-bold  text-white text-md">{ele.title}</p>
            <p className=" text-white">
              {ele.message}
            </p>
             
           
       
        </div>
          ))}
      </div>
     
    </div>
{/* steps */}
    <div className="px-4 py-16 shadow-lg mx-auto sm:max-w-xl rounded-md bg-gray-900 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
     


      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-400 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
      

         How  we make your website
        </h2>
        <p className="text-base text-gray-300 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>


      <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
      <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
          <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px z-1" />
        </div>
        {steps.map((ele,index)=>(
        
         
        <div key={index} className="p-5 duration-300 transform text-gray-900 bg-white border rounded shadow-sm hover:-translate-y-2">
         

          <div  className="flex items-center justify-between mb-2 ">
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
        <a
          href="/"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-blue-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Learn more
        </a>
      </div>
    </div>

{/* team */}
<div className="container my-2 mx-auto md:px-6  rounded-md text-white shadow-xl w-11/12 m-auto ">

<section className="py-4 text-center">

  <h2 className="my-3 text-4xl font-bold">
    Meet Your Team
  </h2>



  <div className="grid gap-x-6 md:grid-cols-3 pt-3 lg:gap-x-12">

    {
        team.map((ele,index)=>(
      
            <div key={index}  className="mb-6 lg:mb-0">
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  src={ele.image}
                  className="w-full rounded-t-lg"
                />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed" />
                </a>
               <p>{ele.svg}</p>
              </div>
      
              <div className="p-6 text-gray-900">
                <h5 className="mb-4 text-lg font-bold">{ele.name}</h5>
                <p className="mb-4  dark:text-neutral-300">
                 {ele.position}
                </p>
                <ul className="mx-auto flex list-inside gap-3 justify-center">
                 <BiLogoGithub className='h-6 w-6 '/>
                 <BiLogoLinkedin className='h-6 w-6 '/>
                 <BiLogoInstagram className='h-6 w-6 '/>
                </ul>
              </div>
            </div>
       
            
          </div>
        
        ))
    }
     
  </div>

</section>

</div>

    {/* faq */}
    <section className="container bg-gray-900 w-11/12 m-auto rounded-md md:px-6 ">
  <div className="container px-6 py-12 mx-auto">
    <h1 className="text-2xl font-semibold  lg:text-3xl text-white">
      Frequently asked questions.
    </h1>
    <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
      <div>
        <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-white dark:text-white">
            What can i expect at my first consultation?
          </h1>
          <p className="mt-2 text-sm text-gray-300 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            placeat, consequatur eveniet veritatis quos dignissimos beatae
            dolores exercitationem laboriosam officia magnam atque blanditiis
            illum doloremque magni ex corrupti tempora quis.
          </p>
        </div>
      </div>
      <div>
        <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-white dark:text-white">
            What are your opening house?
          </h1>
          <p className="mt-2 text-sm text-gray-300 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            placeat, consequatur eveniet veritatis quos dignissimos beatae
            dolores exercitationem laboriosam officia magnam atque blanditiis
            illum doloremque magni ex corrupti tempora quis.
          </p>
        </div>
      </div>
      <div>
        <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-white dark:text-white">
            Do i need a referral?
          </h1>
          <p className="mt-2 text-sm text-gray-300 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            placeat, consequatur eveniet veritatis quos dignissimos beatae
            dolores exercitationem laboriosam officia magnam atque blanditiis
            illum doloremque magni ex corrupti tempora quis.
          </p>
        </div>
      </div>
      <div>
        <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-white dark:text-white">
            Is the cost of the appoinment covered by private health insurance?
          </h1>
          <p className="mt-2 text-sm text-gray-300 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            placeat, consequatur eveniet veritatis quos dignissimos beatae
            dolores exercitationem laboriosam officia magnam atque blanditiis
            illum doloremque magni ex corrupti tempora quis.
          </p>
        </div>
      </div>
      <div>
        <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-white dark:text-white">
            What is your cancellation policy?
          </h1>
          <p className="mt-2 text-sm text-gray-300 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            placeat, consequatur eveniet veritatis quos dignissimos beatae
            dolores exercitationem laboriosam officia magnam atque blanditiis
            illum doloremque magni ex corrupti tempora quis.
          </p>
        </div>
      </div>
      <div>
        <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-white dark:text-white">
            What are the parking and public transport options?
          </h1>
          <p className="mt-2 text-sm text-gray-300 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            placeat, consequatur eveniet veritatis quos dignissimos beatae
            dolores exercitationem laboriosam officia magnam atque blanditiis
            illum doloremque magni ex corrupti tempora quis.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


</div>

  
  )
}

export default About
