import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import Navbar from './Navbar'
import { Suspense } from 'react'
import AuthProvider from './auth/provider'

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500']
});

const draculie = localFont({
  src: '../public/fonts/Draculie Free Trial.ttf',
  variable: '--font-draculie'
})

export const metadata: Metadata = {
  title: 'First NextJS App',
  description: 'NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="night">
      <body className={draculie.variable}>
        <AuthProvider>
          <Navbar />
          <main className='p-5'>
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
