import React, { useState } from 'react';

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className='form-container'>
      <h1>Login</h1>
      <div className='form-field'>
      <label>Username
          <input
            value={credentials.username}
            onChange={handleChange}
            name='username'
            type='text'
          />
        </label>

        <label>Password
          <input
            value={credentials.password}
            onChange={handleChange}
            name='password'
            type='password'
          />
        </label>

        <button>Log in</button>
      </div>
    </form>
  );
}
