import React from 'react'
import { FaHome, FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Sidebar = ({children}) => {
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
      <div className='sidebar'>
        <div className='top_section'>
            <h1 className='logo'>Logo</h1>
            <div className='bars'>
                <FaBars />
            </div>
        </div>
        {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeClassName="active">
                <div className='icon'>{item.icon}</div>
                <div className='link_text'>{item.name}</div>
            </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar
