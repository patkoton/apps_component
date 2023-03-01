import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { baseUrl } from '../shared';

const Customer = () => {
    const { id } = useParams();
    const [customer, setCustomer] = useState();
    const [notFound, setNotFound] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        // console.log('useEffect');
        const url = baseUrl + "api/customers/" + id;
        fetch(url)
            .then((response) => {
                if (response.status === 404) {
                    // redirect to a 404 page (New URL with useNavigate)
                    // --  navigate('/404')
                    // render a 404 component in this page
                    setNotFound(true)
                }
                return response.json()
            })
            .then((data) => {
                setCustomer(data.customer)
            })
    }, [])

  return (
    <div>
    {notFound ? <p>The Customer with ID {id} was not found</p> : null}
      {customer ? 
        <div>
            <p>{customer.id}</p>
            <p>{customer.name}</p>
            <p>{customer.industry}</p>
        </div>
        : null }
        <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' 
                onClick={() => {
          // DELETE API Method
          const url = baseUrl + 'api/customers/' + id;
          fetch(url, { method: 'DELETE', headers: {
            'Content-Type': 'application/json'
          } })
            .then((response) => {
              if (!response.ok) {
                throw new Error('Something went wrong')
              }
              // // return response.json()
              // Assume things went well
              navigate('/customers');
            })
            .catch((e) => {
              console.log(e)
            })
        }}>
          Delete
        </button> <br />
        <Link to='/customers'>Go Back</Link>
    </div>
  )
}

export default Customer
