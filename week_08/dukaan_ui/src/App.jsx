
import React from 'react'
import RevenueCard from './components/RevenueCard'
import MenuItem from './components/MenuItem'
import MenuTop from './components/MenuTop'
import AppBar from './components/AppBar'

export default function App() {
  return (
    <div>
      <div className='grid grid-cols-3'>
      <RevenueCard title={'Next Payout'} amount={32131} warning={true} orders={12}/>
      <MenuItem />
      <MenuTop />
    </div>
    <div>
            <AppBar />
    </div>
    </div>
)
}
