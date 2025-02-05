import React, { useRef } from 'react'

function Search(props) {
    const searchInput = useRef()
  return (
    <div className='sm:flex  shadow-black'>
      <input type="search" value={props.searchData} 
        onChange={()=>props.eventHandler(searchInput.current.value)} 
        ref={searchInput}
        className="mx-1 ml-19 font-medium text-2xl sm:w-xl border-2 border-black rounded p-3 " />
      <button onClick={props.searchWeather} 
        className='p-2 font-bold text-2xl mx-2 border-2 rounded-xl bg-blue-950 text-white border-black cursor-pointer hover:bg-amber-200 hover:text-black duration-700 '
            >Search
        </button>
    </div>
  )
}

export default Search
