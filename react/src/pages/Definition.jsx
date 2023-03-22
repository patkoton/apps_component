import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {  useParams, useNavigate, Link, useLocation } from 'react-router-dom'
import NotFound from '../components/NotFound';
import DefinitionSearch from '../components/DefinitionSearch';
import useFetch from '../hooks/UseFetch';


const Definition = () => {
    // const [word, setWord] = useState();
    // const [error, setError] = useState(false);
    // // For our search to stay in searchbar
    // const [notFound, setNotFound] = useState(false)
    // console.log(useParams());
    let { search } = useParams();
    // Redirect with navigate
    const navigate = useNavigate();
    const location = useLocation();
    const { request, data: [{ meanings: word }] = [{}], errorStatus } = useFetch(
      'https://api.dictionaryapi.dev/api/v2/entries/en/' + search)

    useEffect(() => {
      request();
    })

    if (errorStatus === 404) {
      return (
        <>
          <NotFound />
          <Link to='/dictionary'>Search Another</Link>
        </>
        );
    }
    if (errorStatus) {
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
