import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from 'react-router-dom';
import './App.css';
import Search from './Components/Search/Search';
import Results from './Components/Results/Results';

function App() {
  return (
    <Router>
      <Routes>
      

      <Route  path='/' Component={Search}/>
      <Route  path='/Results' Component={Results}/>
      </Routes>
    
    
    </Router>
  );
}

export default App;
