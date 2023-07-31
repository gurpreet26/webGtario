import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import './globals.css'


import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
