import './index.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Lazy from './layout/Lazy';

function App() {
  const Layout = lazy(()=> import('./layout/Layout'))
  const Dashboard = lazy(()=> import('./pages/Dashboard'))
  const Customer = lazy(()=> import('./pages/Customer'))
  const Customers = lazy(()=> import('./pages/Customers'))
  const Dictionary = lazy(()=> import('./pages/Dictionary'))
  const Definition = lazy(()=> import('./pages/Definition'))
  const NotFound = lazy(()=> import('./components/NotFound'))
  return (
    <Suspense fallback={<Lazy/>}>
        <Layout>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/customers' element={<Customers/>}/>
            <Route path='/customers/:id' element={<Customer/>}/>
            <Route path='/dictionary' element={<Dictionary/>}/>
            <Route path='/dictionary/:search' element={<Definition/>}/>
            <Route path='/404' element={<NotFound/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Layout>
    </Suspense>
  );
}

export default App;

// IMPLEMENTING SIDEBAR
    // <Suspense fallback={<Lazy/>}>
    //   <Sidebar>
    //     <Routes>
    //       
    //     </Routes>
    //   </Sidebar>
    // </Suspense>