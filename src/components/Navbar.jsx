import React, { useState, useEffect } from "react";
import "../styles/pages.css";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [logUser, setLogUser] = useState(localStorage.getItem("Log"));

  const navigate = useNavigate();

  const Logout = () => {
    localStorage.setItem("Log", false);
    setLogUser(localStorage.getItem("Log"));
  };

  //Check
  useEffect(() => {
    if (logUser === "true") {
      navigate("/beranda");
    } else if (logUser === "false") {
      navigate("/");
    }
  }, [logUser]);

  return (
    <div className="Navbar">
      <h1 className="Nav_Brand">PPLG</h1>
      <ul>
        <li onClick={()=>{navigate('/beranda')}}>Beranda</li>
        <li>Daftar Absensi</li>
        <li>Kontak</li>
        <li onClick={Logout}>Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
