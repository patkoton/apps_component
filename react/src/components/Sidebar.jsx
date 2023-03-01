import React, { useState } from 'react'
import { FaHome, FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Sidebar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
    const menuItem = [
        {
            path: "/",
            name: "dashboard",
            icon: <FaHome />
        },
        {
            path: "/about",
            name: "about",
            icon: <FaHome />
        }
    ]
  return (
    <div className='container'>
      <div className={isOpen ? 'sidebar' : 'sidebar_open'} >
        <div className='top_section'>
            <h1 className='text-2xl font-semibold ml-2 logo' style={{display: isOpen ? 'block' : 'none'}}>Logo</h1>
            <div className={isOpen ? 'bars' : 'bars_open'}>
                <FaBars onClick={toggle} />
            </div>
        </div>
        {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link text-purple-600 hover:text-purple-600" activeClassName="active">
                <div className='icon'>{item.icon}</div>
                <div className='link_text' style={{display: isOpen ? 'block' : 'none'}}>{item.name}</div>
            </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div> 
  )
}

export default Sidebar
