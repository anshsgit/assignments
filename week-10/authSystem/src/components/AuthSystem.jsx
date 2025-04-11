import React, {useState, createContext, useContext} from 'react';
import AppBar from './AppBar';
import Home from './Home';
import Login from './Login';

export const AuthContext = createContext(null);

function ContextProvider({contextValue, children}) {
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

const AuthSystem = () => {
  const [login, setLogin] = useState({username: '', password: ''});
  const [isLogin, setIsLogin] = useState(false);
  const [useContextApi, setUseContextApi] = useState(false);

  function loggedin({username, password}) {
    setLogin(login => ({username, password}));
    setIsLogin(true);
  }

  function loggedout() {
    setLogin(login => ({username: '', password: ''}));
    setIsLogin(false);
  }

  const contextValue = useContextApi? {login, isLogin, loggedin, loggedout} : null;

  return (
    <div>
      <ContextProvider contextValue = {contextValue}>
        <AppBar login={login} isLogin={isLogin} useContextApi={useContextApi} setUseContextApi={setUseContextApi} loggedout={loggedout} />
        {isLogin? (<Home />) : (<Login loggedin={loggedin} useContextApi={useContextApi} />)}
      </ContextProvider>
    </div>
  );
}

export default AuthSystem