import '@styles/globals.css'

import {Providers} from './GlobalRedux/provider'

import { Inter, Inconsolata } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })
const inconsolata = Inconsolata({ subsets: ['latin', 'latin-ext'], weights: ['400', '700'] })

export const metadata = {
  title: 'Sayak Sarkar',
  description: 'Hi, I am Sayak your friendly neighbourgood fullstack Web-developer',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inconsolata.className + " bg-vs-gray-6 h-screen overflow-hidden "}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
