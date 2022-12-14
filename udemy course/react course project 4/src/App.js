import React, { useState } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginStorage = localStorage.getItem('isLogin')

  React.useEffect(()=> {
    if(loginStorage == '1') {
      setIsLoggedIn(true)
    }
  },[])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem('isLogin','1')
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    // localStorage.setItem('isLogin','0')
    localStorage.removeItem('isLogin')
  };

  return (
      <AuthContext.Provider value={{ isLoggedIn : isLoggedIn, onLogout : logoutHandler}}> 
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
  );
}

export default App;
