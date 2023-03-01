import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

const AddCustomer = (props) => {
  const [name, setName] = useState('');
  const [industry, setIndustry] = useState('');

  // Reading from the parent(Customers)
  const [show, setShow] = useState(props.show);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button onClick={props.toggleShow} className="block mx-auto my-3 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"> + Add Customer </button>

      <Modal
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <form onSubmit={(e) => {
        // To prevent it from reloading
        e.preventDefault();
        // To refresh values everytime we add
        setName('')
        setIndustry('')
        // console.log('Hello from edit employee')
        // console.log(props.id , name, role)
        props.newCustomer( name, industry );
      }} 
      id='editmodal' class="bg-white rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input  class="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"   
                  id="name" 
                  type="text" 
                  placeholder="Google" 
                  value={name}
                  onChange={(e) => {setName(e.target.value)}}
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="industry">
            Industry
          </label>
          <input  class="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="industry" 
                  type="text" 
                  placeholder="Computing" 
                  value={industry}
                  onChange={(e) => {setIndustry(e.target.value)}}
          />
        </div>
      </form>
      </Modal.Body>
      <Modal.Footer>
        <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded' onClick={props.toggleShow}>Close</button>
        <button form='editmodal' className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>Add</button>
      </Modal.Footer>
      </Modal>
  </>
  )
}

export default AddCustomer
