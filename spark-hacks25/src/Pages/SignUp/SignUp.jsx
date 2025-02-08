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

function Register() {
}
 

export default Register;