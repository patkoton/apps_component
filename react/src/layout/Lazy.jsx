import React from 'react'
import logo from '../logo.svg'

const Lazy = () => {

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <img alt='Lazy Loader Logo' src={logo} className='w-80' />
    </div>
  )
}

export default Lazy