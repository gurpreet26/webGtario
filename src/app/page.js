
import Hero from './Components/Hero'
import VideoSection from './Components/VideoSection'
import Service from './Components/Service'
import Project from './Components/Project'
import Contact from './Components/Contact'
import TextReveal from './Components/TextReval'



const t = "As an experienced web developer with 5+ years of expertise in the IT field, possess a diverse skill set that includes developing WordPress websites, appointment booking websites that will handle complex scheduling systems, user authentication, and secure payment gateways and crafting custom web designs using Figma, React, Express and MongoDB. Choose any plan that embody the Canadian values of quality, innovation, and integrity. Let me take your online presence to new heights."

export const metadata = {
  title: ' Best WordPress Website Development, Appointment Booking, and Custom Websites in Toronto, Hamilton, ottawa and London',
  description: ' Looking for professional WordPress website development, appointment booking solutions, and custom websites near Toronto, Hamilton, or London, brampton? we offers tailored digital solutions to take your online presence to new heights across GTA area',
}

export default function Home() {
  return (
    <div className='bg-slate-950 p-0 m-0' >
      <Hero />
      <TextReveal title={t} />
      <VideoSection />
      <Project />
      <Service />
      <Contact />
    </div>
  )
}
