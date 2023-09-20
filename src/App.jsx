import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Daftar_Absensi from "./pages/DaftarAbsensi";

const App = () =>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/beranda" element={<Dashboard/>}/>
        <Route path="/daftarabsensi" element={<Daftar_Absensi/>}/>
      </Routes>
    </Router>
  );
}

export default App;