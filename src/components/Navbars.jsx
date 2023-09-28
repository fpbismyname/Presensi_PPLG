import React, { useState, useEffect } from "react";
// import "../styles/pages.css";
import "../styles/navbar.css"
import { useNavigate } from "react-router";
import { Navbar, NavbarBrand, NavbarCollapse, Nav} from 'react-bootstrap';

const Navbars = () => {
  const [logUser, setLogUser] = useState(localStorage.getItem("Log"));

  const navigate = useNavigate();

  const Logout = () => {
    localStorage.setItem("Log", false);
    setLogUser(localStorage.getItem("Log"));
  };

  //Check
  useEffect(() => {
    if (logUser === "false") {
      navigate("/");
    }
  }, [logUser]);

  return (
    <>
      <Navbar>
        <NavbarBrand onClick={()=>{ navigate('/beranda') }}>PPLG</NavbarBrand>
          <NavbarCollapse className="justify-content-end">
            <Nav.Link onClick={()=>{ navigate('/daftarabsensi')}}>Daftar Absensi</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/beranda')}}>Kontak</Nav.Link>
            <Nav.Link onClick={Logout}>Logout</Nav.Link>
          </NavbarCollapse>
      </Navbar>
    </>
    // <div className="Navbar">
    //   <h1 className="Nav_Brand">PPLG</h1>
    //   <ul>
    //     <li onClick={()=>{navigate('/beranda')}}>Beranda</li>
    //     <li onClick={()=>{navigate('/daftarabsensi')}}>Daftar Absensi</li>
    //     <li>Kontak</li>
    //     <li onClick={Logout}>Logout</li>
    //   </ul>
    // </div>
  );
};

export default Navbars;
