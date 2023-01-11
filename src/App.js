import './index.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Lazy from './layout/Lazy';

function App() {
  const Sidebar = lazy(()=> import('./components/Sidebar'))
  const Dashboard = lazy(()=> import('./pages/Dashboard'))
  return (
    <Suspense fallback={<Lazy/>}>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
        </Routes>
      </Sidebar>
    </Suspense>
  );
}

export default App;
