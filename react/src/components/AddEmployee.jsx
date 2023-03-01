import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

const AddEmployees = (props) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [img, setImg] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button onClick={handleShow} className="block mx-auto my-3 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"> + Add Employee</button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>

      <form onSubmit={(e) => {
        // To prevent it from reloading
        e.preventDefault();
        // To refresh values everytime we add
        setName('')
        setRole('')
        setImg('')
        // console.log('Hello from edit employee')
        // console.log(props.id , name, role)
        props.newEmployee( name, role, img );
        handleClose();
      }} id='editModal' class="bg-white rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Full Name
          </label>
          <input  class="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"   
                  id="name" 
                  type="text" 
                  placeholder="John Smith" 
                  value={name}
                  onChange={(e) => {setName(e.target.value)}}
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="role">
            Role
          </label>
          <input  class="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="role" 
                  type="text" 
                  placeholder="Bank Teller" 
                  value={role}
                  onChange={(e) => {setRole(e.target.value)}}
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="img">
            Image URL
          </label>
          <input  class="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="img" 
                  type="text" 
                  placeholder="https://images.pexels.com" 
                  value={img}
                  onChange={(e) => {setImg(e.target.value)}}
          />
        </div>
      </form>
      </Modal.Body>
      <Modal.Footer>
        <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded' onClick={handleClose}>Close</button>
        <button form='editModal' className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>Add</button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default AddEmployees
