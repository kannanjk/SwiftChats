import Button from '@/Components/Button'
import Session from '@/Components/Session'
import React from 'react'

function dashboard() {

  return (
    <Session>
      <h1 className='bg-yellow-50'>User deatials</h1>
      <div className='grid grid-cols-12 gap-3'>
        <Button />
        <Button />
        <Button />
      </div>
      <div className='grid grid-cols-12 gap-3'>
        <div className='col-span-3 bg-white'>
          cards
        </div>
        <div className='col-span-3 bg-white'>
          cards
        </div>
        <div className='col-span-3 bg-white'>
          cards
        </div>
        <div className='col-span-3 bg-white'>
          cards
        </div>
      </div>
      <div className='w-full flex '>
        <div className='w-[50%] bg-red-400 '>
          Chart
        </div>
        <div className='w-[50%] bg-sky-400'>
          Chart
        </div>
      </div>
    </Session>

  )
}

export default dashboard