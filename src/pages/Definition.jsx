import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {  useParams, useNavigate, Link } from 'react-router-dom'
import NotFound from '../components/NotFound';


const Definition = () => {
    const [word, setWord] = useState();
    const [notFound, setNotFound] = useState(false)
    // console.log(useParams());
    let { search } = useParams();
    const navigate = useNavigate();
    

    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
        .then((response) => {
          if (response.status === 404) {
            // console.log(response.status)
            // // Redirecting with navigate
            // navigate('/404');
            setNotFound(true);
          }
          return response.json()
        })
        .then((data) => {
            setWord(data[0].meanings);
            // console.log(data[0].meanings[0].definitions[0].definition);
        });
    }, [])

    if (notFound === true) {
      return (
        <>
          <NotFound />
          <Link to='/dictionary'>Search Another</Link>
        </>
        )
    }
  return (
    <>
        {word ? 
          <> 
          <h1>Here is our definition:</h1>
            {word.map((meaning) => {
              return <p key={uuidv4()}>{meaning.partOfSpeech + ':'} {meaning.definitions[0].definition}</p>
            })} 
          </> 
      : <p>Loading...</p>}
    </>
  );
}

export default Definition
