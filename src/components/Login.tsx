import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

    const handleLogin=()=>{
      if(username==='admin' && password==='admin'){
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/dashboard');
      }
    }
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login