import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const SingupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const signup = async () => {
    try {
      if(password !== confirmPassword) {
        setError('Password and Confirm Password must match')
        return;
      }
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate("/articles")
    } catch (error) {
      setError(error.message)
    }
  }
  
  return (
    <React.Fragment>
      <h1>Signup</h1>

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
      <input type='password' 
        placeholder='confirm password'
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      <button onClick={signup}>Signup</button>
      <Link to='/login'>Already have an account? Login!</Link>
    </React.Fragment>
  )
}

export default SingupPage