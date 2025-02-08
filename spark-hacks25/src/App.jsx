// src/App.jsx
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./Pages/LogInSignup/Login";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/SignUp/SignUp"

import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<LoginSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
    </Router>
  );
}

export default App;