import { createContext, lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Lazy from './layout/Lazy';
import { baseUrl } from './shared';

export const LoginContext = createContext();

function App() {
  const Layout = lazy(()=> import('./layout/Layout'))
  const Login = lazy(()=> import('./pages/Login'))
  const Register = lazy(()=> import('./pages/Register'))
  const Dashboard = lazy(()=> import('./pages/Dashboard'))
  const Customer = lazy(()=> import('./pages/Customer'))
  const Customers = lazy(()=> import('./pages/Customers'))
  const Dictionary = lazy(()=> import('./pages/Dictionary'))
  const Definition = lazy(()=> import('./pages/Definition'))
  const NotFound = lazy(()=> import('./components/NotFound'))

  // Check localStorage for an access token
  // Long tern goal - use Refresh token and if it works, stay logged in, otherwise, send to login page
  const [loggedIn, setLoggedIn] = useState(localStorage.access ? true : false);


  useEffect(() => {
    //invoking it immediately with this function rather than waiting for the said time...
    function refreshTokens() {
      if(localStorage.refresh) {
        const url = baseUrl + 'api/token/refresh/';
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            refresh: localStorage.refresh,
          }),
        })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          localStorage.access = data.access;
          localStorage.refresh = data.refresh;
          setLoggedIn(true);
        })
      }
    }
    const minute = 1000 * 60;
    refreshTokens();
    setInterval(refreshTokens, minute * 5)
  }, [])

  function changeLoggedIn(value) {
    setLoggedIn(value);
    if(value === false) {
      localStorage.clear();
    }
  }
  return (
    <LoginContext.Provider value={[loggedIn, changeLoggedIn]}>
    <Suspense fallback={<Lazy/>}>
        <Layout>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/customers' element={<Customers/>}/>
            <Route path='/customers/:id' element={<Customer/>}/>
            <Route path='/dictionary' element={<Dictionary/>}/>
            <Route path='/dictionary/:search' element={<Definition/>}/>
            <Route path='/404' element={<NotFound/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Layout>
    </Suspense>
    </LoginContext.Provider>
  );
}

export default App;

// IMPLEMENTING SIDEBAR
    // <Suspense fallback={<Lazy/>}>
    //   <Sidebar>
    //     <Routes>      
    //     </Routes>
    //   </Sidebar>
    // </Suspense>