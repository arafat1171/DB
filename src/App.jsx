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
      <div className="App min-h-screen flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <Dashboard />
              }
            />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;