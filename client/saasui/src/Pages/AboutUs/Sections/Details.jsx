import React from 'react'

function Details() {
  return (
    <section className='grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24 lg:gap-24 items-center justify-between md:px-6'>
        <div className=''>
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>4.2 m</h1>
            <p className='text-gray-600 text-xl'>Users tracked their data product per daily</p>
        </div>
        <div className=''>
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>2014</h1>
            <p className='text-gray-600 text-xl'>Our Experience has been 7 years since 2014</p>
        </div>
        <div className=''>
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>426</h1>
            <p className='text-gray-600 text-xl'>Employees who work with us from different countries</p>
        </div>
        <div className=''>
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>24+</h1>
            <p className='text-gray-600 text-xl'>More than 30 countries trust our platform</p>
        </div>
    </section>
  )
}

export default Details