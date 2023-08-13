'use client';
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Alert from '@/components/alert';
import Card from '@/components/card';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err,seterr]=useState('')
    const[log,setlog]=useState(false)
    const [apikey,setapikey]=useState('');
    const [count,setcount]=useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        let formdata = new FormData(e.target)
    let email = formdata.get('email');
    let password = formdata.get('password');
      
        try {
            const {data} = await axios.post('https://sparkling-purse-bull.cyclic.app/signup', {
                email: email,
                password: password
                
              }, {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
          console.log(data);
            setapikey(data.uid)
            setcount(data.count)
          setlog(true)
        
        } catch (error) {
          console.error(error);
          if(error.response.status===401){
            seterr('100');
        }
    }
    setTimeout(() => {
        seterr(null);}, 5000);
       
      };
  return (
    <div className='items-center justify-center bg-base-100'>
    {err==='100' && <Alert message="User already exists login"/>}
    { log===false ?
        <form className="form-control h-screen flex items-center justify-center " onSubmit={handleSignup}>
        <label className="label">Email</label>
        <input type="email" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" name='email' onChange={(e)=>{setEmail(e.value)}} />
        <label className="label">Password</label>
        <input type="password" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" name='password' onChange={(e)=>{setPassword(e.value)}} />
        <button className="btn btn-primary mt-5 w-min">Signup</button>
        </form> : <Card apikey={apikey} rate={count}/> }
    </div>
  )
}

export default Signup