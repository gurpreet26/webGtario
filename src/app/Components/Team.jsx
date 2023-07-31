"use client"
import React from 'react'
import { useRef, useLayoutEffect ,useEffect} from 'react'
import  gsap  from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import { BiLogoInstagram, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'
import FadeIn from './FadeIn';

const team = [
    {
      image: "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?w=1380&t=st=1690310699~exp=1690311299~hmac=b5b7cb7fa04f331fe869a67cafcbca43622b36cd2520dda0088d6a69f3a2efae",
      name: "Gurpreet Singh",
      position: "Front end Devloper",
      svg: <svg
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
      image: "https://img.freepik.com/free-photo/widely-smiling-businesswoman-working-laptop-sitting-cafe_197531-341.jpg?w=1380&t=st=1690310029~exp=1690310629~hmac=1c647dd7ffe1e1b070207fa5d6e49d6fb50ee2c6d30a6562fc7818865dbe5ab4",
      name: "Henny",
      position: "Designer",
      svg: <svg
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
      image: "https://img.freepik.com/free-photo/young-stylish-smiling-man-co-working-office-startup-freelancer-holding-using-tablet_285396-9048.jpg?w=1380&t=st=1690310759~exp=1690311359~hmac=801714bc43fe0baef3d84f859feb8190e7c0dc5aeca4ae3d026ae1c3cfefa151",
      name: "Jonn Markos",
      position: "Back-end Developer",
      svg: <svg
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

  const useIsomorphicLayoutEffect = typeof window !== "undefined" 
  ? useLayoutEffect 
  : useEffect;

const Team = () => {
 


  return (
<FadeIn vars={{x:-200}}>
    <div className="team container my-2 mx-auto md:px-6  rounded-md text-white shadow-xl w-11/12 m-auto ">

    <section className="py-4 text-center">

      <h2 className="pb-3 text-4xl font-bold">
        Meet Your Team
      </h2>
<p className='mb-3'>We are a small, but highly skilled team of web developers. </p>

   
      <div className="grid gap-x-6 md:grid-cols-3 pt-3 lg:gap-x-12">

        {
          team.map((ele, index) => (
<FadeIn vars={{x:200}}>
            <div key={index} className="mb-6 lg:mb-0">
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
                  <p className="mb-4  dark:text-neutral-500">
                    {ele.position}
                  </p>
                  <ul className="mx-auto flex list-inside gap-3 justify-center">
                    <BiLogoGithub className='h-6 w-6 ' />
                    <BiLogoLinkedin className='h-6 w-6 ' />
                    <BiLogoInstagram className='h-6 w-6 ' />
                  </ul>
                </div>
              </div>


            </div>
            </FadeIn>

          ))
        }

      </div>


    </section>

  </div>
  </FadeIn>
  )
}

export default Team