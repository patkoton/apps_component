import React from 'react'
import { FaHome, FaUserAlt } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'
import { RiDashboard3Fill } from 'react-icons/ri'
import { GoBook } from 'react-icons/go'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { MdMoveToInbox, MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const Sidebar2 = ({ isOpen, toggle }) => {
        const menuItem = [
            {
                path: "/",
                name: "Dashboard",
                icon: <RiDashboard3Fill />,
                sub: ''
            },
            {
                path: "/kanban",
                name: "Kanban",
                icon: <FaHome />,
                sub: 'Pro'
            },
            {
                path: "/inbox",
                name: "Inbox",
                icon: <MdMoveToInbox />,
                sub: '3'
            },
            {
                path: "/users",
                name: "Users",
                icon: <FaUserAlt />
            },
            {
                path: "/products",
                name: "Products",
                icon: <MdOutlineProductionQuantityLimits />
            },
            {
                path: "/sign-in",
                name: "Sign In",
                icon: <FiLogIn />
            },
            {
                path: "/sign-up",
                name: "Sign Up",
                icon: <GoBook />
            }
        ]
  return (
    <div>
        <div className={`fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full bg-white border-none sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 ${isOpen ? 'w-[250px]' : 'w-[75px]'}`} aria-label="Sidebar">
        <div className="h-full pt-3 px-3 pb-4 overflow-y-auto bg-gray-800 dark:bg-gray-700">
            <div className='top_section mb-2'>
                <h1 className='text-2xl text-gray-100 font-semibold ml-2' style={{display: isOpen ? 'block' : 'none'}}>Logo</h1>
                <div className='flex ml-2 cursor-pointer'>
                    <HiOutlineMenuAlt3 className='text-2xl text-gray-100' onClick={toggle} />
                </div>
            </div>
            <div className="space-y-2">
                {menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-600 group-hover:text-gray-800" activeClassName="active">
                    <div className="flex-shrink-0 text-2xl text-gray-100 transition duration-75 dark:text-gray-400 hover:text-gray-800 group-hover:text-gray-900 dark:group-hover:text-white">{item.icon}</div>
                    <span className="flex-1 ml-3 whitespace-nowrap text-gray-100 hover:text-gray-800" style={{display: isOpen ? 'block' : 'none'}}>{item.name}</span>
                    <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300" style={{display: isOpen ? 'block' : 'none'}}>{item.sub}</span>
                    </NavLink>
                ))}
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Sidebar2
