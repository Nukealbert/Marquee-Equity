import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import NotFound from './components/NotFound';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




const App:React.FC =()=> {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
   
  );
}

export default App;
