import React, {useState, useEffect} from "react";
import "../styles/pages.css";
import DaftarKelas from "../components/DaftarKelas";
import Navbar from "../components/Navbar";
import { Navigate } from "react-router-dom";

const Daftar_Absensi = () => {
  const [logUser, setLogUser] = useState(localStorage.getItem("Log"));

  //Debug UseState
  useEffect(() => {
    console.clear();
    console.log(logUser);
  });

  if (logUser === "true") {
    return (
      <>
        <div className="DaftarAbsensi">
          <Navbar />
          <DaftarKelas />
        </div>
      </>
    );
  } else if (logUser === "false") {
    return <Navigate to="/" />;
  }
};

export default Daftar_Absensi;
