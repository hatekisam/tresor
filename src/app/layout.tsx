import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const poppins = Poppins({ subsets: ['latin'], weight:['100', '200','300','400','500','600','700','800','900']})

export const metadata: Metadata = {
  title: 'RCA APP',
  description: 'This is the rca application for students,teachers and administration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Admin Portal</title>
        <link rel='icon' href='/favicon.png' />
      </head>
      <body  className={poppins.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
