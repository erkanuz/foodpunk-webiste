import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Styles/search.css'

import {FiSearch} from 'react-icons/fi'

const Search = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandle = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    }
  return (
    <form className='searchbar' onSubmit={submitHandle}>
    <FiSearch className='icon'/>
    <input onChange={(e) => setInput(e.target.value)} placeholder='Search' type="text" className='search' value={input} />
    </form>
  );
}

export default Search