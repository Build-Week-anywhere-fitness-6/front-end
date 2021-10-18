export default function Login() {
  return (
    <form className='form-container'>
      <h1>Login</h1>
      <div className='form-field'>
      <label>Username
          <input
            
            name='username'
            type='text'
          />
        </label>

        <label>Password
          <input
            
            name='username'
            type='text'
          />
        </label>

        <button>Log in</button>
      </div>
    </form>
  );
}
