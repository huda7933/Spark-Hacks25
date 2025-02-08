// src/App.jsx
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/LogInSignup/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";

import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} /> 
      </Routes>
    </Router>
  );
}

export default App;
