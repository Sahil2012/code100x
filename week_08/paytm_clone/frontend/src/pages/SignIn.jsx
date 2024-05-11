import React, { useState } from 'react'
import TextBox from "../component/TextBox";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignIn({setToken}) {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const signInRequest = async () => {
    console.log(email);
    console.log(password);

    const requestBody = {
      'username' : email,
      'password' : password
    }

    
    const response = await axios.post('http://localhost:3000/api/v1/user/signIn',requestBody);
    
    console.log(response.data.token);
    if(response.data.token) {
      localStorage.setItem('token',response.data.token);
      navigate('/dashboard');
    } else {
      alert('Invalid credentials.')
    }
  }
  return (
    <div className="bg-white shadow-lg rounded-lg flex justify-center items-center flex-col p-4 min-w-40 max-w-[330px] gap-1">
      <div className=" font-bold text-3xl">Sign In</div>
      <div className=" text-center text-base">
        Enter your credentials to access your acoount
      </div>
      <div className="w-full">
        <div className=" w-full">
          <TextBox
            title={"Email"}
            placeholder={"abc@email.com"}
            type={"email"}
            setValue = {setEmail}
          />
        </div>
        <div className=" w-full">
          <TextBox
            title={"Password"}
            placeholder={"password"}
            type={"password"}
            setValue = {setPassword}
          />
        </div>
      </div>
      <button className="w-full bg-black text-white font-bold py-2 rounded-lg" onClick={signInRequest}>
        Sign In
      </button>
      <div className="">
        Don't have an account? <a className="underline cursor-pointer">Sign Up</a>
      </div>
    </div>
  )
}
