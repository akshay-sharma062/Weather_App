import React from 'react'

export default function Result(props) {
  return (
    <div className='mt-10  shadow-black'>
      <h1 className='text-6xl text-center'>City</h1>
      <div className='flex justify-around mt-4 text-2xl'>
        <div>Max temp : 20deg</div>
        <div>Min temp : 20deg</div>
      </div>
      <div className='flex justify-around mt-4 text-2xl'>
        <div>Icon</div>
        <div>Weather Type</div>
      </div>
    </div>
  )
}
