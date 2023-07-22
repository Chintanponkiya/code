import { useState } from 'react'
import imag from './../Image/Alogo.png'
import './Login.css'


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsernameError('');
    setPasswordError('');

    if (username === 'admin' && password === 'admin') {

      console.log('Logged in!');
      window.open('/dashboard', '_blank');
    } else {

      if (username !== 'admin') {
        setUsernameError('Invalid username');
      }
      if (password !== 'admin') {
        setPasswordError('Invalid password');
      }
    }
  };


  return (

    <div className='page'>
      <img src={imag} alt="" />

      <form action="" onSubmit={handleSubmit}>
        <div className='user'>
          <input type="text"
            name="user"
            id="user"
            placeholder='Enter a User id'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={() => setUsernameError('')}
          />
          {usernameError && <div className='error'>{usernameError}</div>}
        </div>
        <div className='password'>
          <input
            type="password"
            name="passw"
            id="passw"
            placeholder='Enter a password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={() => setPasswordError('')}
          />
          {passwordError && <div className='error'>{passwordError}</div>}
        </div>
        <button className='btn' type="submit">Log in</button>
      </form>
 </div>

)
}
