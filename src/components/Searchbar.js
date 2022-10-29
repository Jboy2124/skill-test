import React from 'react'

const Searchbar = () => {
  return (
    <div className='container flex justify-center items-center mx-auto py-5'>
        <input className='italic text-sm outline-none border border-gray-400 py-2 px-1 rounded w-full' 
                type='text'
                placeholder='Enter keywords'
                 />
    </div>
  )
}

export default Searchbar