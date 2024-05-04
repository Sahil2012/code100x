
import React from 'react'

export default function MenuButton() {
  return (
    <div className='flex w-52 bg-black text-slate-50 p-3 justify-start rounded-xl hover:bg-gray-800 focus:font-bold cursor-pointer'>
      <div className='mr-8'>
        logo
      </div>
      <div className='font-normal'>
        Home
      </div>
    </div>
  )
}
