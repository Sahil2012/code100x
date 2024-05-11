
import React from 'react'
import UserCard from '../component/UserCard'

export default function Dashboard() {
  return (
    <div className='w-full h-screen px-2 bg-slate-200'>
      <div className='flex justify-between '>
        <div>Payments App</div>
        <div>Hello, User U</div>
      </div>
      <div>
        Your Balance
      </div>
      <div>
        <div>
          Users
        </div>
        <div>
          <input className='p-2 rounded-lg w-full border-2 border-slate-100' type={'text'} placeholder='Search'/>
        </div>
        <div>
          <UserCard nickName={'U1'} name={'user1'}/> 
          <UserCard nickName={'U2'} name={'user2'}/>
        </div>
      </div>
    </div>
  )
}
