import React, {useState, useEffect} from "react";
// import "../styles/pages.css";
import DaftarKelas from "../components/DaftarKelas";
import Navbars from "../components/Navbars";
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
          <Navbars/>
          <DaftarKelas />
        </div>
      </>
    );
  } else if (logUser === "false") {
    return <Navigate to="/" />;
  }
};

export default Daftar_Absensi;
