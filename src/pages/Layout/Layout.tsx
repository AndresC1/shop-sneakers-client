import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

export default function Layout() {
  return (
    <main className='flex justify-between flex-col h-auto min-h-[100vh]'>
        <div>
          <Navbar />
          <Outlet />
        </div>
        <Footer/>
    </main>
  )
}
