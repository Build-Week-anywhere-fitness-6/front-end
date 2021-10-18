import React, { useState, useEffect } from 'react';

export default function Register() {
  return (
    <form className='form-container'>
      <h1>Sign Up</h1>
      <div className='form-field'>
        <label>
          Email
          <input name='email' type='text' />
        </label>

        <label>
          Username
          <input name='username' type='text' />
        </label>

        <label>
          Password
          <input name='username' type='text' />
        </label>

        <label>
          Role
          <select name='role'>
            <option value=''>- Select an option -</option>
            <option value='instructor'>Instructor</option>
            <option value='member'>Member</option>
          </select>
        </label>
        <button className='user-btn'>Register</button>
      </div>
    </form>
  );
}
