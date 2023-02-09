import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

const EditEmployees = (props) => {
  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button onClick={handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Update</button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>

      <form onSubmit={(e) => {
        e.preventDefault();
        // console.log('Hello from edit employee')
        // console.log(props.id , name, role)
        props.updateEmployee( props.id, name, role);
        handleClose();
      }} id='editModal' class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Employee Name
          </label>
          <input  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"   
                  id="name" 
                  type="text" 
                  placeholder="Name" 
                  value={name}
                  onChange={(e) => {setName(e.target.value)}}
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="role">
            Employee Role
          </label>
          <input  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="role" 
                  type="text" 
                  placeholder="Role" 
                  value={role}
                  onChange={(e) => {setRole(e.target.value)}}
          />
        </div>
      </form>
      </Modal.Body>
      <Modal.Footer>
        <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded' onClick={handleClose}>Close</button>
        <button form='editModal' className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>Update</button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default EditEmployees
