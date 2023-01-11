import React from 'react'
import Picture from '../assets/img/anonymous.webp'

const Employee = (props) => {
  return (
    // <div>
    //   <h2>Employee {props.name}</h2>
    //   <p>{props.role ? props.role : 'No Role' }</p>
    //   {props.role ? <p>{props.role}</p> : <p style={{color: 'red'}}>No Role</p>}
    // </div>
    <div className='py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:space-y-0 sm:space-x-6 sm:mb-2'>
        <img src={Picture} alt="woman's face" className='block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0' />
        <div className='text-center space-y-2 sm:text-left'>
        <div className='space-y-0.5'>
          <p className='text-lg text-black font-semibold'>
          Erin Lindford
          </p>
          <p className='text-slate-500 font-medium'>
            Product Engineer
          </p>
        </div>
          <button type="" className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-600 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>Message</button>
        </div>
    </div>
  )
}

export default Employee
