import React, { lazy, Suspense } from 'react'
// import Contents from '../components/Contents'
import Searchbar from '../components/Searchbar'
const Contents = lazy(() => import('../components/Contents'));

const Homepage = () => {
  return (
    <div className='bg-gray-300 pt-16 min-h-screen'>
        <Searchbar />
        <Suspense fallback={<div className='flex justify-center items-center min-h-screen'>Loading...</div>}>
            <Contents />
        </Suspense>     
    </div>
  )
}

export default Homepage