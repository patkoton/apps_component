import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {  useParams, useNavigate, Link } from 'react-router-dom'
import NotFound from '../components/NotFound';
import DefinitionSearch from '../components/DefinitionSearch';


const Definition = () => {
    const [word, setWord] = useState();
    const [error, setError] = useState(false);
    // For our search to stay in searchbar
    const [notFound, setNotFound] = useState(false)
    // console.log(useParams());
    let { search } = useParams();
    // Redirect with navigate
    const navigate = useNavigate();
    

    useEffect(() => {
        //const url = 'https://httpstat.us'
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + search
        fetch(url)
        .then((response) => {
          if (response.status === 404) {
             //console.log(response.status)
            // // Redirecting with navigate
            // navigate('/404');
            setNotFound(true);
          } else if (response.status === 401) {
            navigate('./login')
          } else if (response.status === 500) {
            setError(true);
          }
          if (!response.ok) {
            setError(true);
            throw new Error('Something went wrong');
          }

          return response.json()
        })
        .then((data) => {
            setWord(data[0].meanings);
            // console.log(data[0].meanings[0].definitions[0].definition);
        })
        .catch((e) => {
          console.log(e.message);
        })
    }, [])

    if (notFound === true) {
      return (
        <>
          <NotFound />
          <Link to='/dictionary'>Search Another</Link>
        </>
        );
    }
    if (error === true) {
      return (
        <>
          <p>Something went wrong, try again?</p>
          <Link to='/dictionary'>Search Another</Link>
        </>
        );
    }
  return (
    <>
        {word ? 
          <> 
          <h1>Here is our definition:</h1>
            {word.map((meaning) => {
              return <p key={uuidv4()}>{meaning.partOfSpeech + ':'} {meaning.definitions[0].definition}</p>
            })}
            <p>Search another</p> 
            <DefinitionSearch />
          </> 
      : <p>Loading...</p>}
    </>
  );
}

export default Definition
