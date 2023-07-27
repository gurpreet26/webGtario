"use client"
import React from 'react'
import { useRef, useLayoutEffect, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import { IoCodeWorking } from 'react-icons/io5'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { BiLogoInstagram, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'
import { useRouter } from 'next/navigation'
import FadeIn from '../Components/FadeIn'
import Team from '../Components/Team';
const stats = [
  {
    icon: <IoCodeWorking className='h-12 w-16' />,
    unit: "30+",
    title: "Projects",
    message: "Its something thats many of the wisest people in history have kept in mind"
  },
  {
    icon: <AiOutlineUsergroupAdd />,
    unit: "30+",
    title: "Projects",
    message: "Its something thats many of the wisest people in history have kept in mind"
  },
  {
    icon: <AiOutlineCloudDownload />,
    unit: "30+",
    title: "Projects",
    message: "Its something thats many of the wisest people in history have kept in mind"
  },
  {
    icon: <CgWebsite />,
    unit: "30+",
    title: "Projects",
    message: "Its something thats many of the wisest people in history have kept in mind"
  },
]

const steps = [
  {
    name: "User Story",
    unit: "1",
    message: " Skate ipsum dolor sit amet, alley oopolor sit amet, alley oop vert mute-air Colby Carter flail 180 berm.olor sit amet, alley oop vert mute-air Colby Carter flail 180 berm. vert mute-air Colby Carter flail 180 berm."
  },
  {
    name: "Design",
    unit: "1",
    message: " Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter flail 180 berm."
  },
  {
    name: "Development",
    unit: "1",
    message: " Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter flail 180 berm."
  },
  {
    name: "Test",
    unit: "1",
    message: " Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter flail 180 berm."
  },

]



gsap.registerPlugin(ScrollTrigger);
const useIsomorphicLayoutEffect = typeof window !== "undefined"
  ? useLayoutEffect
  : useEffect;


const About = () => {
  const router = useRouter()
  const app = useRef();



  useIsomorphicLayoutEffect(() => {


      const tl = gsap.timeline()


    const ctx = gsap.context((self) => {

     tl.from(".h1, .par", {
        x: -200,
      
        opacity: 0,
        duration:.3,
        stagger: 0.3,
       
      });
      tl.from(".img1", {
        opacity: 0,
        duration:2,
      height:"200vh"
       
      });

      const boxes = self.selector(".logo");
      boxes.forEach((box) => {
        gsap.from(box, {
          y:100,
          duration: 2,
          stagger: .2,
          opacity: 0,
          scrollTrigger: {
            trigger: box,
        
            start: "top 90%",
            end: "bottom 90%",
            scrub: 4
          }
        });
      });
      const teams = self.selector(".team");
      teams.forEach((box) => {
        gsap.from(box, {
          width: "50vw",
          opacity: 1,
          scrollTrigger: {
            trigger: box,
           
            start: "top 80%",
            end: "bottom 80%",
            scrub: 4
          }
        });
      });

      const faq = self.selector(".faq");

      tl.from(faq, {
     opacity:0.1,
     x:-100,
     ease: "slow(0.7, 0.7, false)",
     scrollTrigger: {
      trigger: ".faq",
      start: "top 80%",
      markers:true,
      end: "bottom 40%",
      scrub: 2
    }

      })


    }, app);
    return () => ctx.revert();
  }, []);

  return (
    < div ref={app} className=''>
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
              className=" img1 object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
          <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
              <p className="h1 inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-500 uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
              <h2 className="h1 mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Everything you
                <br className=" hidden md:block" />
                can imagine{' '}
                <span className="h1 inline-block text-deep-purple-accent-400">
                  is real
                </span>
              </h2>
              <p className="par pr-5 mb-5 text-base text-white md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
              <div className="par flex items-center">
                <button className=" inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide bg-blue-500 text-white transition duration-200 rounded shadow-md "
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
          {stats.map((ele, index) => (
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
      <div className=" logo overflow-hidden px-4 py-16 shadow-lg mx-auto sm:max-w-xl rounded-md bg-gray-900 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">



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
          <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-blue-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Learn more
          </a>
        </div>
      </div>

    
   <Team/>

      {/* faq */}
      <section className="faq container bg-gray-900 w-11/12 m-auto rounded-md md:px-6 ">
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
