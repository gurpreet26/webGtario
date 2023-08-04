import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import './globals.css'
import Favicon from '/public/favicon.ico';

import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 
export const metadata = {
  icons: [{ rel: 'icon', url: Favicon.src }],
  title: 'Online Booking or Appointment Scheduling Website across ontario, british columbia, alberta, manitoba ',
  description: 'Experienced in the convenience of our online booking website for effortless appointment scheduling. Simplify your life and book appointments with ease. Try it now! Find web developers near you!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
      <body className='bg-gray-950'>
      <div className={roboto.className}>
      <NavBar></NavBar>
        {children}
        <Footer/>
 
    </div>
       
 
   
        </body>
    

    </html>
  )
}
