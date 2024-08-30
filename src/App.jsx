
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
// import Profile from "./pages/auth/login/registration/profile/profile";
import Home from "./pages/cms/home/Home";


// import ContactForm from "./pages/cms/contact/ContactForm";

import ContactWithMap from "./pages/cms/contact/ContactWithMap";

import AboutUs from "./pages/cms/about/AboutUs";



function App() {

  return (
    <>
        <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/" element={<Home/>} />
          {/* <Route path="/ContactForm" element={<ContactForm/>} /> */}
          <Route path="/ContactWithMap" element={<ContactWithMap/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App;
