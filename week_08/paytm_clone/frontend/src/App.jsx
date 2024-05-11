
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import FundTransfer from './pages/FundTransfer';
import { useState } from 'react';

const App = () => {

  const [username,setUserName] = useState('');
  const [token,setToken] = useState('');

  return <div className='bg-[#2f3437] h-screen flex items-center justify-center'>
    <BrowserRouter>
      <Routes>
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/signIn' element={<SignIn setToken={setToken} setUserName={setUserName}/>} />
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/send' element={<FundTransfer />} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;