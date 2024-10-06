// import Header from './Header';
import React from 'react';
import Login from './Login';
import Brows from './Brows';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const Home = () => {
  return (
    <div>
    
     
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/brows" element={<Brows />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Home;
