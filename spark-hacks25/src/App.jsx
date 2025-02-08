import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./Pages/LogInSignup/Login";
{/*import Home from "./Pages/Home/Home";
import Signup from "./Pages/LogInSignup/Signup"; */}
function App() {
  return (
    <Router>
      <Routes>
       {/*<Route path="/" element={<Home />} /> */}
        <Route path="/" element={<LoginSignup />} />
       {/*<Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </Router>
  );
}

export default App
