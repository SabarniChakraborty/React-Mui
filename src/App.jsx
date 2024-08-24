
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Login from "./pages/auth/login/Login";
// import Registration from "./pages/auth/login/registration/registration";
// import Profile from "./pages/auth/login/registration/profile/profile";
import Home from "./pages/cms/home/Home";

function App() {

  return (
    <>
        <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/registration" element={<Registration />} />
          <Route path="/profile" element={<Profile />} /> */}
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App;
