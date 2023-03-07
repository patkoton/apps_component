import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { baseUrl } from '../shared';

const Customer = () => {
    const { id } = useParams();
    const [customer, setCustomer] = useState();
    const [tempCustomer, setTempCustomer] = useState(); // Keeping track of previous value in the new value
    const [notFound, setNotFound] = useState();
    const [changed, setChanged] = useState(false);
    const [error, setError] = useState();
    const navigate = useNavigate();

    // useEffect on any State changed
    // Bolean flags that assumes they are equal checking the properties
    // useEffect is guaranteed to execute after the state has been updated
    useEffect(() => {
      // console.log('customer', customer);
      // console.log('temp customer', tempCustomer);
      // console.log(changed);
      if (!customer) return;
      if (!customer) return;

      let equal = true;
      if(customer.name !== tempCustomer.name) equal = false;
      if(customer.industry !== tempCustomer.industry) equal = false;
      if(equal) setChanged(false);
    })

    useEffect(() => {
        // console.log('useEffect');
        const url = baseUrl + "api/customers/" + id;
        fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('access'),
          },
        })
            .then((response) => {
                if(response.status === 404) {
                    // redirect to a 404 page (New URL with useNavigate)
                    // --  navigate('/404')
                    // render a 404 component in this page
                    setNotFound(true);
                } else if(response.status === 401) {
                  navigate('/login');
                }
                if(!response.ok) { 
                  console.log('response', response)
                  throw new Error('Something went wrong, try again later');
              }
                return response.json();
            })
            .then((data) => {
                setCustomer(data.customer);
                setTempCustomer(data.customer);
                setError(undefined); // To remove error on success
            })
            .catch((e) => {
              setError(e.message);
            })
    }, [])

    // POST API Method (UPDATE)... making a request to the Backend to update the data
    function updateCustomer(e) {
      e.preventDefault();
      const url = baseUrl + "api/customers/" + id;
      fetch(url, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('access'),
            },
            body: JSON.stringify(tempCustomer)
          })
          .then((response) => {
            if(response.status === 401) {
              navigate('/login');
            }
            // console.log('response', response);
            if(!response.ok) throw new Error('Something went wrong');
            return response.json();
          })
          .then((data) => {
            // console.log(data);
            setChanged(false); // i.e., on a successful response, setChanged to false to clear the buttons
            setCustomer(data.customer); // Multiple changes 
            setError(undefined); // Update customer, if something does work
          })
          .catch((e) => {
            // console.log('e', e);
            setError(e.message); // Conditionally display the error on the page
          });
    }

  return (
    <div className='p-3'>
    {notFound ? <p>The Customer with ID {id} was not found</p> : null}
      {customer ? 
        <div>
          <p className="m-2 px-2 block outline-none">{customer.id}</p>
          <form id='customer' className='w-full max-w-sm' onSubmit={updateCustomer}>
          <div className='md:flex md:items-center mb-6'>
            <div className='md:w-1/4'>
              <label for="name" className=''>Name</label>
            </div>
            <div className='md:w-3/4'>
              <input  type="text" 
                        id='name'
                        value={tempCustomer.name} 
                        onChange={(e) => {
                          setTempCustomer({ ...tempCustomer, name: e.target.value}) //Taking initial value first and replacing with new
                          setChanged(true)
                        }}
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                />
            </div>
          </div>
          <div className='md:flex md:items-center mb-6'>
            <div className='md:w-1/4'>
              <label for="industry" className=''>Industry</label>
            </div>
            <div className='md:w-3/4'>
              <input  type="text" 
                        id='industry'
                        value={tempCustomer.industry} 
                        onChange={(e) => {
                          setTempCustomer({ ...tempCustomer, industry: e.target.value})
                          setChanged(true)
                        }}
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
              />
            </div>
          </div>
          </form>
                  {changed ? 
                    <div className='mb-2'>
                    <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 mr-2 rounded'
                            onClick={(e) => {
                              setTempCustomer({ ...customer}) // Reseting the temp state to be the same as original state
                              setChanged(false)
                            }}>Cancel</button>
                    <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
                            form="customer">Save</button>
                    </div> 
                    : null}
          <div>
            <button className='bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded' 
                    onClick={() => {
              // DELETE API Method
              const url = baseUrl + 'api/customers/' + id;
              fetch(url, { 
                method: 'DELETE', 
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer ' + localStorage.getItem('access'),
              }, })
                .then((response) => {
                  if(response.status === 401) {
                    navigate('/login');
                  }
                  if (!response.ok) {
                    throw new Error('Something went wrong');
                  }
                  // // return response.json()
                  // Assume things went well
                  // setError(undefined); // Update the error on success before navigating
                  navigate('/customers');
                })
                .catch((e) => {
                  // console.log(e)
                  setError(e.message); // If there's an error deleting
                })
            }}>
              Delete
            </button>
          </div>
        </div>
        : null }
        {error ? <p>{error}</p> : null}
         <br />
        <Link to='/customers'>
          <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>
            ← Go Back
          </button>
        </Link>
    </div>
  )
}

export default Customer


// Alternate to onbclick navigating...