import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';
import { baseUrl } from '../shared';

const Register = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loggedIn, setLoggedIn] = useContext(LoginContext)

   const location = useLocation();
   const navigate = useNavigate();

   // useEffect that will log users out if they visit this page
   useEffect(() => {
    localStorage.clear();
    setLoggedIn(false);
   }, []);

    function register(e) {
        e.preventDefault();
        const url = baseUrl + 'api/token/';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            localStorage.setItem('access', data.access);
            localStorage.setItem('refresh', data.refresh);
            setLoggedIn(true);
            // How to make sure your login page is not completely broken if you try to access it directly
            // Navigating to login and redirect back to the previous page
           navigate(location?.state?.previousUrl ? location.state.previousUrl : '/customers');
        })
    }

  return (
    <div>
        <form id='customer' className='w-full max-w-sm m-2' onSubmit={register}>
        <div className='md:flex md:items-center mb-6'>
            <div className='md:w-1/4'>
                <label for="username" className=''>Username</label>
            </div>
            <div className='md:w-3/4'>
                <input  type="text" 
                        id='username'
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                />
            </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
            <div className='md:w-1/4'>
                <label for="email" className=''>Email</label>
            </div>
            <div className='md:w-3/4'>
                <input  type="email" 
                        id='email'
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                />
            </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
            <div className='md:w-1/4'>
                <label for="password" className=''>Password</label>
            </div>
            <div className='md:w-3/4'>
                <input  type="password" 
                        id='password'
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                />
            </div>
        </div>
        <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>Register</button>
        </form>
    </div>
  )
}

export default Register
