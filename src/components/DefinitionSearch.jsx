import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DefinitionSearch = () => {
    const [word, setWord] = useState();
    const navigate = useNavigate();

    // // no dependency array - update for any change
    // useEffect(() => {
    //     console.log('State Updated ' + word)
    // })
    // // empty dependency array - execute once
    // // passing in data - only execute when those variables are changed
    // with form you can use the enter key to submit
  return (
    <form className='flex space-between space-x-2 max-w-[350px] mt-2' onSubmit={() => {
        navigate('/dictionary/' + word) 
      }}>
        <input  type="text" 
                placeholder='dinosaur'
                className='px-2 py-1 shrink min-w-0 outline-none rounded' 
                onChange={(e) => {
          setWord(e.target.value)
        }} />
      <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-1 px-2 rounded'>Search</button>
      </form>
  )
}

export default DefinitionSearch
