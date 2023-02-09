import React, { useState } from 'react'
import AddEmployees from '../components/AddEmployee';
import Employees from '../components/Employees'
import { v4 as uuidv4 } from 'uuid'
import EditEmployees from '../components/EditEmployees';

const Dashboard = () => {
  // const [role, setRole] = useState('Dev');
  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: "Caleb", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
      },
      {
        id: 2,
        name: "Sal", 
        role: "Manager", 
        img: "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg"
      },
      {
        id: 3,
        name: "John", 
        role: "Director of Eng.", 
        img: "https://images.pexels.com/photos/1249311/pexels-photo-1249311.jpeg"
      },
      {
        id: 4,
        name: "Melanin", 
        role: "Software Engineer", 
        img: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg"
      },
      {
        id: 5,
        name: "Corey", 
        role: "The Devops Guy", 
        img: "https://images.pexels.com/photos/3907440/pexels-photo-3907440.jpeg"
      },
      {
        id: 6,
        name: "Jake", 
        role: "YouTube Sensation", 
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
      }
    ]
  );
  const showEmployee = true


  const updateEmployee = (id, newName, newRole) => {
      const updatedEmployee = employees.map((employee) => {
        if (id === employee.id) {
          //RETURN NEW EMPLOYEE
          return {...employee, name: newName, role: newRole}
        }
        return employee;
      })
      setEmployees(updatedEmployee)
  }

  const newEmployee = (name, role, img) => {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    }
    setEmployees([...employees, newEmployee])
  }

  return (
    <div className=''>
    { showEmployee ? (
    <>
        <div className='pt-3 flex flex-wrap justify-center'>
          {employees.map((employee) => {
            console.log(employee);
            const editEmployee = <EditEmployees  
              id={employee.id}
              name={employee.name} 
              role={employee.role} 
              updateEmployee={updateEmployee}
            />
            return (
              <Employees  key={employee.id}
                          id={employee.id}
                          name={employee.name} 
                          role={employee.role}
                          img={employee.img}
                          editEmployee={editEmployee}
            />
            )
          })}
        </div>
        <AddEmployees newEmployee={newEmployee} />
    </>
     ) : (
      <h1>You cannot see the Employees!</h1>
     )
    }
    </div>
  )
} 

export default Dashboard
