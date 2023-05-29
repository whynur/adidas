import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function LoginPages() {

    const [name,setname] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8081/api/v1/auth/authenticate', {
                name,
                password
            });
            const { token } = response.data;
            localStorage.setItem('token', token);
            window.location.replace('/');
        } catch (error) {
            console.error('Login failed', error);
        }
    };

  return (
    <div className='container' style={{width:'30%',marginTop:'15%'}}>
    <div id='login'>
     <input type="text" className="form-control" id="name" placeholder="Name" style={{width:'65%',background:'rgba(233, 233, 233, 0.56)',marginLeft:'17.5%',marginTop:'10%'}} onChange={(event) => setname(event.target.value)}/>
     <input type="password" className="form-control" id="password" placeholder="Password" style={{width:'65%',background:'rgba(233, 233, 233, 0.56)',marginLeft:'17.5%',marginTop:'5%',marginBottom:'5%'}} onChange={(event) => setPassword(event.target.value)}/>
     <label style={{fontSize:'13px'}}><input type="checkbox"/> Remember me</label><a style={{fontSize:'13px',marginLeft:'10%',textDecoration:'none',color:'#000'}} href="/">Forgot your password?</a><br />
     <button className="btn btn-dark rounded-pill" style={{background:'#000', width:'65%', textAlign:'center',fontSize:'20px', fontFamily:'Livvic',fontWeight:'bold',marginTop:'5%'}} onClick={handleLogin}>Sign in</button>
    </div>
    </div>
  )
}
