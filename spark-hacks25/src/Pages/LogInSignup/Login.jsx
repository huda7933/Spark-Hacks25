import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Login.css";


const Login = () => {
  const location = useLocation();
  const [isLoginActive, setIsLoginActive] = useState(true);


  useEffect(() => {
   
    const params = new URLSearchParams(location.search);
    const type = params.get("type");
    setIsLoginActive(type !== "signup"); // Default to login if no "type"
  }, [location]);


  return (
    <section className={`wrapper ${isLoginActive ? "active" : ""}`}>
      <div className="form signup">
        <header onClick={() => setIsLoginActive(false)}>Signup</header>
        <form>
          <input type="text" placeholder="Full name" required />
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <div className="checkbox">
            <input type="checkbox" id="signupCheck" />
            <label htmlFor="signupCheck">I accept all terms & conditions</label>
          </div>
          <input type="submit" value="Signup" />
        </form>
      </div>
      <div className="form login">
        <header onClick={() => setIsLoginActive(true)}>Login</header>
        <form>
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <a href="#">Forgot password?</a>
          <input type="submit" value="Login" />
        </form>
      </div>
    </section>
  );
};


export default Login;


