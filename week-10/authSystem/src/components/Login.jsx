import React from 'react';

const Login = ({loggedin: propLoggedin}) => {

  const username = React.useRef(null);
  const password = React.useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const loginValues = {username: username.current.value,
    password: password.current.value};
    
      if(loginValues.username && loginValues.password) {
        propLoggedin(loginValues);
      }
      else {
        alert('Fill both the details.');
      }

  }

  return (
    <div class='login'>

      <h2>Login Form</h2>
        <form class='loginForm' onSubmit={handleSubmit}>

        <label htmlFor='username'>Username: </label>
        <input id='username' type='text' placeholder='USERNAME' ref={username} /> <br />

        <label htmlFor='password'>Password: </label>
        <input id='password' type='text' placeholder='PASSWORD' ref={password} /> <br />

        <input type='submit'/>
        </form>
    </div>
  )
}

export default Login