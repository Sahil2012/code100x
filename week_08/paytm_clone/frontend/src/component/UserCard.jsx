
import React from 'react'

export default function UserCard({
    nickName,
    name
}) {
  return (
    <div className='flex justify-between p-2 shadow-xl border-b-2 items-center'>
      <div className='flex gap-2'>
        <div className='rounded-2xl bg-red-50 h-8 w-8 text-center flex justify-center items-center'>
            <div>{nickName}</div>
        </div>
        <div>
            {name}
        </div>
      </div>
      <div>
        <button className='bg-black text-white py-2 px-4 cursor-pointer rounded-md'>Send Money</button>
      </div>
    </div>
  )
}
