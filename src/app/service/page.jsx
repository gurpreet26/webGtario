import React from 'react'
import Service from '../Components/Service'
import {TiTick} from 'react-icons/ti'
import {RxCross2} from 'react-icons/rx'
import Cta from '../Components/Cta'

const page = () => {
  return (
   <>
   <Cta/>
   <Service/>


   <div className="flex flex-col text-white  bg-gray-900 rounded-lg w-11/12 m-auto">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium ">
            <tr>
              <th scope="col" className="px-6 py-4">
                Plan
              </th>
              <th scope="col" className="px-6 py-4">
               Basic Website
              </th>
              <th scope="col" className="px-6 py-4">
                E-Commerce
              </th>
              <th scope="col" className="px-6 py-4">
               Custom Website
              </th>
            </tr>
          </thead>
          <tbody>
          <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-gray-900">
              <td className="whitespace-nowrap px-6 py-4 font-medium">No of Pages</td>
              <td className="whitespace-nowrap px-6 py-4">3-5 pages</td>
              <td className="whitespace-nowrap px-6 py-4">10-12 pages</td>
              <td className="whitespace-nowrap px-6 py-4">unlimited pages</td>
            </tr>

            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-gray-900">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Revision</td>
              <td className="whitespace-nowrap px-6 py-4">4 Rounds </td>
              <td className="whitespace-nowrap px-6 py-4">10 Rounds</td>
              <td className="whitespace-nowrap px-6 py-4">unlimited</td>
            </tr>
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-gray-900">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Online Reservation/Appointment Tool</td>
              <td className="whitespace-nowrap px-6 py-4 ">On Demand</td>
              <td className="whitespace-nowrap px-6 py-4">On Demand</td>
              <td className="whitespace-nowrap px-6 py-4">On Demand</td>
            </tr>
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-gray-900">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Free hosting for 1 year</td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
            </tr>
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-gray-900">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Mobile Responsive</td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
            </tr>
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-gray-900">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Contact Form</td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
            </tr>
        
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-gray-900">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Zoom meeting "How to use"</td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
            </tr>
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-gray-900">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Social Media Integration</td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
            </tr>

          
          
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-gray-900">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Custom Design</td>
              <td className="whitespace-nowrap px-6 py-4"><RxCross2/></td>
              <td className="whitespace-nowrap px-6 py-4"><RxCross2/></td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
            </tr>
         
      
         
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default page
