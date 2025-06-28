import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import './App.css';

// A simple function to check if the user is authenticated.
// In a real app, this would check localStorage, a cookie, or a context.


// A component to protect routes that require a user to be logged in.



function App() {
  return (
    <Router>
      <div className="App min-h-screen">
        <Routes>
        
          <Route path="/login" element={<Login />} />

         
          <Route
            path="/dashboard"
            element={
             
                <Dashboard />
             
            }
          />

          {/* **THIS IS THE KEY FIX:**
            This route handles the root path ('/'). It checks if the user is 
            logged in. If they are, it navigates them to the dashboard.
            If not, it sends them to the login page.
          */}
         
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;