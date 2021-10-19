import React, { useState, useEffect } from 'react'









export default function Register() {
  return (
    <form className='form-container'>
      <h1>Sign Up</h1>
      <div className='form-field'>

        <label>Email
          <input
            
            name='email'
            type='email'
          />
        </label>

        <label>Username
          <input
            
            name='username'
            type='text'
          />
        </label>

        <label>Password
          <input
            
            name='password'
            type='password'
          />
        </label>

        <label>Role
          <select
            
            name='role'
          >
            <option value=''>- Select an option -</option>
            <option value='instructor'>Instructor</option>
            <option value='member'>Member</option>
          </select>
        </label>
        <label>Instructor Auth Code
          <input
            name='authcode'
            type='text'
          />
        </label>
        <button>Register</button>
      </div>
    </form>
  );
}
