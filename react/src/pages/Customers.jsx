import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LoginContext } from '../App';
import AddCustomer from '../components/AddCustomer';
import useFetch from '../hooks/UseFetch';
import { baseUrl } from '../shared';

const Customers = () => {
  const [customers, setCustomers] = useState();
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  const navigate = useNavigate();
  const location = useLocation();

  const url = baseUrl + 'api/customers/';
  const {data, errorStatus} = useFetch(url, 'GET', {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('access'),
  });

  function toggleShow() {
    setShow(!show)
  }

  useEffect(() => {
    console.log(data, errorStatus)
  })

  // useEffect(() => {
  //   // console.log('Fetching...')
  //   const url = baseUrl + 'api/customers/';
  //   fetch(url, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: 'Bearer ' + localStorage.getItem('access'),
  //     },
  //   })
  //     .then((response) => {
  //       if(response.status === 401) { 
  //         setLoggedIn(false);
  //         navigate('/login', {
  //           state: {
  //             previousUrl: location.pathname,
  //           }
  //         });
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // console.log(data)
  //       setCustomers(data.customers)
  //     });
  // }, []);

  // POST API Method (ADD)
  function newCustomer(name, industry) {
    const data = { name: name, industry: industry };
    const url = baseUrl + 'api/customers/';
    fetch(url, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
  })
    .then((response) => {
      if(!response.ok) {
        throw new Error('Somthing went wrong');
      }
      return response.json(); // which gives us PROMISE so we don't have another .then
    })
    .then((data) => {
      toggleShow();
      console.log(data);
      setCustomers([...customers, data.customer])
      // Assume the add was successful
      // Hide the Modal
      // Make sure the list is updated appropriately
    })
    .catch((e) => {
      console.log(e);
    });
  }

  return (
    <div>
      <h1>Here are our customers:</h1>
        {customers ? customers.map((customer) => {
          return (
          <div key={customer.id} className='m-2'>
            <Link to={"/customers/" + customer.id}>
              <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>
                {customer.name}
              </button>
            </Link>
          </div>
          )
        }) : null }
      <AddCustomer newCustomer={newCustomer} show={show} toggleShow={toggleShow} />
    </div>
  );
}

export default Customers
