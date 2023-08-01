import Image from 'next/image'
import Hero from './Components/Hero'
import Stats from './Components/Stats'
import VideoSection from './Components/VideoSection'
import Service from './Components/Service'
import Project from './Components/Project'
import Cta from './Components/Cta'
import Contact from './Components/Contact'
import TextReveal from './Components/TextReval'

  const t= "Our Team are passionate about bringing your ideas to life. We collaborate closely with you to understand your vision, goals, and target audience, creating a website that reflects your brand's personality and captures the essence of your business"
export default function Home() {
  return (
  <div className='bg-slate-950 p-0 m-0' >



 

  <Hero/>
  {/* <Stats/> */}
  
  <VideoSection/>
  <TextReveal title={t}/>
<Service/>
<Project/>


<Contact/>
  </div>
  )
}
