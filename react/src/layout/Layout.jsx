import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar2 from '../components/Sidebar2'

const Layout = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
  return (
    <div className='w-full'>
    <Header isOpen={isOpen} />
    <Sidebar2 isOpen={isOpen} toggle={toggle} />
      <div className={`bg-gray-300 float-right ${!isOpen ? 'w-full md:pl-16' : 'w-[calc(100%-250px)]'}`}>
        <div className='max-w-7xl min-h-screen mx-auto px-3 py-2'>
            {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout