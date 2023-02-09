import './index.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Lazy from './layout/Lazy';

function App() {
  // const Sidebar = lazy(()=> import('./components/Sidebar'))
  const Header = lazy(()=> import('./components/Header'))
  const Dashboard = lazy(()=> import('./pages/Dashboard'))
  const Customers = lazy(()=> import('./pages/Customers'))
  const Dictionary = lazy(()=> import('./pages/Dictionary'))
  const Definition = lazy(()=> import('./pages/Definition'))
  const NotFound = lazy(()=> import('./components/NotFound'))
  return (
    <Suspense fallback={<Lazy/>}>
        <Header>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/customers' element={<Customers/>}/>
            <Route path='/dictionary' element={<Dictionary/>}/>
            <Route path='/definition/:search' element={<Definition/>}/>
            <Route path='/404' element={<NotFound/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Header>
    </Suspense>
  );
}

export default App;

// IMPLEMENTING SIDEBAR
    // <Suspense fallback={<Lazy/>}>
    //   <Sidebar>
    //     <Routes>
    //       <Route path='/' element={<Dashboard/>}/>
    //     </Routes>
    //   </Sidebar>
    // </Suspense>
