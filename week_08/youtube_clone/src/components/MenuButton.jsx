
import React from 'react'

export default function MenuButton() {
  return (
    <div className='flex w-54 bg-black text-slate-50 p-3 justify-start rounded-xl hover:bg-gray-800 focus:font-bold cursor-pointer items-center my-2 mx-1'>
      <div className='mr-8 ml-4 h-5 w-5'>
        <img src='/src/assets/icons8-home.svg'/>
      </div>
      <div className='font-normal'>
        Home
      </div>
    </div>
  )
}
