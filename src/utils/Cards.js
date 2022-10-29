import React from 'react'

const Cards = (props) => {
    const { image, flightNumber, missionName, yearLaunch, details } = props;
    const extractedYear = new Date(yearLaunch).getFullYear();
  return (
    <div className='flex flex-row items-center h-40 px-5 space-x-5'>
        <div className='p-5 bg-gray-200 rounded w-1/12'>
            <img className='w-20 h-20' src={image} alt='patch' />
        </div>
        <div className='flex flex-col space-y-1 w-11/12'>
            <div className='flex items-center'>
                <p className='text-2xl'>{flightNumber}: {missionName} ({extractedYear})</p>
            </div>
            <div>
                <p className='text-sm text-gray-400'>{details}</p>
            </div>
        </div>
    </div>
  )
}

export default Cards