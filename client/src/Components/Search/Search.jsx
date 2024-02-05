import React from 'react'
import { BsSearch } from "react-icons/bs";
import './Search.css'
const Search = () => {
  return (
    <div className='search-p'>
        <div className="search">
            <div className='search-input-div'><input type="text" placeholder='Search here...' /></div>
            
            <div><button className='search-button'><BsSearch /></button></div>
        </div>
      
    </div>
  )
}

export default Search
