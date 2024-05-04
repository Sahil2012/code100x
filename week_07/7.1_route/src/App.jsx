import { Suspense, lazy } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const Landing = lazy(() => import('./components/Landing'));
const Dashboard = lazy(() => import('./components/Dashboard'));

const App = () => {

  return <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Suspense><Landing /></Suspense>}/>
        <Route path='/dashboard' element={<Suspense><Dashboard /></Suspense>}/>
      </Routes>
    </BrowserRouter>    
  </div>
}

export default App;