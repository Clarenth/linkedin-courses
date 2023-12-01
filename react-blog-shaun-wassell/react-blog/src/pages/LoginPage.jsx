import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate("/articles")
    } catch (error) {
      setError(error.message)
    }
  }
  
  return (
    <React.Fragment>
      <h1>LoginPage</h1>

      {error && <p className='error'>{error}</p>}

      <input 
        placeholder='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input type='password' 
        placeholder='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={login}>Log in</button>
      <Link to='/signup'>No account? Signup!</Link>
    </React.Fragment>
  )
}

export default LoginPage