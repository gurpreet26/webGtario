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
  title: ' Gurpreet Singh |Web Developer in Hamilton, Canada | WordPress, Online Booking, and Custom Website Services  ',
  description: 'Dedicated and experienced web developer who is committed to providing high-quality, bespoke solutions for your online business needs. Whether you require a captivating WordPress website, a seamless online booking website, or a unique custom website',
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
