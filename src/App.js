import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Homepage/HomePage";
import NavbarMenu from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import "./App.css";
import Register from "./Components/Register/Register";
import StallBookingForm from "./Components/StallBookingForm/StallBookingForm";

function App() {
  return (
    <>
      <NavbarMenu />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booking" element={<StallBookingForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
