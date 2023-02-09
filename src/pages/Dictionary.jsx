import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dictionary = () => {
    const [word, setWord] = useState();
    const navigate = useNavigate();

    // // no dependency array - update for any change
    // useEffect(() => {
    //     console.log('State Updated ' + word)
    // })
    // // empty dependency array - execute once
    // // passing in data - only execute when those variables are changed
  return (
    <div>
      <input type="text" className='py-2 px-4 outline-none' onChange={(e) => {
        setWord(e.target.value)
      }} />
    <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4' onClick={() => {
      console.log('button clicked');
      navigate('/definition/' + word, { replace: true }) 
    }}>Search</button>
    </div>
  )
}

export default Dictionary
