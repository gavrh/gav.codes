import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <div className='bg-[#14181d] overlfow-y-scroll flex justify-center'>
    <Router basename='/'>      
      <Routes>
        <Route path='/:page?' element={<App />} />
      </Routes>
    </Router>
  </div>,
  document.getElementById('root')
);