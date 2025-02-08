import React from 'react';

import './SignUp.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}from 'mdb-react-ui-kit';


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Bname, setName] = useState("");
}

const handleSignUp = (e) => {
  e.preventDefault();
  console.log("Signup email:", email, "Business Name:", Bname, "password:", password);
};

function App() {
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input 
          type="email"
          placeholder='Enter Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />
      
        <input 
          type="Bname"
          placeholder='Enter Official Business Name'
          value={Bname}
          onChange={(e) => setName(e.target.value)}
          required />

        <input 
          type="password"
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required />
        
        <input 
          type="password"
          placeholder='Confirm password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required />
        <button type="submit">Verify Your Business</button>
      </form>
    </div>
  );
  
}

export default App;