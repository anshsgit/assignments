import React, {useContext} from 'react';
import {AuthContext} from './AuthSystem';

const AppBar = ({login: propLogin, isLogin: propIsLogin, useContextApi: propUseContextApi, setUseContextApi: propSetUseContextApi, loggedout: propLoggedout}) => {

  const contextValue = useContext(AuthContext);
  const login_id = contextValue?.login ?? propLogin;
  const username = login_id?.username;
  const logout = contextValue?.loggedout ?? propLoggedout;
  const displayIsLogin = contextValue?.isLogin ?? propIsLogin;
  const handleLogout = contextValue?.loggedout ?? propLoggedout;

  function handleChange(event) {
    propSetUseContextApi(event.target.checked);
  }


  return (
    <div>
      <header>
        <h1>Auth System Demo</h1>

        {displayIsLogin? (<div class='displayIsLogin' >

<div class='welcome' >Welcome {username}</div>

<button class='logoutButton' onClick={handleLogout}>Logout</button> </div>)
 : 
(<span>Not logged in</span>)
}
        

      </header>

      <section class='toggleSection'>

      <label class='toggle' >Use Context API: {propUseContextApi? 'ON' : "OFF"}</label>

      <input class='checkbox' type='checkbox' id='context' checked={propUseContextApi} onChange={handleChange} />  

      </section>

      
    </div>
  )
}

export default AppBar