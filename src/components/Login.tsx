import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './styles.css'


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]=useState('');
  const navigate = useNavigate();

    const handleLogin=()=>{
      if(username==='admin' && password==='admin'){
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/dashboard');
      }
      else{
          setError("Try Again ");
          setTimeout(() => {
            setError('');
          }, 3000);
      }
    }
  return (
    <div className='login_h'>
      <span className="heading">Login to Tasker</span>
      <input
        className='input_login'
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        className='input_login'
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <p style={{color:'red', fontSize:'25px', fontWeight:'bold'}}>{error}</p>
      <button className='login_submit' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login