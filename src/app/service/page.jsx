import React from 'react'
import Service from '../Components/Service'
import {TiTick} from 'react-icons/ti'
import {RxCross2} from 'react-icons/rx'
import Cta from '../Components/Cta'

const page = () => {
  return (
   <>
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
               Starter
              </th>
              <th scope="col" className="px-6 py-4">
                Popular
              </th>
              <th scope="col" className="px-6 py-4">
               Custom
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-gray-900">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Domain</td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
            </tr>
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-gray-900">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Seo</td>
           
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
              <td className="whitespace-nowrap px-6 py-4"><RxCross2/></td>
            </tr>
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-gray-900">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Hosting</td>
              <td className="whitespace-nowrap px-6 py-4">Larry</td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
            </tr>
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-gray-900">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Domain</td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
            </tr>
         
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-gray-900">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Seo</td>
           
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
            </tr>
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-gray-900">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Hosting</td>
              <td className="whitespace-nowrap px-6 py-4">Larry</td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
            </tr>
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-gray-900">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Domain</td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
              <td className="whitespace-nowrap px-6 py-4"><TiTick/></td>
            </tr>
         
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<Cta/>
   </>
  )
}

export default page
