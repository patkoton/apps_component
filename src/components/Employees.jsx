import React from 'react'

const Employee = (props) => {
  return (
    <div>
      <h2>Employee {props.name}</h2>
      <p>{props.role ? props.role : 'No Role' }</p>
      {props.role ? <p>{props.role}</p> : <p style={{color: 'red'}}>No Role</p>}
    </div>
  )
}

export default Employee
