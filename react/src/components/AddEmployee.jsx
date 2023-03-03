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
      }} id='editModal' class="w-full max-w-sm">
        <div class="md:flex md:items-center mb-6">
         <div className='md:w-1/3'>
          <label class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
          Full Name
          </label>
         </div>
          <div className='md:w-2/3'>
            <input  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"   
                    id="name" 
                    type="text" 
                    placeholder="John Smith" 
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div className='md:w-1/3'>
            <label class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" for="role">
              Role
            </label>
          </div>
          <div className='md:w-2/3'>
            <input  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="role" 
                    type="text" 
                    placeholder="Bank Teller" 
                    value={role}
                    onChange={(e) => {setRole(e.target.value)}}
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div className='md:w-1/3'>
            <label class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" for="img">
            Image URL
            </label>
          </div>
          <div className='md:w-2/3'>
            <input  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="img" 
                    type="text" 
                    placeholder="https://images.pexels.com" 
                    value={img}
                    onChange={(e) => {setImg(e.target.value)}}
            />
          </div>
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
