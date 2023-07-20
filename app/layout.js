import './globals.css'
import Head from './Head'
import { Montserrat } from 'next/font/google'
import Navbar from './navbar'

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body>
        <Navbar />
        <div className='p-10'>
          {children}
        </div>
      </body>
    </html>
  )
}