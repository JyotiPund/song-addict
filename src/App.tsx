import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route,Routes} from 'react-router-dom';
import Login from './pages/login/Login';
import Registeration from './pages/registration/Registeration';
function App() {
  return (
    <div className="App">
     
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/registration" element={<Registeration/>}/>
        </Routes>
     
    </div>
  );
}

export default App;
