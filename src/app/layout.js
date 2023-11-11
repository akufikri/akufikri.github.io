import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { Poppins } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aku Fikri...',
  description: 'Ini Adalah Website Protofolio Aku',
}
const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/fbadad80a0.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
