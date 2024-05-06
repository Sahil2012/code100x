
import React from 'react'
import SideBar from '../components/SideBar';
import AppBar from '../components/AppBar';
import OvalButtons from '../components/OvalButtons';


export default function Dashboard() {
  return (
    <div className='flex relative'>
        <SideBar />
        <div className='grow'>
            <AppBar />
            <div>
            
            </div>
        </div>
    </div>
  )
}
