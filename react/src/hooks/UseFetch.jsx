import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const useFetch = (url, method, headers, body) => {
    const [data, setData] = useState();
    const [errorStatus, setErrorStatus] = useState();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
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
    }, []);

  return {data, errorStatus};
}

export default useFetch
