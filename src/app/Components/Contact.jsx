import React from 'react'
import { MdOutlineMail } from 'react-icons/md'
import {IoLocationOutline} from 'react-icons/io5'
import {BsTelephone} from 'react-icons/bs'
import FadeIn from './FadeIn'
const data = [
    {
        icon: <MdOutlineMail/>,
        name: " Email",
        message: "Speak to our friendly team.",
        contact: " hello@merakiui.com"
    },
    {
        icon: <IoLocationOutline/>,
        name: "Phone",
        message: "Speak to our friendly team.",
        contact: "+1 226 402 0355"
    },
    {
        icon: <BsTelephone/>,
        name: "Office",
        message: "Visit our office",
        contact: "77 James Street, Hamilton, ON"
    }
]


const Contact = () => {
    return (
        <section className="bg-gray-900 w-11/12 m-auto rounded-xl ">
         
         <FadeIn vars={{ x: -300 ,duration:1.5 }}>
                <div className='text-center pt-3'>
                    <p className="font-medium text-blue-400">Contact us</p>
                    <h1 className="mt-2 text-2xl font-semibold text-white md:text-3xltext-white">
                        We’d love to hear from you
                    </h1>
                    <p className="mt-3 text-gray-300">
                        Our friendly team is always here to chat.
                    </p>
                </div>
                </FadeIn>
                <div className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 p-4">
            
                    {data.map((ele, index) => (
                        <FadeIn key={index} vars={{ x: -100 ,duration:1 }}>
                        <div  className="p-4 rounded-lg  md:p-6 bg-gray-800">

                            <span className="inline-block p-3 text-blue-400 rounded-lg bg-gray-900">
                                {ele.icon}
                            </span>
                            <h2 className="mt-4 text-base font-medium  text-white">
                              {ele.name}
                            </h2>
                            <p className="mt-2 text-sm text-gray-300">
                              {ele.message}
                            </p>
                            <p className="mt-2 text-sm text-blue-400">
                                {ele.contact}
                            </p>
                        </div>
                        </FadeIn>
                    ))}
 


                </div>
            
        </section>

    )
}

export default Contact
