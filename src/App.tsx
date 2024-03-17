import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch as Routes, Route } from "react-router-dom";

// components
import WebApp from './app/WebApp';

export default function App() {


  return (
    <div className="app">
      {/* Path Router */}
      <Router
        basename='/'
      >      

        {/* Routes */}
        <Routes>

          {/* WebApp */}
          <Route path='/:page?' component={WebApp} />


        </Routes>
      </Router>
    </div>
  );
}

