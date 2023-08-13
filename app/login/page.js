'use client';
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Alert from '@/components/alert';
import Card from '@/components/card';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err,seterr]=useState('')
    const[log,setlog]=useState(false)
    const [apikey,setapikey]=useState('');
    const [count,setcount]=useState('');
   const handleLogin = async (e) => {
        e.preventDefault();
        let formdata = new FormData(e.target)
        let email = formdata.get('email');
        let password = formdata.get('password');
        
       
        try {
            const {data} = await axios.post('https://sparkling-purse-bull.cyclic.app/login', {
                email: email,
                password: password
              }, {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
         setlog(true)
         setapikey(data.uid)
         setcount(data.count)
        }
        catch (error) {
          console.error(error);
          if(error.response.status===401){
            seterr('100');
        }
        else if(error.response.status===404){
            seterr('200');
        }
       
    }

    setTimeout(() => {
        seterr(null);}, 5000);
    }
  return (
    
    <div className='items-center justify-center bg-base-100'>
    {err==='100' && <Alert message="no user found"/>}
    {err==='200' && <Alert message="wrong password"/>}
    { log===true ? <Card apikey={apikey} rate={count}/> :
        <form className="form-control h-screen flex items-center justify-center " onSubmit={handleLogin}>
        <label className="label">Email</label>
        <input type="email" placeholder="Type here" name='email' className="input input-bordered input-primary w-full max-w-xs" onChange={(e)=>{setEmail(e.value)}} />
        <label className="label">Password</label>
        <input type="password" placeholder="Type here" name='password' className="input input-bordered input-primary w-full max-w-xs" onChange={(e)=>{setPassword(e.value)}} />
        <button className="btn btn-primary mt-5 w-min">Login</button>
        </form>
    }
    </div>
  )
}

export default Login