
import React from 'react'
import TextBox from './TextBox'

export default function SendMoneyCard({
    firendsName,
    nameInitial
}) {
  return (
    <div className='bg-slate-50 py-4 px-8 rounded-lg flex flex-col justify-center items-center gap-2'>
      <div className='font-bold text-xl mb-6'>
        Send Money
      </div>
      <div className='w-full flex items-center gap-2'>
        <div className='bg-red-300 w-[40px] h-[40px] rounded-3xl flex justify-center items-center text-white'><div>{nameInitial}</div></div>
        <div>{firendsName}</div>
      </div>
      <TextBox placeholder={'Enter Amount'} type={'Number'} title={'Amount (in Rs)'}/>
      <button className='bg-green-500 text-white w-full py-2 shadow-md rounded-md'>Initiate Transfer</button>
    </div>
  )
}
