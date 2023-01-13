import React, { useState } from 'react'
import Employees from '../components/Employees'
// import { v4 as uuidv4 } from 'uuid'


const Dashboard = () => {
  // const [role, setRole] = useState('Dev');
  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: "Caleb", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: 2,
        name: "Sal", 
        role: "Manager", 
        img: "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: 3,
        name: "John", 
        role: "Director of Eng.", 
        img: "https://images.pexels.com/photos/1249311/pexels-photo-1249311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: 4,
        name: "Melanin", 
        role: "Software Engineer", 
        img: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: 5,
        name: "Corey", 
        role: "The Devops Guy", 
        img: "https://images.pexels.com/photos/3907440/pexels-photo-3907440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: 6,
        name: "Jake", 
        role: "YouTube Sensation", 
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ]
  );
  const showEmployee = true


  const updateEmployee = (id, newName, newRole) => {
      const updatedEmployee = employees.map((employee) => {
        if (id === employee.id) {
          return {...employee, name: newName, role: newRole}
        }
        return employee;
      })
      setEmployees(updatedEmployee)

  }

  return (
    <div className='pt-5 ml-4'>
    { showEmployee ? (
    <>
        <div className='flex flex-wrap justify-center'>
          {employees.map((employee) => {
            console.log(employee);
            return (
              <Employees  key={employee.id}
                          id={employee.id}
                          name={employee.name} 
                          role={employee.role}
                          img={employee.img}
                          updateEmployee={updateEmployee}
            />
            )
          })}
        </div>
    </>
     ) : (
      <h1>You cannot see the Employees!</h1>
     )
    }
    </div>
  )
}

export default Dashboard
