import React, { useState } from 'react'
import Employees from '../components/Employees'

const Dashboard = () => {
  const [role, setRole] = useState('dev')
  const showEmployee = true
  return (
    <div style={{marginLeft: '20px'}}>
    { showEmployee ? (
      <>
      <input type="text" onChange={(e) => {
        setRole(e.target.value)
      }} />
      <Employees name='Tiwa' role='Intern' />
      <Employees name='Jose' role={role} />
      <Employees name='Abi' />
      </>
     ) : (
      <h1>You cannot see the Employees!</h1>
     )
    }
    </div>
  )
}

export default Dashboard
