import Image from 'next/image'
import Hero from './Components/Hero'
import Stats from './Components/Stats'
import VideoSection from './Components/VideoSection'
import Service from './Components/Service'
import Project from './Components/Project'
import Cta from './Components/Cta'
import Contact from './Components/Contact'

export default function Home() {
  return (
  <div className='bg-slate-950 p-0 m-0' >



 

 <Hero/>
  {/* <Stats/> */}

<Service/>
<VideoSection/>
<Project/>




<Contact/>
  </div>
  )
}
