import React from 'react'
import { BiLogoInstagram, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'
import FadeIn from './FadeIn';

const team = [
    {
      image: "./images/team1.jpg",
      name: "Gurpreet Singh",
      position: "Front end Devloper",
      svg: <svg
        className="absolute text-white  left-0 bottom-0"
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
      image: "https://cdn.pixabay.com/photo/2017/09/20/10/29/beautiful-2768032_1280.jpg",
      name: "Henny",
      position: "Designer",
      svg: <svg
        className="absolute text-white  left-0 bottom-0"
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
      image: "https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_1280.jpg",
      name: "Jonn Markos",
      position: "Back-end Developer",
      svg: <svg
        className="absolute text-white  left-0 bottom-0"
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



const Team = () => {
 


  return (

    <div className="team container my-2 mx-auto md:px-6  rounded-md text-white shadow-xl w-11/12 m-auto ">

    <section className="pt-20 pb-4 text-center">
    <FadeIn  vars={{x:-200}}>
      <h2 className="pb-3 text-4xl font-bold">
        Meet Your Team
      </h2>
<p className='mb-3'>We are a small, but highly skilled team of web developers. </p>

   </FadeIn>
      <div className="grid gap-x-6 md:grid-cols-3 pt-3 lg:gap-x-12">

        {
          team.map((ele, index) => (
<FadeIn key={index} vars={{x:200}}>
            <div  className="mb-6 lg:mb-0">
              <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={ele.image}
                    className="w-full rounded-t-lg h-[15rem] lg:h-[19rem]"
                    alt='team'
                  />
                 
                  <p>{ele.svg}</p>
                </div>

                <div className="p-6 text-gray-900">
                  <p className="mb-4 text-lg font-bold">{ele.name}</p>
                  <p className="mb-4  dark:text-neutral-500">
                    {ele.position}
                  </p>
                  <ul className="mx-auto flex list-inside gap-3 justify-center">
                    <li>
                    <BiLogoGithub className='h-6 w-6 ' />
                    </li>
                 <li>
                 <BiLogoLinkedin className='h-6 w-6 ' />
                 </li>
                 <li>
                 <BiLogoInstagram className='h-6 w-6 ' />
                 </li>
                 
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

  )
}

export default Team