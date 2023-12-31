
import Nav from './Components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'
// import  CentralData  from './Allcontext/Context'
import  CentralData  from './Components/Contextres'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Youtube',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>

        <CentralData>
          <Nav />
          {children}
        </CentralData>

      </body>
    </html>
  )
}
