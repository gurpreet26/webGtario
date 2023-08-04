import Link from 'next/link'
import React from 'react'

const Me = () => {
  return (
    <div className="container my-4 mx-auto md:px-6">
    {/* Section: Design Block */}
    <section className="mb-1 text-center md:text-left">
      <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <div className="flex flex-wrap items-center">
          <div className="block w-full bg-slate-950 rounded-e-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
            <img
              src="./images/profile1.png"
              alt="Trendy Pants and Shoes"
              className="w-full rounded-t-lg  lg:rounded-tr-none lg:rounded-bl-lg"
            />
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
            <div className="px-6 py-12 md:px-12">
              <h2 className="mb-6 pb-2 text-3xl font-extrabold">
               ABOUT ME
              </h2>
              <p className="mb-6 pb-2 text-neutral-500 ">
              I have 5+ years of experience in building and maintaining responsive web applications using JavaScript technologies.
              I have a bachelor's degree in computer science from Punjab Technical University and I completed my Postgraduation 
              certification in Computer Software and Database Development at Lambton college.
              With a combination of creativity and technical expertise, I create websites that set new standards for excellence 
              in design and functionality.
              </p>
              <div className="mb-6 hidden md:flex flex-wrap">
                <div className="mb-4 w-full md:w-4/12">
                  <p className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-neutral-900 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  HMTL
                  </p>
                </div>
                <div className="mb-4 w-full md:w-4/12">
                  <p className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-neutral-900 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    CSS
                  </p>
                </div>
                <div className="mb-4 w-full md:w-4/12">
                  <p className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-neutral-900 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  JavaScript
                  </p>
                </div>
                <div className="mb-4 w-full md:w-4/12">
                  <p className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-neutral-900 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ReactJs
                  </p>
                </div>
                <div className="mb-4 w-full md:w-4/12">
                  <p className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-neutral-900 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                   NextJs
                  </p>
                </div>
                <div className="mb-4 w-full md:w-4/12">
                  <p className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-neutral-900 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Mobile Apps
                  </p>
                </div>
              </div>
              <Link
                href="/service"
                className="inline-block rounded bg-blue-500 px-12 pt-3.5 pb-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:to-blue-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] "
               
              >
                EXPLORE MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Section: Design Block */}
  </div>
  )
}

export default Me