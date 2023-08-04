
import Hero from './Components/Hero'

import VideoSection from './Components/VideoSection'
import Service from './Components/Service'
import Project from './Components/Project'

import Contact from './Components/Contact'
import TextReveal from './Components/TextReval'

  const t= "With years of experience and a portfolio of successful projects, I have earned the trust of our clients as a reliable and dependable partner in their online journey. Choose any plan for best website design, custom web solutions, and reservation booking systems that embody the Canadian values of quality, innovation, and integrity. Let me take your online presence to new heights."
export default function Home() {
  return (
  <div className='bg-slate-950 p-0 m-0' >



 

  <Hero/>
  
  
 
  <TextReveal title={t}/>
  <VideoSection/>
<Project/>
<Service/>

<Contact/>
  </div>
  )
}
