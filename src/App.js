import logo from "./logo.svg";
import ReactDOM from "react-dom/client";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Upload from "./components/Upload";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      {/* <Sidebar></Sidebar> */}

      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/Home" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        {/* <Route path="/Sidebar" element={<Sidebar />} /> */}
        <Route path="/Upload" element={<Upload />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
