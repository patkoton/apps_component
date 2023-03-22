import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const useFetch = (url, { method, headers, body } = {}) => { // Assigning an empty oblect if the objects are undefined
    const [data, setData] = useState();
    const [errorStatus, setErrorStatus] = useState();
    const navigate = useNavigate();
    const location = useLocation();

    function request() {
        fetch(url, {
            method: method,
            headers: headers,
            body: body,
        })
            .then((response) => {
                if(response.status === 401) {
                    navigate('/login', {
                        state: {
                          previousUrl: location.pathname,
                        }
                    });
                }
                if(!response.ok) {
                    throw(response.status);
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
            })
            .catch((e) => {
                setErrorStatus(e);
            })
    };

    function appendData(newData) {
        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(newData)
        })
        .then((response) => {
            if(response.status === 401) {
                navigate('/login', {
                    state: {
                      previousUrl: location.pathname,
                    }
                })
            }
            if(!response.ok) {
                throw(response.status);
            }
            return response.json();
        })
        .then((d) => {
            const submitted = Object.values(d)[0]; // we grabbed the new object that is being added
            const newState = { ...data }; // we dubplicate the existing states which is new state in memory
            Object.values(newState)[0].push(submitted); // we pushed the new object unto the new state
            setData(newState); // New object, it's seen as a new state change, causing the page to re-render and the data to show up on the page immediately
        })
        .catch((e) => {
            console.log(e);
            setErrorStatus(e);
        })
    }

  return { request, appendData, data, errorStatus};
}

export default useFetch
