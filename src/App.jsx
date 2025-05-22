import React from 'react'
import Navbar from './Shared/Navbar'
import Footer from './Shared/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16'>
      <Navbar />
        <Outlet />
      <Footer />
    </div>
  )
}

export default App