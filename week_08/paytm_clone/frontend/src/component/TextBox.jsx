import React from 'react'

export default function TextBox({title,type,placeholder,setValue}) {
  return (
    <div className='py-2'>
        <div className='font-bold mb-1'> {title} </div>
        <input onChange={(e) => setValue(e.target.value)} className='p-2 rounded-lg w-full border-2 border-black' type={type} placeholder={placeholder} />
    </div>
  )
}
